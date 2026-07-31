# Reading the Practice

A conversation before design.

LG Studio · intake prototype 01 · built for Erika, Sharnay Photography

---

## 01 · What this is

The first working prototype of LG Studio's client intake experience.

It takes the approved discovery document at `../docs/discovery.md` and turns it into a paced editorial sequence: an arrival, a letter, twenty three questions across six sections, a quiet interlude between each one, a closing chapter that asks for three things, and an acknowledgment that promises a read of the practice rather than a set of concepts.

It is deliberately not a form product. No progress bar, no completion percentage, no celebration screens. The client should feel read, not processed.

It is built on an alternation. Nine screens are a single full frame of her own work, graded down and cropped in hard, with the type sitting on the photograph. The screens where she writes are paper, quiet, with a real sheet under the type and no photograph on it. The work fills the room, then gets out of the way so she can think. Section 05 covers how the frames are made, section 07 the paper.

The whole experience runs in English and Spanish, switchable at any point without losing a word of what has been written. The letter opens with `Hola chamakis,` in both, because that is how Luis actually addresses her and translating it would be worse than leaving it. It is set in his own handwriting, and it carries a photograph of each of them as children. Section 06 covers the letter.

The engagement details sit in one object at the top of `app.js`, so a second client is a matter of new content rather than new code.

---

## 02 · How to open it

Double click `index.html`, or open it in any current browser.

No server, no build step, no dependencies, no network access required. It runs from the file system.

Everything works from `file://` with two small exceptions noted in section 07.

**Moving through it**

| Input | Behaviour |
| --- | --- |
| Continue and Back | Bottom of every screen after the opening |
| Enter | Advances from single line fields and from any non field context |
| Command or Control with Enter | Advances from a long answer field |
| Shift with Enter | New line inside an answer, as expected |
| Left and right arrows | Move between screens when focus is not in a field |
| Escape | Closes an expanded "Why I am asking" note |
| EN / ES | Bottom left. Switches language in place, keeping the screen and every answer |
| Return to the beginning | Bottom left. Goes back to the opening from anywhere, keeping everything written |

The language defaults to Spanish if the browser is set to Spanish, and to English otherwise. Once she chooses, the choice is remembered.

**Returning to the beginning.** Twenty three questions is a long way in, and Back only moves one screen at a time. "Volver al principio" carries her to the opening from wherever she is. It is a reading move, not a reset: nothing she wrote is touched, and she is told so on arrival.

Because a way back is useless if it strands her, the piece remembers where she was standing. The opening then offers "Seguir donde te quedaste" beside Begin, and one press returns her to the exact screen. The offer only appears when it is worth making, so a first visit never sees it, and neither does someone who was only as far as the letter. Once taken, the offer is spent and the opening goes quiet again.

---

## 03 · File structure

```
reading-the-practice/
├── index.html      Document shell, chrome, film backdrop, print container
├── styles.css      Tokens, panels, type, backdrop and scrim, print stylesheet
├── app.js          Content, sequence, state, backdrop, review, export, print
├── README.md
├── type-specimen.html   The record of how the handwriting was chosen
└── assets/
    ├── images/     The nine graded frames, plus the two childhood photographs
    ├── fonts/      Playwrite US Trad, plus the eight faces it was chosen against
    ├── specimens/  Screenshots of the handwriting comparison
    └── icons/      Reserved for Phase 2
```

Three files carry the experience. Nothing generated, nothing bundled, nothing minified. All of it is readable and editable by hand.

`type-specimen.html` and the eight rejected faces are not loaded by the piece. They are kept because the choice of handwriting was a real decision with real alternatives, and a brand system should be able to show its work. Deleting them costs the record and saves nothing at runtime.

---

## 04 · How answers are stored

Answers are held in `localStorage` under the key `lgs.reading-the-practice.sharnay.v1`.

Saving happens automatically as she types, debounced to roughly a quarter second, and again on every screen change and before the page unloads. Refreshing the browser returns her to the screen she was on with everything intact. The discreet "Save and continue later" action forces an immediate write and confirms it quietly.

