# Components

**Interface pieces, defined before they are built.**

Opens in **Phase 4**. Currently empty.

---

## What lives here

- Component definitions: purpose, anatomy, sizing, spacing, and states
- Every state designed — default, hover, focus, active, empty, loading, error
- Behaviour specifications, including motion and responsive rules
- The component inventory, and the rationale for what is in it

## What does not

Production code. Components are defined here as design decisions; they are implemented in `/website`. Anything invented at build time to solve a page-specific problem.

## Standards

Every component inherits from decisions already made: spacing from `layouts/`, stroke weights from `iconography/`, type from `typography/`, easing from `motion/`. Nothing introduces a new value. If a component needs something the system does not have, the system gets it first.

Undesigned states are where identities leak. An empty gallery, a failed upload, a focused link — each is a moment the brand is being seen, and each is designed with the same attention as a hero image.

The inventory stays small. Components are added when a real page needs them, not in anticipation.

## Naming

`component-gallery.md` · `component-caption.md` · `component-inventory.md`

---

*Governed by [`docs/visual-language-system.md`](../../docs/visual-language-system.md) § 10*
