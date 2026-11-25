# Garden of Afterlight

Two browser experiences set in the world of Garden of Afterlight.

**[Open the garden](https://yt-f2002.github.io/garden-of-afterlight/)** · [Play the 2D story](https://yt-f2002.github.io/garden-of-afterlight/demo/) · [First-person 3D exploration](https://yt-f2002.github.io/garden-of-afterlight/explore-3d/)

This publishing repository contains the website, exported runtime files, a verified game-pack manifest and deployment instructions. It does not contain the original development repository, personal save files, editor caches or production work files.

## Experiences

| Entry | Scope | Controls |
| --- | --- | --- |
| `demo/` — Six stories in the garden | Investigation, companion defense, fragrance gardening, animal care, dressmaking and dye, metalwork, postal rune puzzles and musical stargazing; customer orders, material shopping and chapter showcases | Click to explore and craft; drag to cut and sew; follow highlighted actions |
| `explore-3d/` — The Cloud Courtyard | First-person exploration only; dedicated 3D gameplay is not implemented | WASD, right-mouse look, Shift, E, Escape |

Use a desktop or laptop with current Chrome or Edge. Each experience states its actual first-load download size before loading. English is the default on a first browser visit; the in-game language switch also supports Chinese. Browser-local progress is separate from desktop saves.

Separate starting points are available for [Chapter 4 — Jewelry](https://yt-f2002.github.io/garden-of-afterlight/chapter-4/), [Chapter 5 — Assembled Glyphs](https://yt-f2002.github.io/garden-of-afterlight/chapter-5/) and [Chapter 6 — Star Scores](https://yt-f2002.github.io/garden-of-afterlight/chapter-6/). Each provides prerequisite progress and starter supplies in its own save. All three share the same runtime download; the full story retains sequential chapter progression.

Customer orders allow six successful deliveries per day. Each cleared defense stage offers three daily rewarded repeats, shared between instant sweeps and manual replay; first clears are separate. Both reset at 00:00 UTC+8. Flowers grow on saved timers, companions gain experience and level up automatically, and completed works can be exhibited or sold as individual items. Workshops are available during their unlocked chapter, so you can craft, earn more materials and return to your work. After completing all six chapters, choose to return to the real world or remain in the garden for daily activities.

The exhibition displays six kinds of saved works on wooden plinths at different depths. Select a work to edit its display or export a 1536 × 2048 PNG card with its title, author and recorded creation time. The browser can download the card or open system sharing when supported. Older works without a recorded timestamp are labelled accordingly. First chapter completions advance to the next story; returning from another activity does not automatically replay a conversation already seen.

## Publish with GitHub Pages

1. Put this repository on the owner's GitHub account with `main` as its branch.
2. Under **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. The included workflow restores the packs, verifies every part and complete pack with SHA256, and deploys `site/`.

Each entry in `payloads/manifest.json` names its versioned GitHub Release. The expanded 2D pack uses `garden-2d-2026-11-25-v2`; the 3D pack remains on `web-demo-2026-11-25`. Actions downloads and verifies the exact parts before deployment.

The Actions deployment supplies the final URL. Two navigation buttons on the homepage open the demos. The exported games run without a backend or cross-origin isolation headers.

## Why the game packs are split

The Godot `.pck` files exceed GitHub's normal 100 MiB per-file limit. `payloads/manifest.json` describes Release assets as ordered parts of at most 95 MiB. The workflow restores the original files before publication. The browser receives ordinary Godot packs; it does not join the parts itself. Reconstructed `.pck` files are intentionally ignored by Git.

## Edit the published website

Open the file on GitHub, choose **Edit**, make the change and commit it to `main`. GitHub Actions publishes the update at the same online address.

- `site/index.html`: homepage text, navigation and experience cards.
- `site/how-to-play.html` and `site/assets/handbook.js`: bilingual chapter and activity guidance.
- `site/about.html` and `site/assets/about.js`: creator profile, contact and interactive production workflow.
- `site/assets/handbook.css` and `site/assets/about.css`: handbook and About layouts.
- `site/demo/index.html` and `site/explore-3d/index.html`: game launch screens and instructions.
- `site/assets/site.css`: homepage appearance.
- `site/assets/player-v2.css` and `site/assets/player-v2.js`: 2D browser viewport and player controls.
- `site/assets/player.css`: the separate 3D player appearance.

The play links work directly in a desktop browser. Changes to gameplay require a new Godot export; editing the website does not edit the compiled game.

## Build provenance and updates

`build-info.json` records the exact engine version, source-project locations, digest of the staged source manifests, web-only adaptations, runtime sizes and hashes. No unrelated repository history is included.

For a game update, refresh and export the affected isolated publishing project with the matching Godot 4.7.2 single-thread Web templates, preserve its player page, then regenerate its pack parts and manifest entry. Upload those parts to a new GitHub Release. Update that entry's release name, build metadata and runtime files, then commit them together. Unchanged experiences retain their existing release. The parts stay in Releases rather than Git history. Actions will reject corrupted or mismatched parts.

The static homepage and player presentation can be updated without rebuilding the game packs.

## Optional ending statistics

Ending statistics are currently disabled. `site/assets/ending-analytics.json` contains no remote endpoint, so no ending data is sent outside this site. The full game records a pending ending event locally after the choice is successfully saved. The three standalone trials are excluded.

To activate the prepared interface later, provide an HTTPS endpoint and set `enabled` to `true`. It receives `{"event":"ending_choice","choice":"reality" or "garden","event_id":"random UUID","version":2}`. No player name, email, save contents or other game actions are sent. The endpoint should store `event_id` uniquely, then aggregate by `choice`; return HTTP 2xx only after accepting the event. Local delivery is marked complete after success and retried on a later visit or reconnection after failure. Count one choice per browser storage, not verified unique people: clearing storage or changing browsers can create another record. A managed analytics service can be connected through this endpoint without exporting the game again.

## Credits

Garden of Afterlight is an original game project made with an AI-assisted creative workflow.

Runtime: [Godot Engine](https://godotengine.org/), distributed under the [MIT licence](https://godotengine.org/license/).

The 2D pack bundles Noto CJK and Noto Symbols fonts under the SIL Open Font License, including their licence notices. Original chapter characters and circular action icons were created through an AI-assisted art workflow.