Stored: the current screen index, the screen she left when she last returned to the beginning, the chosen language, every answer, the names of any files selected, completion state, and timestamps for when she started and last touched it.

Answers to the structured questions are stored as option indices rather than as the words on screen, so a selection made in Spanish still reads as selected in English. Values saved in an earlier build under their label are migrated on read, in either language.

Not stored: file contents. The prototype never reads, transmits, or retains a file. It records the name so the review and the export can show what she intends to send.

If a browser blocks local storage, the experience degrades to in memory state for the session rather than breaking. She is told plainly when that happens.

To clear a test run, open the browser console and enter:

```js
localStorage.removeItem('lgs.reading-the-practice.sharnay.v1');
```

---

## 05 · Photography

The photography is not placed inside these screens. It carries them. Nine screens are a single full frame with the type sitting on it, and the screens where she actually writes are paper, with no photograph on them at all. That alternation is the structure of the piece: the work fills the room, then it gets out of the way so she can think.

The one exception is the letter, which holds two small photographs of Luis and Erika as children. They are not Sharnay's work and they are not there as photography, which is why they are the only images in the piece that sit inside a page rather than behind one. Section 06 covers them.

**Where the frames fall.**

| Screen | File | Grade | Crop | Type | Caption |
| --- | --- | --- | --- | --- | --- |
| Opening | `film-opening` | colour | full frame | left | On location, late desert light |
| I · The Work | `film-work` | monochrome | zoom 1.4 | left | Studio, denim, cropped close |
| II · The People | `film-people` | monochrome | full frame | left | Studio, cream seamless |
| III · The Voice | `film-voice` | monochrome | zoom 1.7, on the face | left | Beauty portrait, hard light |
| IV · Colour and Feel | `film-feel` | colour | full frame | **right** | Red on red, the whole frame |
| V · The Physical | `film-physical` | monochrome | zoom 1.35 | left | On set, between frames |
| VI · What Already Exists | `film-exists` | monochrome | zoom 1.6, on the face | left | Studio, held close |
| A Few Things To Send | `film-send` | monochrome | zoom 1.7 | left | Feathers, mid air |
| Closing | `film-closing` | desaturated | full frame | left | Beauty portrait, the last frame |

**Colour is used only where it means something.** Six of the nine frames are monochrome. Colour appears three times and each time it is an argument: warm and wide at the arrival, saturated red at the chapter that asks her about colour, and pulled part way down at the close. Seven photographs cover nine screens. The two that appear twice are graded and cropped so differently that they do not read as repeats, since the studio frame that is a soft grey field in chapter II returns as a tight monochrome crop in chapter VI, and the portrait that fills the frame in chapter III returns muted and wide at the end.

**The red frame is deliberately placed.** Chapter IV is where Luis recommends a near monochrome direction and asks her to disagree with it. The photograph behind that invitation is the most saturated image in the sequence. The screen argues with itself, which is more honest than illustrating the recommendation and quietly stacking the question.

**Chapter V is the only frame of the practice at work.** Every other frame is finished work. This one is a light, an umbrella, a comb, a camera, and four pairs of hands, mid shoot. The chapter asks what is physical about the business, and this is what that looks like before anything reaches a print or a box. It is also the only frame sourced from a full camera file, at 5460 by 3640, so it is the one image here carrying detail that was actually captured rather than reconstructed.

**Which side the type sits on.** Every frame but one puts its type on the left. The red frame puts her in the left of the composition with a large empty field on the right, so that screen moves the type right instead of cropping the photograph to suit a fixed layout. It is one argument to `film()`, and it moves three things together: the block of type, the strong side of the scrim, and the photo credit, which always takes the corner the type is not using. On screens narrower than 900px the distinction drops away, because the type stacks down the whole frame there regardless.

