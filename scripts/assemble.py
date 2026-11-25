"""Restore and verify the exported Godot packs without third-party dependencies."""
from pathlib import Path
import hashlib,json,os
ROOT=Path(__file__).resolve().parents[1]
manifest=json.loads((ROOT/'payloads/manifest.json').read_text(encoding='utf-8'))
assert manifest['schema']==1
for entry in manifest['files']:
    target=(ROOT/entry['output']).resolve()
    if not target.is_relative_to((ROOT/'site').resolve()):raise RuntimeError('Invalid output path')
    target.parent.mkdir(parents=True,exist_ok=True)
    pending=target.with_suffix('.pck.assembling')
    complete=hashlib.sha256();written=0
    with pending.open('wb') as out:
        for part in entry['parts']:
            path=(ROOT/part['path']).resolve()
            if not path.is_relative_to((ROOT/'payloads').resolve()):raise RuntimeError('Invalid part path')
            sha=hashlib.sha256();length=0
            with path.open('rb') as source:
                for data in iter(lambda:source.read(8*1024*1024),b''):
                    out.write(data);sha.update(data);complete.update(data);length+=len(data);written+=len(data)
            if length!=part['bytes'] or sha.hexdigest()!=part['sha256']:raise RuntimeError('Part checksum failed: '+part['path'])
    if written!=entry['bytes'] or complete.hexdigest()!=entry['sha256']:raise RuntimeError('Pack checksum failed: '+entry['output'])
    os.replace(pending,target)
    print(f"Verified {entry['output']}: {written:,} bytes, SHA256 {complete.hexdigest()}")
print('Both exported game packs are ready in site/.')
