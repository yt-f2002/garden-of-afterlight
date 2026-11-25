"""Download each game's immutable release parts, allowing independent game updates."""
from pathlib import Path
import json, subprocess

ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT / 'payloads/manifest.json').read_text(encoding='utf-8'))
for entry in manifest['files']:
    release = entry.get('release', 'web-demo-2026-11-25')
    for part in entry['parts']:
        target = (ROOT / part['path']).resolve()
        if not target.is_relative_to((ROOT / 'payloads').resolve()):
            raise ValueError('Invalid payload destination')
        target.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run(['gh', 'release', 'download', release, '--pattern', target.name,
                        '--dir', str(target.parent)], check=True)
print('Versioned game packs downloaded; checksum verification follows.')