**The grade is baked at the source, not applied in the browser.** Three of the six originals are high key studio frames on near white backgrounds, and pale white type cannot sit on those. Darkening them with an overlay would have flattened them into grey veils. Instead each frame is graded on Cloudinary before it is downloaded: desaturated or stripped to monochrome, pulled down between 10 and 34 points of brightness, and given back between 10 and 28 points of contrast. The frames arrive moody rather than veiled, which is what lets the scrim stay light enough to keep the photograph present.

**On resolution.** Six of the seven originals are small, between 507 and 1135 pixels wide, which is Instagram export size. A full screen frame wants roughly 2560. Those frames are therefore run through Cloudinary's `e_upscale` first, which returns them at four times linear size, with the crop and grade chained after. This is what makes a 1.7x zoom hold a desktop screen. It works well, but it is reconstruction, not detail that was ever captured. **The original camera files should replace them before anything is designed against them at print size.**

The seventh source, the on set frame in chapter V, arrived as a full 5460 by 3640 camera file. It is downscaled rather than upscaled, and no `e_upscale` appears in its chain. Comparing it against its neighbours is the clearest argument for sending the rest of the originals: it is visibly the sharpest frame in the sequence.

**The scrim.** Legibility is handled by `.backdrop__scrim`, three gradient passes over the frame: one from the side the type sits on, one up from the foot for the caption, one down across the head so the running metadata stays readable. Weight is set per screen through `data-scrim` on `#backdrop`, because the opening carries a title and the closing carries six paragraphs. It runs `light` for the opening and for chapter V, `medium` for the other six interludes, and `heavy` for the closing. On screens narrower than 900px the gradient runs vertically instead of across, since the type stacks down the frame there.

**Scrim weight is measured, not guessed.** For any candidate frame, the honest question is what the luminance actually is in the rectangles the type occupies, not how the photograph looks overall. Sampling the 90th percentile luminance of the two type zones and solving for the alpha that clears 4.5:1 against paper white gives a number per crop. That is how chapter V was chosen from four candidates: the wide version of the same photograph put a white durag directly under the reflection and needed 0.48 to be readable, while the crop in use needs none there, because the type falls on the black of the softbox and the sleeve. Choosing the crop is almost always better than raising the scrim, since scrim is paid for by the whole photograph and crop is paid for only at the edges.

**Motion.** The live frame drifts from `scale(1)` to `scale(1.055)` across 30 seconds, once, and stops. It is slow enough to be felt rather than watched. Moving between two photographic screens dissolves rather than cuts: two stacked layers alternate, the incoming one fades up over 1100ms as the outgoing one fades away. Under `prefers-reduced-motion` the drift is removed outright and the frame holds still.

**How loading works.** Each frame looks for a local file in `assets/images/` first, trying `.jpg`, `.jpeg`, `.png`, then `.webp`, and falls back to the Cloudinary chain. If neither answers, the near black behind the layers is what shows and the screen still reads. Resolved sources are cached, and the next photographic frame is fetched quietly while she is reading or writing, so the dissolve has something to work with. Files run 55KB to 220KB.

**To change a photograph**, either drop a replacement into `assets/images/` under the same file name, or edit the `film()` call in `app.js`. It takes the file name, the bilingual caption, the Cloudinary identifier and version, the full transformation chain, the focus point, the scrim weight, and the side the type sits on. The transformation chain is stored beside each frame as the record of how the file was made, so any frame can be regenerated exactly.

**Three things worth knowing if you edit a chain.** Cloudinary honours only one `e_` effect per transformation component, so effects have to be chained with `/` rather than joined with commas, or all but one is silently dropped. `e_upscale` has to come first, before the crop, or the crop happens at the original small size and the upscale has less to work with. And `focus` is a `background-position`, which matters once `cover` starts cropping the sides on tall or narrow screens: it is what keeps her in frame on a phone.

**A note on adding a frame.** The composition decides the layout, not the reverse. Look at where the subject sits and where the empty space falls, then set `side` to the empty side. If a frame has no empty side, it wants a tighter crop rather than a heavier scrim. Generate two or three candidate crops before committing to one, and measure the type zones rather than judging the picture as a whole. A frame can be beautiful and still be the wrong plate.

