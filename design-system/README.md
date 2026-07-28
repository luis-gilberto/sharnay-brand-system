# Design System

The language itself. Nine folders, one inheritance.

---

Everything here descends from the aperture construction in `symbols/`. That is not an organizing metaphor — it is a working dependency. The angle set drawn there governs the icons; the icon grid informs the layouts; the layout rhythm sets the motion timing. Changing something upstream means revisiting everything downstream, which is a good reason to draw the upstream work slowly.

This folder holds the source of truth for each system. Applications live elsewhere: `/website`, `/social`, and `/print` consume what is defined here and add nothing of their own.

| Folder | Holds | Opens |
| --- | --- | --- |
| `symbols/` | The aperture construction, the mark, the monogram | Phase 2 |
| `typography/` | Type selection, scale, specimens | Phase 2 |
| `color/` | Palette, ratios, application rules | Phase 2 |
| `iconography/` | The icon family and its construction grid | Phase 2 |
| `graphic-elements/` | Rules, frames, registration and index marks | Phase 2 |
| `layouts/` | Grids, margins, aspect ratios, layout registers | Phase 2 |
| `motion/` | Optical behaviours, timing, easing | Phase 2 |
| `patterns/` | Repeatable surface systems | Phase 2, if justified |
| `components/` | Medium-agnostic interface pieces | Phase 4 |

---

## Rules of the folder

**Source files and exports are separated.** Working files stay with their system; distributable exports go to `/assets/exports`.

**Nothing enters without documentation.** Every subfolder's `README.md` records what was decided and what was rejected. A file with no written reasoning is an orphan.

**Downstream folders do not invent.** If `/website` needs something that does not exist here, it is designed here first.

**Superseded work moves to `/archive`.** Never overwritten, never renamed to `-old`.

---

*Governed by [`docs/visual-language-system.md`](../docs/visual-language-system.md)*
