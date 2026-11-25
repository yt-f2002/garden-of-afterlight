# Garden of Afterlight

Two browser experiences set in the world of Garden of Afterlight.

**[Open the garden](https://yt-f2002.github.io/garden-of-afterlight/)** · [Story & dressmaking demo](https://yt-f2002.github.io/garden-of-afterlight/demo/) · [First-person 3D exploration](https://yt-f2002.github.io/garden-of-afterlight/explore-3d/)

This publishing repository contains the website, exported runtime files, a verified game-pack manifest and deployment instructions. It does not contain the original development repository, personal save files, editor caches or production work files.

## Experiences

| Entry | Scope | Controls |
| --- | --- | --- |
| `demo/` — The Blank Signature | Existing main-game story entry, investigation and dressmaking systems; a 2D interface with a 3D workbench | Click to explore; drag to adjust, cut and sew; hold the final needle |
| `explore-3d/` — The Cloud Courtyard | First-person exploration only; dedicated 3D gameplay is not implemented | WASD, right-mouse look, Shift, E, Escape |

Use a desktop or laptop with current Chrome or Edge. Each experience states its actual first-load download size before loading. English is the default on a first browser visit; the in-game language switch also supports Chinese. Browser-local progress is separate from desktop saves.

## Publish with GitHub Pages

1. Put this repository on the owner's GitHub account with `main` as its branch.
2. Under **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. The included workflow restores the packs, verifies every part and complete pack with SHA256, and deploys `site/`.

The versioned game-pack parts are attached to the GitHub Release `web-demo-2026-11-25`. Actions downloads and verifies them before deployment.

The Actions deployment supplies the final URL. Two navigation buttons on the homepage open the demos. The exported games run without a backend or cross-origin isolation headers.

## Why the game packs are split

The Godot `.pck` files exceed GitHub's normal 100 MiB per-file limit. `payloads/manifest.json` describes Release assets as ordered parts of at most 95 MiB. The workflow restores the original files before publication. The browser receives ordinary Godot packs; it does not join the parts itself. Reconstructed `.pck` files are intentionally ignored by Git.

## Edit the published website

Open the file on GitHub, choose **Edit**, make the change and commit it to `main`. GitHub Actions publishes the update at the same online address.

- `site/index.html`: homepage text, navigation and experience cards.
- `site/credits.html`: project notes.
- `site/how-to-play.html` and `site/assets/handbook.js`: bilingual chapter and activity guidance.
- `site/about.html` and `site/assets/about.js`: creator profile, contact and interactive production workflow.
- `site/assets/handbook.css` and `site/assets/about.css`: handbook and About layouts.
- `site/demo/index.html` and `site/explore-3d/index.html`: game launch screens and instructions.
- `site/assets/site.css` and `site/assets/player.css`: website appearance.

The play links work directly in a desktop browser. Changes to gameplay require a new Godot export; editing the website does not edit the compiled game.

## Build provenance and updates

`build-info.json` records the exact engine version, source-project locations, digest of the staged source manifests, web-only adaptations, runtime sizes and hashes. No unrelated repository history is included.

For a game update, export the two isolated publishing projects with the matching Godot 4.7.2 single-thread Web templates, preserve the player pages, then regenerate the pack parts and manifest. Upload the complete parts to a new GitHub Release. Update the release tag in the workflow, the manifest, build metadata and runtime files, then commit them together. The parts stay in Releases rather than Git history. Actions will reject corrupted or mismatched parts.

The static homepage and player presentation can be updated without rebuilding the game packs.

## Credits

Garden of Afterlight is an original game project made with an AI-assisted creative workflow. See the website's project notes for context.

Runtime: [Godot Engine](https://godotengine.org/), distributed under the [MIT licence](https://godotengine.org/license/).