**Also worth knowing:** `e_vignette` in Cloudinary lightens the edges toward white rather than darkening them, so it is useless for this. Darkening is done with `e_brightness` and `e_contrast` on the whole frame, and shaped with the crop.

---

## 06 · The letter

The letter is the one screen that is not about Sharnay Photography. It is the reason the engagement exists, and it is written accordingly.

**The handwriting is his.** The greeting and the signature are set in Playwrite US Trad. Playwrite is a family built specifically from national school handwriting models, and the United States traditional model is the Palmer Method, which is the hand taught in Venezuelan schools and the hand Luis actually writes in. There is no Playwrite Venezuela. US Trad is not a substitute for it, it is the source both traditions come from: monoline, evenly slanted, plain in the capitals. That plainness is what separates a school hand from wedding calligraphy, and it is why the more decorative candidates were rejected even where they were prettier.

Nine faces were compared against the real letter text, in both languages, with the diacritics Spanish needs. The comparison is kept in `type-specimen.html` and as screenshots in `assets/specimens/`. All nine are OFL licensed and were verified for full Spanish coverage by reading their character tables rather than by looking at them.

**The hand is rationed to two places**, the greeting and the signature, which is where handwriting falls in a real letter. The body stays in the serif. Seven paragraphs of a single script stop reading as handwriting and start reading as a font, and they are markedly harder to read on a phone. If you want to test the other treatment, `--hand` and `--hand-weight` are single tokens and `.prose` is one selector.

`--hand-weight` is 320 on a 100 to 400 variable axis. Palmer was written with a pen rather than a hairline nib, and below roughly 260 the hand thins into something ornamental.

**The two photographs.** Luis and Erika as small children, from two different family albums. They are the argument the letter is making, which is that this is not a vendor relationship, so they sit in the letter rather than anywhere else in the piece.

They arrived as photographs of prints, with the problems that implies. Luis had a reflection band across the lower third from shooting a glossy print, so his crop sits high in the frame to clear it. Erika was washed out and off centre with a birthday cake intruding at the right. Both were shot on phones and are small, 728 and 687 pixels wide, but they display at roughly 210 pixels, so no upscaling was needed.

**They are graded to read as a pair, and the order of operations is the whole trick.** Two prints from two albums have nothing in common tonally. Exposure is corrected first, then both are mapped onto one warm two colour ramp, `e_tint:100:3d3327:f5f1e8`, dark warm brown to near paper. Correcting exposure *after* the tint shifts the tint itself, and Erika came back yellow while Luis stayed neutral brown. Sepia was tried and is unusable: Cloudinary's `e_sepia` returns a saturated yellow, not an aged print. Keeping them in their original colour was also tried and rejected, because the two casts clash badly enough that the pair reads as accidental.

**The composition changes with the screen, and the order changes with it.** On a wide screen the letter holds its measure on the left and the two prints sit in the margin, in view for the whole read, the second one set lower and shifted so they read as two photographs put down next to each other rather than as a filed pair. Both stay the same size, since unequal sizes read as an accident. Their width is capped against the viewport height as well as the column, so the pair and the line beneath it still land inside a short laptop screen.

On one column they fall between the letter and the signature. This is not only a layout decision: the signature and the action are a separate block in the markup precisely so the photographs can come before the button. In the first version they came after it, which meant she would press Continue and never scroll down to them.

**To replace them**, drop a file into `assets/images/` under the same name, or edit `KIDS` in `app.js`, which holds the file name, the caption, the bilingual alt text, and the full Cloudinary chain that produced it. If a local file is missing, the chain stands in, the same arrangement the film frames use.

---

## 07 · The paper

The twenty five screens where she writes are a sheet, not a flat field of colour. Without this they read as a well set page with nothing underneath it.

