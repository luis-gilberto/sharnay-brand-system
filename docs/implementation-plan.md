# Implementation Plan

Sharnay Photography · Brand System
Document 06 · Revision A — July 2026

---

The roadmap describes *what* gets made and in what phase. This describes *how the making proceeds* — the creative order of operations, and the reasoning behind the sequence.

No technical planning appears here. Stacks, tooling, and build decisions belong to the website phase and are documented there, once the design they serve exists.

---

## The Governing Sequence

**Understand → Construct → Apply → Codify → Extend**

Each stage produces the raw material the next one consumes. Working out of order is possible and always more expensive: applying a language that has not been constructed means constructing it accidentally, in public, across a dozen inconsistent pieces.

---

## Stage One · Understand

*Before anything is drawn.*

**Establish the written foundation.** The six documents in `/docs` are the deliverable. They are written first because a system that cannot be described in language will not be coherent in form.

**Answer the open questions.** Practice focus, audience, name usage, voice, colour tolerance, print budget, existing equity. Each is small on its own and each quietly determines a dozen downstream decisions.

**Look at the work.** Sit with a substantial body of Sharnay's photography and take notes on what is actually there: dominant tonality, typical framing, subject distance, how much colour is in play, whether the work is warm or cool. The identity has to hold this specific work, not photography in the abstract.

**Assemble the reference set.** A small, argued collection — not a mood board. Twenty images with reasons attached are worth more than two hundred without. Include what we are avoiding and why; the negative reference is usually the more useful half.

**Agree the direction in words.** Before a single form exists, we should be able to state the identity in three sentences and have the client recognize their practice in them.

*Ends with:* a written direction the client has agreed to.

---

## Stage Two · Construct

*The generative core. The slowest and most consequential stage.*

**Build the aperture geometry.** Blade count, rotation, and the angle set that follows. This is done as construction drawing — compass and rule logic — not as sketching. What comes out of it constrains everything after it, so it is worth going slowly.

**Develop the mark from the geometry.** The mark is discovered inside the construction, not designed alongside it and reverse-justified. Explore breadth here, then reduce hard. Present few options, each fully resolved and each genuinely recommendable.

**Test the mark before falling in love with it.** At 12mm, at 512px, in one colour, reversed, embossed, on a photograph, and beside a competitor's. Most candidates die at one of these, and it is much cheaper for them to die now.

**Select typography.** Chosen against criteria, not by browsing: a display voice with a real italic, a text face with tabular numerals, both with the weight range the system needs and licensing that covers print, web, and the client's own use. Type is tested in a live specimen — a real spread with real captions — not on a specimen sheet.

**Define colour as exposure.** Paper, ink, and the mid-tones between them, plus at most one accent chosen for a reason that can be stated. Application ratios are set here, because a palette without ratios is a palette that will be misused.

**Draw the icon grid before any icon.** Keyline, live area, stroke weight, terminals, joins, radii, and the permitted angles. Then draw a small core set, all at once, in one sitting where possible. Icons drawn in a batch look related; icons drawn over months do not.

**Establish the layout language.** Grids derived from the working aspect ratios, margin logic, the three registers — full bleed, framed, contact sheet — and the rules for when each is used.

**Study motion.** The optical behaviours, defined as principles with timing and easing, prototyped only enough to prove they work. Full implementation waits for the medium.

*Ends with:* one mock spread and one mock screen that use every system at once and are unmistakably from the same studio.

---

## Stage Three · Apply

*Prove the language on real surfaces before writing rules about it.*

**Design the primary artifacts.** A card, a print sleeve, a homepage, a work page, a feed of nine. These are chosen because they are the pieces where the system is most likely to break: the smallest physical piece, the largest digital one, and the most repeated one.

**Use real content.** Real photographs, real titles, real prices, real caption lengths. Placeholder content hides every problem a system has and reveals none of them.

**Push until something fails.** Deliberately attempt the awkward cases — a vertical image in a horizontal layout, a long series title, a client name that will not fit, a photograph with no dark values for the mark to sit against. Fix the system, not the individual piece.

**Refine, then hold.** Adjustments made at this stage are cheap. Adjustments made after the guidelines are written are expensive and get skipped, which is how systems drift.

*Ends with:* a system that has survived contact with real material.

---

## Stage Four · Codify

*Write it down while the reasoning is still fresh.*

**Document decisions with their alternatives.** What we chose, what we rejected, and why. The rejected options are the part future readers actually need, because they prevent the same ground being re-covered in a year.

**Design the guidelines as a piece of work.** The guidelines are the first fully designed artifact the client holds, and they should demonstrate the system rather than describe it. A guidelines document that is not itself beautifully made undermines everything it contains.

**Draw the incorrect examples honestly.** Show the real misuses that will happen — the stretched mark, the wrong colour, the crowded margin — not straw men nobody would attempt.

**Specify for production.** Minimum sizes, clear space, contrast floors, print stocks, file formats, colour profiles. Written for the printer and the developer, in the terms they use.

*Ends with:* a document another studio could work from without us.

---

## Stage Five · Extend

*Build outward from a settled centre.*

**Website, then social, then print** — in that order, and for a reason. The website is the largest and most demanding surface, so it exposes any remaining weakness in the system. Social builds on a site that already exists and can be pointed at. Print goes last because it is irreversible: nothing should be committed to paper until the language has been proven twice.

**Nothing is invented at this stage.** Every component, every template, every printed piece is assembled from decisions already made. If something genuinely new is needed, it is designed back into the design system first and documented there, then used — never the reverse.

**Watch for drift.** New surfaces generate pressure for exceptions. Each exception should be either refused or absorbed into the system properly. Exceptions left as exceptions are how a system quietly becomes a collection again.

*Ends with:* three surfaces that are recognizably one brand.

---

## How We Work

**Depth over breadth in presentations.** Three fully resolved directions beat twelve sketches. Options should be presented as arguments, each with a reason it exists and a case for why it might be right.

**Present with reasoning attached.** Every review begins with the problem being solved and the principle being applied. Work presented without reasoning invites reaction; work presented with reasoning invites judgement.

**Decide in writing.** A decision that is not recorded in this repository will be relitigated within a month. The record includes the date, the choice, and the alternative that was set aside.

**Archive rather than overwrite.** Superseded work moves to `/archive` with a note. Direction that was rejected is frequently the best evidence for why the current direction is right.

**Show the physical early.** Proofs, prints, and samples appear at the earliest reasonable moment. Screens are persuasive; paper is decisive.

---

*Return to [`project-overview.md`](project-overview.md) · [`roadmap.md`](roadmap.md)*
