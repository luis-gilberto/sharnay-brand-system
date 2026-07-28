# Sharnay Photography

**Brand System · Master Repository**

Revision A — July 2026
Designed and maintained by LG Studio

---

A photographer's identity should never be louder than the photograph.

Everything in this repository exists to make that restraint possible: a single geometry, a single typographic voice, a single set of rules, applied with enough discipline that the work is the only thing that ever raises its voice.

---

## 01 · Sharnay Photography

Sharnay Photography is a photographic practice. The camera is the instrument; the pictures are the product; everything else — the mark, the site, the cards, the grid — is the case the instrument travels in.

The brand's job is narrow and specific:

- Be recognizable before the logo is visible.
- Hold the same character across a business card, a phone screen, and a printed sleeve.
- Stay quiet enough that the photographs change without the identity aging.

We are not designing an image for a photographer. We are designing the frame the images live inside.

---

## 02 · This Repository

This is not a website repository. The website is one deliverable inside it.

`sharnay-brand-system` is the source of truth for the whole engagement — every design decision, every reason behind it, every asset, template, component, and export. If a decision was made and it is not written here, it was not made.

Three commitments govern how it is kept:

**One source.** No parallel folders on a desktop, no final-final files. What is here is current; what is superseded moves to `/archive` with a note explaining why.

**Decisions before artifacts.** Documentation leads production. A system is written down before it is drawn, and drawn before it is coded.

**Handoff-ready by default.** Another designer should be able to open this repository and continue the work without a phone call.

---

## 03 · The Visual Language System

Most photography brands are assembled: a typeface picked here, an icon set bought there, a colour sampled from a favourite image. The result photographs well once and then falls apart across a hundred touchpoints.

Sharnay's identity is generated instead of assembled. One piece of geometry — the aperture — produces the mark, the icon family, the crop proportions, the page grid, and the motion. Because everything descends from the same construction, everything agrees, including the pieces we have not designed yet.

The Visual Language System is that inheritance written down. It covers:

| System | Governs |
| --- | --- |
| Aperture | The generative geometry behind every drawn form |
| Iconography | A single family, one grid, one stroke |
| Editorial elements | Rules, captions, frame numbers, index marks |
| Layout | Grids built from photographic aspect ratios |
| Motion | Optical behaviour — focus, exposure, shutter |
| Instagram | The feed as a contact sheet |
| Print | The tactile proof of the promise |
| Digital | Site, gallery, email, document |

The full articulation lives in [`docs/visual-language-system.md`](docs/visual-language-system.md). Its conceptual foundation — the six ideas the whole identity is built on — lives in [`docs/photographer-vocabulary.md`](docs/photographer-vocabulary.md).

---

## 04 · The Design System and the Website

The website does not define the brand. It inherits it.

Every component built in `/website` traces back to a decision made in `/design-system`: a spacing value from the layout language, a stroke weight from the icon grid, an easing curve from the motion study. The site is a rendering of the system in one medium, and it is deliberately built last among the primary surfaces, because a site built before the language is settled becomes the language by accident.

The same inheritance applies to `/social` and `/print`. Three surfaces, one parent.

---

## 05 · Status

**Phase 1 · Foundation — in progress**

The architecture and the written system are being established. No visual production has begun. No production code has been written.

Nothing in `/design-system`, `/website`, `/social`, or `/print` is populated yet, and that is intentional: each folder opens when its phase begins, described in [`docs/roadmap.md`](docs/roadmap.md).

---

## 06 · Roadmap

| Phase | Stage | State |
| --- | --- | --- |
| 1 | Repository and written foundation | In progress |
| 2 | Visual language — geometry, type, colour, icons | Next |
| 3 | Brand guidelines | Planned |
| 4 | Website | Planned |
| 5 | Social system | Planned |
| 6 | Print system | Planned |
| 7 | Launch | Planned |

Phases are sequential by dependency, not by calendar. Each one is detailed in [`docs/roadmap.md`](docs/roadmap.md); the creative order of operations inside them is in [`docs/implementation-plan.md`](docs/implementation-plan.md).

---

## 07 · Structure

```
sharnay-brand-system/
│
├── docs/                     The written system — decisions and reasoning
│   ├── README.md             Reading order
│   ├── project-overview.md
│   ├── roadmap.md
│   ├── visual-language-system.md
│   ├── photographer-vocabulary.md
│   ├── design-principles.md
│   ├── implementation-plan.md
│   └── discovery.md          Working document — client questions
│
├── design-system/            The language itself
│   ├── symbols/              Marks, monogram, aperture constructions
│   ├── iconography/          One family, one grid, one stroke
│   ├── patterns/             Repeatable surface systems
│   ├── graphic-elements/     Rules, frames, registration marks
│   ├── typography/           Type selection, scale, specimens
│   ├── color/                Palette, ratios, application rules
│   ├── layouts/              Grids, margins, aspect ratios
│   ├── components/           Interface pieces, medium-agnostic
│   └── motion/               Optical behaviour and timing
│
├── website/                  Opens in Phase 4
├── social/                   Opens in Phase 5
├── print/                    Opens in Phase 6
│
├── assets/                   Source and output files
│   ├── logos/
│   ├── photography/
│   ├── mockups/
│   ├── illustrations/
│   └── exports/
│
└── archive/                  Superseded work, kept with its reasoning
```

Every folder carries a `README.md` stating what belongs in it, what does not, and the conventions that govern it.

---

## 08 · Conventions

**Naming.** Lowercase, hyphenated, no spaces, no dates in filenames unless the file is a dated deliverable: `aperture-construction-grid.svg`, `icon-family-24pt.svg`, `guidelines-2026-08-14.pdf`.

**Revisions.** Documents are lettered (Revision A, B, C). Visual work is numbered (`v01`, `v02`). Superseded files move to `/archive` rather than being overwritten.

**Language.** Documents are written to be read aloud to a client. Plain sentences, specific nouns, no filler.

**Decisions.** A decision is recorded where the system it affects is documented, together with what was rejected and why. The rejected option is often the more useful record.

---

*Sharnay Photography brand system · LG Studio*