Two scales of fibre, in one tile: a fine tooth at high frequency, and a broad cloudiness at low frequency and reduced amplitude that you only notice across a whole page. Both are `feTurbulence`, generated in CSS, so nothing is downloaded and it works from `file://`. It is fixed behind the type at `z-index: 0`, so it is paper under ink rather than a film over the writing.

**It is blended with `soft-light`, and the reason matters more than the value.** A multiply grain is the obvious way to do this and it looks correct in isolation. Measured, it pulled the whole background from `#F2EFE8` to roughly `#E0DCD2`, eight points darker and slightly cooler, because a neutral grey multiplied into cream desaturates it. That is a change of colour, not a texture. Under `soft-light` the noise has to be centred on mid grey with its alpha forced to 1, which is what the colour matrix in `--paper-grain` does. It then darkens and lightens the sheet in equal measure, and the cream measures unchanged.

**The sheet also catches light.** Two very faint radial gradients on `body`, warm toward the top and losing light at the far edges, fixed so they do not scroll with the type. This is the part that stops the page reading as a rectangle, and on its own it is invisible.

**To tune it**, `#paper` has one opacity. Below roughly 0.2 the sheet goes flat again; above roughly 0.38 it announces itself as a texture rather than as stock. It is set at 0.7 under `soft-light`, which is a gentle blend and needs most of its range to be felt at all. Judge it at native resolution on a real screen, never on a scaled screenshot, which hides the tooth entirely.

**Where the paper is not.** It lifts on the photographic screens, because there the photograph is the surface, and it never prints. Print is ink on real paper and does not need a picture of paper.

---

## 08 · Her mark

Sharnay Photography's existing horizontal lockup appears in exactly two places: the masthead of the review and the masthead of the print document. Both of those are documents, and a document prepared for a client carries the client's mark.

**It is deliberately not in the running head.** The metadata across the top of every screen stays typeset, at 10px in letterspaced caps. A running head is type, not a logo. At that size the aperture mark turns to mud, and repeating a lockup across thirty four screens is how a mark stops being noticed. The client's name reads perfectly well as words there.

It is also not on the opening screen, where the mark slot says `LG Studio`, because the opening is LG Studio arriving. Putting Sharnay's logo there would misattribute the piece.

**The file is trimmed to the ink.** As supplied it is 380 by 181 with 83% of the canvas transparent, carrying 42px of padding above the mark and 37px below. That padding fights any attempt to set it against type, so the version in use is cropped to its 351 by 102 of actual ink and the spacing is set in CSS. The full chain is recorded in `ENGAGEMENT.clientMarkRemote` and the untrimmed original is kept in the brand system.

**Two honest limits.**

351px of ink is enough for about 168px on a 2x screen, which is what it is set to, and nothing more. In print at 34mm it is visibly soft. A vector would remove that ceiling and is worth asking for.

The file is black, so it works on paper and disappears on anything dark. That is the real reason the mark is absent from the nine photographic screens rather than a purely editorial one. A reversed version would open that option, and it should come from Erika rather than be manufactured here by inverting a file, which would turn the gold aperture a different colour.

**Where it lives.** The working copy is `assets/images/sharnay-logo.png`, kept inside the prototype so nothing reaches across folders. The master sits in [`../assets/logos/incumbent/`](../assets/logos/incumbent/README.md), filed as the mark the engagement is replacing rather than as approved output, because it is not ours.

The mark's alt text is her name, which is also what appears if the file never loads, so the document is never left unattributed.

---

## 09 · Editing the questions

All content sits in plain arrays at the top of `app.js`, in this order: `ENGAGEMENT`, `UI`, `SECTIONS`, `QUESTIONS`, `REQUESTS`, `COPY`. The screen sequence assembles itself from them, so adding a question is a matter of adding an object.

**Every visible string is a pair.** `{ en: '...', es: '...' }`. The `t()` helper resolves a pair against the current language and falls back to English if a translation is missing, so an untranslated addition degrades to English rather than to a blank space. Interface labels live in `UI`, long form passages in `COPY`.

A question object:

