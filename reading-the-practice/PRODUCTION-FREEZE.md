# El Retrato · Production Freeze

**Date:** July 30, 2026  
**Runtime:** `reading-the-practice/index.html`  
**Gate:** No design changes to locked surfaces without a **documented QA failure**.

---

## Locked surfaces

| Surface | Meaning | Spec / module |
|---------|---------|----------------|
| Archive Return Plate | Return | `assets/archive-typography/` · Archive chrome in `index.html` |
| Collection geometry B | Emergence | `COLLECTION.md` · `assets/collection-constellation/` |
| Exhibition Gaze | Regard | `EXHIBITION.md` · `assets/exhibition-gaze/` |
| Opening letter | Una carta | `assets/una-carta/` · letter copy in `index.html` |
| Closing letter | Carta de cierre | Closing Letter states in `index.html` |

**Arc (locked):** Archive = Return · Collection = Emergence · Exhibition = Regard.

Canonical freeze language also lives in `EL-RETRATO.md` / `EL-RETRATO.html`.

---

## Audit trail (v3 → v4)

### Audit v3 (full-journey experience)

Scored **7.9 / 10**. Portrait stages were strong when present; journey seams held the score down:

1. EN orientation still Spanish (`Entrando a`, `min restantes`)
2. Finale threshold could announce Exhibition / Exposición
3. Room names collided (Voice vs “The Name and the Voice”; Closing vs Cierre letter)
4. Mobile menu hid quiet place/chapter
5. Form leftovers (“Your answer”, “Start reading”)
6. Silent Portrait skips with no acknowledgment

Portrait design was **not** reopened. Fixes targeted unlocked journey seams only.

### Post-fix (v4) + ship call

Scored **8.6 / 10**. Static walkthrough + mobile structural QA: **PASS**.

**Ship:** internal / client review builds.  
**Hold before public launch:** optical check on real phones (Collection, Gaze, Closing menu).  
**Freeze:** Portrait + opening/closing letters remain locked.

---

## Allowed without reopening design

Bilingual orientation strings, mobile place/menu orientation, naming outside locked stages, navigation labels, and other non-Portrait journey seams — only when they do not alter locked surfaces.
