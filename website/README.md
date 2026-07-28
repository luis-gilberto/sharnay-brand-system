# Website

**The system rendered in its primary public medium.**

Opens in **Phase 4**. Currently empty, deliberately.

---

This folder is empty because the website is built last among the primary surfaces, and for a specific reason: a site built before the language is settled becomes the language by accident. Every pattern chosen under build pressure hardens into a precedent, and undoing precedent is more expensive than waiting.

When this folder opens, everything in it will inherit from `/design-system`. Nothing will be invented here.

---

## What will live here

- Design files for every template, at every breakpoint
- Information architecture and the content model
- The production build
- Image preparation standards: format, compression, colour profile, dimensions
- Performance and accessibility targets, set before build rather than measured after
- Deployment and environment notes

## What will not

Design system decisions. If the site needs a value, a component, or a behaviour that does not exist yet, it is defined in `/design-system` first and used here second. This rule is the only thing preventing the website from quietly becoming the source of truth.

## Standards, set now

**Images are the only thing permitted to be visually loud.** The interface stays in the mid-tones.

**Every state is designed.** Empty, loading, error, focused, and offline are all moments the brand is being seen.

**Accessibility is a design requirement.** Contrast, focus states, motion preferences, and alternative text are composed, not remediated.

**Performance is a design constraint.** Targets are agreed before the first layout, because a gallery site's weight is decided by design decisions, not by engineering ones.

## Before this folder opens

Phase 3 must be signed off, and a real photography selection must exist. The site cannot be finished against placeholder images — the pacing of a gallery is determined by the actual pictures in it.

---

*Governed by [`docs/visual-language-system.md`](../docs/visual-language-system.md) § 10 · Planned in [`docs/roadmap.md`](../docs/roadmap.md) Phase 4*