```js
{
  n: 7,                       // number, also the storage key
  section: 'people',          // must match a section id
  type: 'multi',
  heavy: true,                // more space, larger type, longer field
  prompt: { en: 'Where do people find you now?',
            es: '¿Dónde te encuentra la gente ahora?' },
  sub:    { en: 'Secondary line.', es: 'Línea secundaria.' },
  body:   { en: 'Longer setup, at reading size. Optional.', es: '...' },
  why:    { en: 'Behind the "Why I am asking" toggle. Optional.', es: '...' },
  micro:  { en: 'Supportive line under the field. Use sparingly.', es: '...' },
  options: { en: ['Instagram', 'Referral'], es: ['Instagram', 'Recomendación'] },
  noteLabel: { en: 'Label for the free text', es: 'Etiqueta del texto libre' }
}
```

Option lists must stay in the same order in both languages, because a selection is stored as an index.

Field types available:

| Type | Use |
| --- | --- |
| `textarea` | The default. Auto growing editorial writing surface |
| `text` | A single line answer, still styled as writing rather than as a form |
| `list3` | Three short entries, as in question twelve |
| `pairs3` | Three entries with a reason each, as in question sixteen |
| `choice` | One selection plus a free text note |
| `multi` | Several selections plus a free text note |

Structured controls are used in five places only, and each one keeps a free text field beside it. Turning a nuanced question into a set of radio buttons is the fastest way to make this feel like software, so the default is prose.

Three questions carry `heavy: true`, matching the strategically important questions identified in the discovery document: question three on what she does differently, question fourteen on the near monochrome recommendation, and question seventeen on what she is tired of seeing. They get more space and a longer field, and nothing else. No theatrics.

Interlude copy lives on each section as `reflection` and `line`, and the photograph that carries the interlude lives on it as `film`.

---

## 10 · What is intentionally unbuilt

**No submission.** Nothing leaves the browser. The closing screen offers a JSON export and a print output, and those are the delivery mechanisms tonight.

**No file upload.** File pickers record names for the review and the export. A real uploader needs a backend and a signed storage bucket, and a broken half version would be worse than an honest placeholder. The screen says so plainly.

**No accounts, no resume link.** State is tied to one browser on one machine. Opening the file on a different computer starts fresh.

**No analytics.** Nothing is measured and nothing is sent anywhere.

**Reconstructed photography.** The nine frames are machine upscaled four times from small originals, because the sources available are Instagram export size and a full screen frame needs roughly four times that. They hold up well at the sizes used here, and the grade and the grain are doing real work in hiding it. They are not a substitute for the camera files, and anything designed at print size needs those.

**Two languages only.** English and Spanish. The structure would carry a third, but nothing is abstracted into locale files yet, so a third language means editing the same arrays.

**Two file system caveats.** JSON export uses a blob download, which works in Chrome, Edge, and Firefox from `file://`; Safari may open it in a tab to be saved manually, and the prototype falls back to that automatically. Printed page numbers are left to the browser's own print dialog, because CSS page margin boxes are still unreliable across engines. Everything else, including local storage and image swapping, works from the file system without a server.

---

## 11 · Recommended next phase

**A real submission path.** A small endpoint that receives the intake, stores it against the client, and notifies LG Studio. Everything needed is already in `buildExport()`.

**Secure file uploads.** Direct to storage with signed URLs, resumable for the thirty to fifty image selection, with a delivery receipt she can see.

**Client configuration.** Lift `ENGAGEMENT`, `SECTIONS`, and `QUESTIONS` into a per client file so a new engagement is a content change. The rendering layer already assumes nothing about Sharnay.

**Reusable LG Studio project templates.** Reading the Practice becomes the first of a small family: intake, the read, presentation, handover. One language across all four.

**A synthesis workflow for The Read.** The genuinely valuable next build. Answers on one side, a working surface on the other, and the three sentences drafted in the same place they are evidenced. That is the point the intake is serving, and it should not stay a separate document for long.

---

*Prototype 01 · built to be reviewed, argued with, and revised.*
