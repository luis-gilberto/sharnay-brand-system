# El Retrato · Case-study consent model

**Status:** Canonical specification for future post-engagement authorization  
**Operator:** LG Studio  
**Contact:** luis@strategyiq.com  

This document defines a reusable consent model for public or semi-public use of participant material. It is **not** part of the El Retrato submission checkbox.

Locked principle:

> Nada privado se convierte en material público por defecto.  
> Nothing private becomes public material by default.

---

## 1. Separation from privacy acknowledgment

The submission acknowledgment:

> He leído cómo LG Studio utilizará y protegerá mis respuestas.  
> I have read how LG Studio will use and protect my responses.

authorizes only the private engagement use described in the Privacy Policy.

It must **never** be treated as authorization for:

- case-study publication
- testimonials
- promotional use
- public quotation
- unrelated AI use

Case-study authorization is always **separate**, **optional**, and **post-engagement** unless a future product surface presents it as an optional action after the work is underway.

---

## 2. Invitation

LG Studio may invite a participant to take part in a case study, testimonial, presentation, or publication.

The invitation must:

1. Be requested separately from general privacy acceptance  
2. Explain exactly what content is proposed  
3. Explain where it will appear  
4. Distinguish identified, partially anonymized, and anonymous use  
5. Allow the participant to authorize, request changes, or decline  
6. State that declining does not affect the strategic work performed for them  
7. Offer a review of the proposed public material before publication when identified or partially anonymized use is requested  

---

## 3. Authorization record (minimum fields)

| Field | Purpose |
|-------|---------|
| `consent_id` | Stable UUID for the authorization record |
| `intake_id` | Link to the original intake when applicable |
| `participant_name` | As the participant wishes to be named (or blank if anonymous) |
| `brand_name` | Brand or practice name, if authorized |
| `project_name` | Project label, if authorized |
| `approved_excerpts` | Exact approved text excerpts (byte-stable) |
| `approved_images` | List of approved images / screenshots / assets |
| `identification_mode` | `identified` · `partially_anonymized` · `anonymous` |
| `authorized_channels` | e.g. LG Studio site, StrategyIQ materials, decks, social, print |
| `review_before_publication` | `true` / `false` (required `true` for identified / partial) |
| `authorized_at` | timestamptz |
| `expires_at` | optional timestamptz |
| `withdrawal_terms` | plain-language note on how to withdraw |
| `authorized_by` | participant confirmation method (email reply, signed form, recorded checkbox) |
| `recorded_by` | LG Studio operator |
| `notes` | Internal operational notes (no public reuse without new consent) |

---

## 4. Scope options LG Studio must be able to specify

- Exact approved excerpts  
- Use with name, brand, and project  
- Partially anonymized use  
- Fully anonymous use  
- Approved images or screenshots  
- Authorized channels  
- Review-before-publication requirement  
- Optional expiration or withdrawal terms  
- Date and record of authorization  

---

## 5. Fragment and deliverable boundary

Raw intake responses in Supabase are deleted within a maximum of 90 days.

Fragments retained inside StrategyIQ strategic deliverables are part of the participant’s own project record and are still subject to this consent model before any public use.

Governing rule:

> Conservar evidencia suficiente para sostener la lectura, nunca más de la necesaria.  
> Retain enough evidence to support the reading, never more than necessary.

---

## 6. Implementation note

Do **not** add a case-study request to the current El Retrato submission flow.

When a product surface is built, prefer:

1. Private invitation from LG Studio after engagement  
2. Dedicated consent form or recorded email authorization  
3. Stored authorization record matching §3  
4. Pre-publication review for identified / partially anonymized use  
