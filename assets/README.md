# Assets

**Source material and finished files.** The library everything else draws from.

---

The distinction that keeps this folder useful: `/design-system` holds *decisions*, `/assets` holds *files*. A logo's construction and reasoning live in `design-system/symbols`. The twelve exported logo files someone will actually send to a printer live in `assets/logos`.

| Folder | Holds |
| --- | --- |
| `logos/` | Distributable mark files, every format and lockup |
| `photography/` | The working image library, selected and prepared |
| `mockups/` | Presentation renders and photographed pieces |
| `illustrations/` | Drawn work outside the icon family |
| `exports/` | Finished deliverables, dated and versioned |

---

## Naming

Lowercase, hyphenated, no spaces. Structure reads from general to specific, with variant and format last:

```
sharnay-mark-primary-black.svg
sharnay-mark-primary-white.svg
sharnay-monogram-stacked-black.eps
sharnay-guidelines-2026-08-14.pdf
```

Version numbers are zero-padded (`v01`, not `v1`). Dates are ISO (`2026-08-14`), and they appear only on dated deliverables — not on working files, where they are noise.

## Colour and format

Screen assets in sRGB. Print assets in the profile the printer specifies, never guessed. Vector wherever a form is vector; raster only where the source genuinely is.

Every logo export exists in SVG, PDF, EPS, and PNG at a stated size, in black, white, and any approved colour variant. Incomplete export sets are how the wrong file ends up on a banner.

## Hygiene

Nothing enters `/assets` until it has been approved. Work in progress stays in its `/design-system` folder.

Superseded files move to `/archive`, never renamed to `-old`, `-final`, or `-final-2`.

Large binaries are kept deliberately. This is a design repository, not a photo archive — the photography here is the working selection, not the client's full library.

---

*Conventions defined in the root [`README.md`](../README.md) § 08*
