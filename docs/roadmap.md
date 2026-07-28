# Roadmap

Sharnay Photography · Brand System
Document 02 · Revision A — July 2026

---

Seven phases. They are ordered by dependency rather than by calendar: each one exists because the next cannot be done well without it.

The sequence is deliberate. Geometry before application. Language before guidelines. Guidelines before build. Everything public last.

| | Phase | Produces | State |
| --- | --- | --- | --- |
| 1 | Repository | The written foundation | In progress |
| 2 | Visual Language | The generative core | Next |
| 3 | Brand Guidelines | The document of record | Planned |
| 4 | Website | The primary public surface | Planned |
| 5 | Social System | The daily surface | Planned |
| 6 | Print System | The physical surface | Planned |
| 7 | Launch | Release and handover | Planned |

---

## Phase 1 · Repository

**Intent**
Establish the structure and the written system before anything is drawn. This phase exists to prevent the most common failure in identity work: decisions made twice, in two places, differently.

**Deliverables**
- Repository architecture with conventions for naming, revisions, and archiving
- Project overview
- Roadmap
- Visual language system, described in intent
- Photographer's vocabulary
- Design principles
- Implementation plan

**Complete when**
The six documents are written, every folder states its purpose, and the client has reviewed and agreed the direction. Open questions from the overview are answered or explicitly deferred with a date.

**Depends on**
Nothing. This is the ground floor.

---

## Phase 2 · Visual Language

**Intent**
Build the generative core. Everything drawn in this project for the next several years descends from the decisions made here, so this phase is slow on purpose.

**Deliverables**
- Aperture construction: blade count, rotation logic, angle set, the drawing rules that follow from them
- Primary mark and monogram, developed from that construction
- Typographic system: display and text families, scale, weights, tabular numerals, italic usage
- Colour system: base, paper, ink, interface greys, and at most one accent, with application ratios
- Icon family: grid, stroke weight, terminal treatment, corner radius, and a first working set
- Editorial elements: rules, frame numbers, index marks, captions, credit lines
- Layout language: grids derived from photographic aspect ratios, margin logic, column systems
- Motion principles: the optical behaviours, their timing, their easing

**Complete when**
Every system above can be demonstrated on a real page, not a swatch board. The test is a mock spread and a mock screen that use all of it at once and look like they came from the same studio.

**Depends on**
Phase 1, and answers to the practice-focus and colour-tolerance questions.

---

## Phase 3 · Brand Guidelines

**Intent**
Turn the language into a document someone else can follow. Guidelines are not a summary of the work; they are a deliverable in their own right, and they are the first designed artifact the client receives.

**Deliverables**
- Designed guidelines document covering identity, type, colour, iconography, layout, motion, imagery, and voice
- Correct and incorrect usage, with the incorrect examples drawn honestly
- Clear space, minimum sizes, contrast requirements, accessibility floors
- Image direction: what a Sharnay photograph looks like when it is being used as a brand asset
- Voice and caption conventions

**Complete when**
A designer who has never spoken to us could apply the identity correctly to a new piece using only this document.

**Depends on**
Phase 2, resolved and signed off.

---

## Phase 4 · Website

**Intent**
Render the system in its primary public medium. The site is where most people will meet the brand, and it is the surface where restraint is hardest to hold.

**Deliverables**
- Information architecture and content model
- Layout design across breakpoints for every template
- Gallery and series behaviour, including how a body of work is paced
- Component set, inherited from the design system rather than invented for the site
- Motion implementation matching the Phase 2 principles
- Image standards: format, compression, colour profile, loading behaviour
- Accessibility and performance targets set before build, not measured after
- Build, review, and deployment

**Complete when**
The site is live on a staging URL, passes its stated performance and accessibility targets, and reads as an extension of the guidelines rather than an interpretation of them.

**Depends on**
Phase 3. Also depends on a real photography selection — the site cannot be finished against placeholder images.

---

## Phase 5 · Social System

**Intent**
Make the identity survive daily use. This is the phase where systems usually break, because the person posting is tired, on a phone, and in a hurry.

**Deliverables**
- Grid strategy: the feed composed as a contact sheet rather than a queue
- Post templates, including the frame, caption, and index treatments
- Carousel structure for series and before/after
- Story templates for behind-the-scenes, booking, and release
- Caption conventions and voice guidance
- A short working method: what to post, in what rhythm, and how to prepare a week in one sitting

**Complete when**
Sharnay can produce a week of posts in under an hour without a designer, and the result is indistinguishable in quality from something we made.

**Depends on**
Phase 3. Benefits from Phase 4 being live so that social can point somewhere finished.

---

## Phase 6 · Print System

**Intent**
Give the brand physical weight. Print is where a premium positioning is either confirmed or quietly contradicted, and paper is a more persuasive argument than any amount of copy.

**Deliverables**
- Business card
- Print sleeve or folio for delivered work
- Thank-you card and seal or sticker
- Pricing and services guide
- Packaging direction for physical delivery
- Full production specifications: stock, weight, finish, ink, foil or emboss where justified
- Press-ready artwork and a proofing checklist

**Complete when**
Physical proofs exist, have been held, and have been approved in the hand rather than on a screen.

**Depends on**
Phase 3, and a confirmed print budget.

---

## Phase 7 · Launch

**Intent**
Release the work as one coordinated moment, and leave the client able to run the system without us.

**Deliverables**
- Launch sequence across site, social, and print
- Announcement assets and copy
- Final asset export in every required format
- Handover session and a maintenance guide
- Governance: how the system is extended, who approves changes, where new work is filed
- Retrospective, written into the repository

**Complete when**
The site is live on its production domain, print is in hand, the announcement has run, and the client has been handed a system they understand.

**Depends on**
Phases 4, 5, and 6.

---

## How Phases Move

A phase closes with a review, not a deadline. Three things happen at each close: the work is presented, the decisions are written into this repository, and superseded material moves to `/archive` with a note explaining what replaced it and why.

Phases do not overlap on the critical path. Asset gathering, photography selection, and copywriting run in parallel throughout, because they are always the things that hold everything else up.

---

*Next: [`visual-language-system.md`](visual-language-system.md)*
