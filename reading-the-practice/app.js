/* ==========================================================================
   Reading the Practice · Leer la Práctica
   LG Studio · intake experience · prototype 01

   Content source of truth: ../docs/discovery.md
   Twenty three questions, six sections, in English and Spanish.

   Every piece of visible copy is a pair: { en: '...', es: '...' }.
   t() resolves the pair against the current language and falls back to
   English if a translation is ever missing.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     01 · Engagement
     ---------------------------------------------------------------------- */

  var ENGAGEMENT = {
    client: 'Sharnay Photography',
    /* Her mark, trimmed to the ink so the spacing around it is set here rather
       than baked into the file. It appears on the two screens that are
       documents, the review and the print, and nowhere else: a running head is
       type, not a logo. */
    clientMark: 'assets/images/sharnay-logo.png',
    clientMarkRemote: 'https://res.cloudinary.com/dogtoagya/image/upload/e_trim/f_png' +
      '/v1785225170/copy_of_sharnay_logo_horizontal_black_footer_2x_giqnao.png',
    studio: 'LG Studio',
    author: 'Luis Gilberto',
    salutation: 'Hola chamakis,',
    storageKey: 'lgs.reading-the-practice.sharnay.v1',
    experienceVersion: 'sharnay-1',
    submitUrl: '/api/intake',
    title: { en: 'Reading the Practice', es: 'Leer la Práctica' },
    subtitle: { en: 'A conversation before design.', es: 'Una conversación antes del diseño.' }
  };

  var lang = 'en';

  function t(value) {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value;
    return value[lang] != null ? value[lang] : value.en;
  }

  /* ------------------------------------------------------------------------
     02 · Interface strings
     ---------------------------------------------------------------------- */

  var UI = {
    skip:        { en: 'Skip to the current screen', es: 'Ir a la pantalla actual' },
    language:    { en: 'Language', es: 'Idioma' },
    begin:       { en: 'Begin', es: 'Comenzar' },
    beginTalk:   { en: 'Begin the conversation', es: 'Comenzar la conversación' },
    continue:    { en: 'Continue', es: 'Continuar' },
    back:        { en: 'Back', es: 'Atrás' },
    finish:      { en: 'Finish', es: 'Terminar' },
    saveLater:   { en: 'Save and continue later', es: 'Guardar y seguir después' },
    toBeginning: { en: 'Return to the beginning', es: 'Volver al principio' },
    resume:      { en: 'Pick up where you left off', es: 'Seguir donde te quedaste' },
    kept:        { en: 'Nothing you wrote was lost.', es: 'No se perdió nada de lo que escribiste.' },
    letter:      { en: 'A letter', es: 'Una carta' },
    section:     { en: 'Section', es: 'Sección' },
    of:          { en: 'of', es: 'de' },
    question:    { en: 'Question', es: 'Pregunta' },
    lastChapter: { en: 'Last chapter', es: 'Último capítulo' },
    complete:    { en: 'Complete', es: 'Completo' },
    review:      { en: 'Review', es: 'Revisión' },
    answered:    { en: 'answered', es: 'contestadas' },
    yourAnswer:  { en: 'Your answer', es: 'Tu respuesta' },
    writeHere:   { en: 'Write here', es: 'Escribe aquí' },
    optional:    { en: 'Optional', es: 'Opcional' },
    chooseOne:   { en: 'Choose one', es: 'Elige una' },
    chooseAny:   { en: 'Choose any that apply', es: 'Elige las que apliquen' },
    whyAsking:   { en: 'Why I am asking', es: 'Por qué lo pregunto' },
    aWord:       { en: 'A word', es: 'Una palabra' },
    theBrand:    { en: 'The brand', es: 'La marca' },
    whyRight:    { en: 'Why it feels right', es: 'Por qué se siente bien' },
    addAnything: { en: 'Anything you want to add', es: 'Lo que quieras agregar' },
    photograph:  { en: 'Photograph.', es: 'Fotografía.' },
    ordinalsF:   { en: ['One', 'Two', 'Three'], es: ['Una', 'Dos', 'Tres'] },
    ordinalsM:   { en: ['One', 'Two', 'Three'], es: ['Uno', 'Dos', 'Tres'] },

    reviewMine:  { en: 'Review my answers', es: 'Revisar mis respuestas' },
    exportCopy:  { en: 'Export a copy', es: 'Exportar una copia' },
    printSave:   { en: 'Print or save as PDF', es: 'Imprimir o guardar como PDF' },
    exportJSON:  { en: 'Export JSON', es: 'Exportar JSON' },
    print:       { en: 'Print', es: 'Imprimir' },
    returnClose: { en: 'Return to closing', es: 'Volver al cierre' },
    editResp:    { en: 'Edit response', es: 'Editar respuesta' },
    notAnswered: { en: 'Not answered', es: 'Sin contestar' },
    preparedFor: { en: 'Prepared for', es: 'Preparado para' },
    prepared:    { en: 'Prepared', es: 'Preparado' },
    enclosures:  { en: 'Enclosures', es: 'Anexos' },
    nothingSel:  { en: 'Nothing selected', es: 'Nada seleccionado' },

    savedYes: {
      en: 'Saved. Close this page whenever you like and return to it on this computer.',
      es: 'Guardado. Cierra esta página cuando quieras y regresa a ella en esta computadora.'
    },
    savedNo: {
      en: 'This browser is blocking local storage, so answers last only while the page is open.',
      es: 'Este navegador está bloqueando el almacenamiento local, así que las respuestas duran solo mientras la página esté abierta.'
    },
    exported:    { en: 'Exported', es: 'Exportado' },
    exportTab:   { en: 'Export opened in a new tab. Save it as', es: 'La exportación se abrió en otra pestaña. Guárdala como' },
    exportBlock: { en: 'Export was blocked by the browser.', es: 'El navegador bloqueó la exportación.' },
    filesPicked: { en: 'file selected.', es: 'archivo seleccionado.' },
    filesPickedPlural: { en: 'files selected.', es: 'archivos seleccionados.' },
    noFiles:     { en: 'No files selected.', es: 'Ningún archivo seleccionado.' },
    returning:   { en: 'Your earlier answers are still here.', es: 'Tus respuestas anteriores siguen aquí.' },
    anHour:      { en: 'About an hour, and you can stop at any point.', es: 'Como una hora, y puedes parar en cualquier momento.' },

    /* Production submission. Local answers are never discarded on failure. */
    submitFailed: {
      en: 'Could not send to the studio. Nothing you wrote was lost. You can retry, or export a copy.',
      es: 'No se pudo enviar al estudio. No se perdió nada de lo que escribiste. Puedes reintentar, o exportar una copia.'
    },
    retrySubmit: { en: 'Retry sending to the studio', es: 'Reintentar el envío al estudio' }
  };

  /* ------------------------------------------------------------------------
     03 · Photography
     Every photographic screen is carried by one full frame rather than an
     inset picture. The grade is baked at the source instead of being veiled
     in the browser: the originals are small, so the upscaler is what lets a
     hard crop hold a full screen, and the two bookends stay in colour while
     the six chapters run in monochrome.

     Local files in assets/images are used first, so the prototype runs with
     no network at all. The Cloudinary chain is kept beside each frame as a
     fallback and as the record of how the file was made.

     focus  keeps the subject in frame once cover crops the sides on tall
            and narrow screens.
     scrim  light, medium or heavy, set by how much type the screen carries
            and how pale the frame is.
     side   which side of the frame the type sits on. A frame whose subject
            occupies the left is answered by moving the type right, rather
            than by cropping the photograph to suit a fixed layout.
     ---------------------------------------------------------------------- */

  var CDN = 'https://res.cloudinary.com/dogtoagya/image/upload';

  function film(file, caption, id, version, grade, focus, scrim, side) {
    return {
      file: file,
      caption: caption,
      remote: CDN + '/' + grade + '/' + version + '/' + id + '.jpg',
      focus: focus || '50% 50%',
      scrim: scrim || 'medium',
      side: side || 'left'
    };
  }

  /* Two photographs of prints, from two family albums, so their casts had
     nothing in common. Exposure is corrected first and only then are both
     mapped onto one warm two colour ramp, which is what makes them read as a
     pair instead of as two snapshots that happen to be adjacent. */
  var KIDS = {
    luis: {
      file: 'letter-luis',
      name: 'Luis',
      alt: {
        en: 'Luis as a small boy, smiling, from a family photograph',
        es: 'Luis de niño, sonriendo, de una foto familiar'
      },
      remote: CDN + '/c_thumb,g_face,z_0.72,ar_4:5,w_760/e_contrast:14' +
        '/e_grayscale/e_tint:100:3d3327:f5f1e8/q_auto:good' +
        '/v1785229771/photo_2026-07-28_02-06-47_o0guyw.jpg'
    },
    erika: {
      file: 'letter-erika',
      name: 'Erika',
      alt: {
        en: 'Erika as a toddler in a pale dress, from a family photograph',
        es: 'Erika de bebé con un vestido claro, de una foto familiar'
      },
      remote: CDN + '/c_thumb,g_face,z_0.62,ar_4:5,w_760' +
        '/e_brightness:-13/e_contrast:28' +
        '/e_grayscale/e_tint:100:3d3327:f5f1e8/q_auto:good' +
        '/v1785229771/photo_2026-07-28_02-06-54_ca2aaq.jpg'
    }
  };

  /* ------------------------------------------------------------------------
     04 · Sections
     ---------------------------------------------------------------------- */

  var SECTIONS = [
    {
      id: 'work',
      numeral: 'I',
      title: { en: 'The Work', es: 'El Trabajo' },
      line: {
        en: 'I want to start with the work itself, before anything else.',
        es: 'Quiero empezar por el trabajo mismo, antes de cualquier otra cosa.'
      },
      reflection: {
        en: 'Thank you. I think I am beginning to understand how you work.',
        es: 'Gracias. Creo que empiezo a entender cómo trabajas.'
      },
      film: film('film-work',
        { en: 'Studio, denim, cropped close', es: 'Estudio, denim, encuadre cerrado' },
        'Sharnay_002_gdga5n', 'v1785216801',
        'e_upscale/c_thumb,g_auto,z_1.4,ar_16:9,w_2000/e_grayscale/e_brightness:-18/e_contrast:22/q_auto:good',
        '50% 50%')
    },
    {
      id: 'people',
      numeral: 'II',
      title: { en: 'The People You Work For', es: 'Las Personas Para Quienes Trabajas' },
      line: {
        en: 'Now I want to understand the people who experience the work.',
        es: 'Ahora quiero entender a las personas que viven el trabajo.'
      },
      reflection: {
        en: 'Every answer adds context. The picture is becoming clearer.',
        es: 'Cada respuesta agrega contexto. La imagen se está aclarando.'
      },
      film: film('film-people',
        { en: 'Studio, cream seamless', es: 'Estudio, fondo crema' },
        'Sharnay_006_ulr1ul', 'v1785217062',
        'e_upscale/c_fill,g_auto,ar_16:9,w_2400/e_grayscale/e_brightness:-34/e_contrast:26/q_auto:good',
        '70% 45%')
    },
    {
      id: 'voice',
      numeral: 'III',
      title: { en: 'The Name and the Voice', es: 'El Nombre y la Voz' },
      line: {
        en: 'How the practice sounds matters as much as how it looks.',
        es: 'Cómo suena la práctica importa tanto como cómo se ve.'
      },
      reflection: {
        en: 'I can hear the practice now, not only see it.',
        es: 'Ahora puedo escuchar la práctica, no solo verla.'
      },
      film: film('film-voice',
        { en: 'Beauty portrait, hard light', es: 'Retrato de belleza, luz dura' },
        'Sharnay_001_vtln8k', 'v1785216801',
        'e_upscale/c_thumb,g_face,z_1.7,ar_16:9,w_2000/e_grayscale/e_brightness:-20/e_contrast:24/q_auto:good',
        '62% 50%')
    },
    {
      id: 'feel',
      numeral: 'IV',
      title: { en: 'Colour and Feel', es: 'Color y Sensación' },
      line: {
        en: 'This is where I make a recommendation, and where I would like you to push back.',
        es: 'Aquí es donde hago una recomendación, y donde quiero que me discutas.'
      },
      reflection: {
        en: 'That is the part I needed most.',
        es: 'Esa es la parte que más necesitaba.'
      },
      /* The one screen that argues with itself. The recommendation on it is
         near monochrome, and the frame behind it is the most saturated in
         the sequence. She is asked to disagree, so the photograph does too.
         She holds the left of the frame, so the type takes the right. */
      film: film('film-feel',
        { en: 'Red on red, the whole frame', es: 'Rojo sobre rojo, todo el cuadro' },
        'Sharnay_007_z26fs4', 'v1785217785',
        'e_upscale/c_fill,g_auto,ar_16:9,w_2400/e_brightness:-14/e_contrast:14/q_auto:good',
        '40% 40%', 'medium', 'right')
    },
    {
      id: 'physical',
      numeral: 'V',
      title: { en: 'The Physical', es: 'Lo Físico' },
      line: {
        en: 'What a client holds at the end is part of the work.',
        es: 'Lo que una clienta tiene en las manos al final es parte del trabajo.'
      },
      reflection: {
        en: 'Good. The physical side is usually where the work is decided.',
        es: 'Bien. El lado físico es donde normalmente se decide el trabajo.'
      },
      /* The one frame from a full camera file rather than a small export, so
         it carries real detail and needs no upscaling. It is also the only
         frame of the practice at work: a light, a comb, a camera, hands. The
         chapter asks about what is physical, and this is what that looks
         like before anything gets printed. Measured rather than guessed, the
         type falls on the black of the softbox and the sleeve, so it takes
         the light scrim and the room stays visible. */
      film: film('film-physical',
        { en: 'On set, between frames', es: 'En set, entre cuadros' },
        'jadena2ndlook-2_ivdynl', 'v1785223255',
        'c_thumb,g_west,z_1.35,ar_16:9,w_2400/e_grayscale/e_brightness:-16/e_contrast:24/q_auto:good',
        '52% 45%', 'light')
    },
    {
      id: 'exists',
      numeral: 'VI',
      title: { en: 'What Already Exists', es: 'Lo Que Ya Existe' },
      line: {
        en: 'Last, the practical ground. What is here already, and what cannot move.',
        es: 'Por último, lo práctico. Qué ya está aquí, y qué no se puede mover.'
      },
      reflection: {
        en: 'That is everything I wanted to ask.',
        es: 'Eso es todo lo que quería preguntar.'
      },
      film: film('film-exists',
        { en: 'Studio, held close', es: 'Estudio, muy de cerca' },
        'Sharnay_006_ulr1ul', 'v1785217062',
        'e_upscale/c_thumb,g_face,z_1.6,ar_16:9,w_2000/e_grayscale/e_brightness:-30/e_contrast:18/q_auto:good',
        '68% 45%')
    }
  ];

  /* ------------------------------------------------------------------------
     05 · Questions
     ---------------------------------------------------------------------- */

  var QUESTIONS = [
    {
      n: 1, section: 'work', type: 'textarea',
      prompt: {
        en: 'What kind of photography leads?',
        es: '¿Qué tipo de fotografía va al frente?'
      },
      sub: {
        en: 'If someone found your work through one image, which kind of image would you want it to be. Portrait, editorial, wedding, commercial, documentary, something else.',
        es: 'Si alguien encontrara tu trabajo por una sola imagen, ¿qué tipo de imagen querrías que fuera? Retrato, editorial, boda, comercial, documental, algo más.'
      },
      why: {
        en: 'This shapes tone more than any other single answer. A documentary practice and a wedding practice want different levels of formality from everything, down to the weight of a line.',
        es: 'Esto define el tono más que cualquier otra respuesta. Una práctica documental y una práctica de bodas piden niveles de formalidad distintos en todo, hasta en el grosor de una línea.'
      },
      micro: { en: 'A sentence is enough.', es: 'Una frase basta.' }
    },
    {
      n: 2, section: 'work', type: 'textarea',
      prompt: {
        en: 'What kind of work do you want more of?',
        es: '¿De qué tipo de trabajo quieres más?'
      },
      sub: {
        en: 'Not what pays now. What you would take if the calendar were yours to fill.',
        es: 'No lo que paga ahora. Lo que tomarías si el calendario fuera tuyo.'
      },
      why: {
        en: 'I design for where the practice is going, not for where it has been.',
        es: 'Diseño para donde va la práctica, no para donde ha estado.'
      }
    },
    {
      n: 3, section: 'work', type: 'textarea', heavy: true,
      prompt: {
        en: 'What do you do that another good photographer in your city does not?',
        es: '¿Qué haces tú que no hace otra buena fotógrafa de tu ciudad?'
      },
      sub: {
        en: 'Take a paragraph on this one if you have it in you.',
        es: 'Escribe un párrafo en esta si lo traes dentro.'
      },
      why: {
        en: 'This is the closest thing to the brief. Everything premium about an identity comes from having a genuine position, and positions come from real differences.',
        es: 'Esto es lo más cercano al brief. Todo lo premium en una identidad viene de tener una posición real, y las posiciones vienen de diferencias reales.'
      },
      micro: {
        en: 'Take your time here. There is no length I am hoping for.',
        es: 'Tómate tu tiempo aquí. No espero cierta cantidad de palabras.'
      }
    },
    {
      n: 4, section: 'work', type: 'textarea',
      prompt: {
        en: 'Is there a photograph of yours you would be happy to be judged on for the next five years?',
        es: '¿Hay una foto tuya por la que estarías feliz de ser juzgada los próximos cinco años?'
      },
      sub: {
        en: 'Tell me which one. It does not have to be the most popular one. You can send the file later.',
        es: 'Dime cuál. No tiene que ser la más popular. El archivo me lo puedes mandar después.'
      }
    },

    {
      n: 5, section: 'people', type: 'textarea',
      prompt: {
        en: 'Who is actually hiring you?',
        es: '¿Quién te está contratando en realidad?'
      },
      sub: {
        en: 'Age, work, taste, budget, whatever you know. Describe a real client if that is easier than describing a type.',
        es: 'Edad, trabajo, gusto, presupuesto, lo que sepas. Describe a una clienta real si es más fácil que describir un tipo.'
      }
    },
    {
      n: 6, section: 'people', type: 'textarea',
      prompt: {
        en: 'What do they believe about photographers before they meet you?',
        es: '¿Qué creen sobre las fotógrafas antes de conocerte?'
      },
      sub: {
        en: 'Expectations, fears, past disappointments.',
        es: 'Expectativas, miedos, decepciones pasadas.'
      },
      why: {
        en: 'An identity is partly there to correct an assumption. Knowing which one lets me aim.',
        es: 'Una identidad existe en parte para corregir una suposición. Saber cuál me deja apuntar.'
      }
    },
    {
      n: 7, section: 'people', type: 'multi',
      prompt: {
        en: 'Where do people find you now?',
        es: '¿Dónde te encuentra la gente ahora?'
      },
      sub: {
        en: 'Choose the ones that apply, then tell me roughly in what order.',
        es: 'Marca las que apliquen y dime más o menos en qué orden.'
      },
      why: {
        en: 'This decides how much weight the social system carries relative to the website, and therefore which one I make harder working.',
        es: 'Esto decide cuánto peso carga el sistema social frente al sitio web, y por lo tanto a cuál hago trabajar más duro.'
      },
      options: {
        en: ['Instagram', 'Referral from a past client', 'Referral from a venue or vendor', 'Search', 'An agency', 'Somewhere else'],
        es: ['Instagram', 'Recomendación de una clienta', 'Recomendación de un venue o proveedor', 'Búsqueda', 'Una agencia', 'Otro lugar']
      },
      noteLabel: {
        en: 'Roughly in order, and anything worth adding',
        es: 'Más o menos en qué orden, y lo que quieras agregar'
      }
    },
    {
      n: 8, section: 'people', type: 'textarea',
      prompt: {
        en: 'What makes someone choose you over someone cheaper?',
        es: '¿Por qué te eligen a ti en lugar de alguien más barato?'
      },
      sub: {
        en: 'Their words if you have heard them say it.',
        es: 'Con sus palabras, si se lo has escuchado decir.'
      }
    },

    {
      n: 9, section: 'voice', type: 'textarea',
      prompt: {
        en: 'Is the brand Sharnay, or Sharnay Photography?',
        es: '¿La marca es Sharnay o Sharnay Photography?'
      },
      sub: {
        en: 'Or both, depending on where it appears. Say what feels right, even if you cannot justify it.',
        es: 'O las dos, según dónde aparezca. Di lo que se sienta bien, aunque no lo puedas justificar.'
      },
      micro: {
        en: '\u201CI don\u2019t know\u201D is a real answer.',
        es: '\u201CNo sé\u201D es una respuesta válida.'
      }
    },
    {
      n: 10, section: 'voice', type: 'text',
      prompt: {
        en: 'How is it said aloud?',
        es: '¿Cómo se dice en voz alta?'
      },
      sub: {
        en: 'Include pronunciation if it has ever been mistaken.',
        es: 'Incluye la pronunciación si alguna vez se la han equivocado.'
      }
    },
    {
      n: 11, section: 'voice', type: 'choice',
      prompt: {
        en: 'Do you write as yourself, or does the studio speak?',
        es: '¿Escribes como tú misma, o habla el estudio?'
      },
      body: {
        en: '"I photographed this in Marrakech" or "Sharnay Photography documented this in Marrakech." One is not better than the other, but the brand can only pick one.',
        es: '"Fotografié esto en Marrakech" o "Sharnay Photography documentó esto en Marrakech." Ninguna es mejor que la otra, pero la marca solo puede elegir una.'
      },
      options: {
        en: ['I write as myself', 'The studio speaks', 'It depends on where it appears', 'I don\u2019t know yet'],
        es: ['Escribo como yo misma', 'Habla el estudio', 'Depende de dónde aparezca', 'Todavía no sé']
      },
      noteLabel: UI.addAnything
    },
    {
      n: 12, section: 'voice', type: 'list3',
      prompt: {
        en: 'Three words you would want a client to use about the experience of working with you.',
        es: 'Tres palabras que querrías que una clienta usara sobre cómo se siente trabajar contigo.'
      },
      sub: {
        en: 'Not about the pictures. About you.',
        es: 'No sobre las fotos. Sobre ti.'
      }
    },
    {
      n: 13, section: 'voice', type: 'textarea',
      prompt: {
        en: 'Is there anything you would never want the brand to sound like?',
        es: '¿Hay algo a lo que nunca querrías que sonara la marca?'
      },
      sub: {
        en: 'Sometimes easier to answer than the question before it, and just as useful.',
        es: 'A veces más fácil de contestar que la pregunta anterior, y igual de útil.'
      }
    },

    {
      n: 14, section: 'feel', type: 'choice', heavy: true,
      prompt: {
        en: 'How much colour does this brand get?',
        es: '¿Cuánto color le toca a esta marca?'
      },
      body: {
        en: 'My recommendation is very little. Near black, paper, and one restrained accent, letting your photographs carry all the colour in the system. Tell me if that sounds right, or if it sounds too austere for how you see the practice.',
        es: 'Mi recomendación es muy poco. Casi negro, papel, y un acento discreto, dejando que tus fotografías carguen todo el color del sistema. Dime si eso te suena bien, o si te suena demasiado austero para cómo ves la práctica.'
      },
      why: {
        en: 'This is the one recommendation I would defend hardest, so I would rather have the disagreement now than at the presentation.',
        es: 'Esta es la recomendación que defendería con más fuerza, así que prefiero tener el desacuerdo ahora que en la presentación.'
      },
      options: {
        en: ['That sounds right', 'Mostly right, but I want room to argue', 'Too austere for how I see the practice', 'I don\u2019t know yet'],
        es: ['Me suena bien', 'Casi bien, pero quiero espacio para discutir', 'Demasiado austero para cómo veo la práctica', 'Todavía no sé']
      },
      noteLabel: { en: 'Tell me why', es: 'Dime por qué' },
      micro: {
        en: 'Disagreeing here is genuinely useful. It is easier to change now than later.',
        es: 'Que no estés de acuerdo aquí sirve de verdad. Es más fácil cambiarlo ahora que después.'
      }
    },
    {
      n: 15, section: 'feel', type: 'textarea',
      prompt: {
        en: 'Is your work warm or cool?',
        es: '¿Tu trabajo es cálido o frío?'
      },
      sub: {
        en: 'Look at thirty of your images together before answering. Most photographers are surprised.',
        es: 'Mira treinta de tus imágenes juntas antes de contestar. A la mayoría de las fotógrafas les sorprende.'
      }
    },
    {
      n: 16, section: 'feel', type: 'pairs3',
      prompt: {
        en: 'Three brands, any industry, that feel right to you.',
        es: 'Tres marcas, de cualquier industria, que se sientan bien para ti.'
      },
      sub: {
        en: 'And more usefully, one line each on why. "Because it is clean" tells me nothing. "Because they trust you to work it out yourself" tells me a great deal.',
        es: 'Y más útil todavía, una línea de por qué en cada una. "Porque es limpia" no me dice nada. "Porque confían en que tú lo entiendas sola" me dice muchísimo.'
      }
    },
    {
      n: 17, section: 'feel', type: 'textarea', heavy: true,
      prompt: {
        en: 'What are you tired of seeing in photography branding?',
        es: '¿De qué estás harta en el branding de fotografía?'
      },
      sub: {
        en: 'Be specific and be unkind. This is one of the more valuable answers on the page.',
        es: 'Sé específica y sé cruel. Esta es una de las respuestas más valiosas de la página.'
      },
      why: {
        en: 'Knowing what to avoid is usually more precise than knowing what to aim for, and most people need permission to say it plainly.',
        es: 'Saber qué evitar suele ser más preciso que saber a qué apuntar, y casi todos necesitan permiso para decirlo claro.'
      },
      micro: {
        en: 'Nothing you write here will be repeated to anyone.',
        es: 'Nada de lo que escribas aquí se le repite a nadie.'
      }
    },

    {
      n: 18, section: 'physical', type: 'textarea',
      prompt: {
        en: 'What do clients actually receive from you?',
        es: '¿Qué reciben tus clientas en realidad?'
      },
      sub: {
        en: 'Files, prints, an album, a USB, a box, an email link. Describe the current moment of delivery honestly, including the parts that feel unfinished.',
        es: 'Archivos, impresiones, un álbum, una USB, una caja, un link por correo. Describe el momento de entrega tal como es hoy, incluyendo las partes que se sienten sin terminar.'
      }
    },
    {
      n: 19, section: 'physical', type: 'textarea',
      prompt: {
        en: 'What could that moment be?',
        es: '¿Qué podría ser ese momento?'
      },
      sub: {
        en: 'If it were the best part of working with you.',
        es: 'Si fuera la mejor parte de trabajar contigo.'
      }
    },
    {
      n: 20, section: 'physical', type: 'choice',
      prompt: {
        en: 'What is a realistic budget for printed pieces?',
        es: '¿Cuál es un presupuesto realista para piezas impresas?'
      },
      sub: {
        en: 'A range is fine. This decides whether the print system is designed around good paper alone, or around foil, embossing, and specialist finishes.',
        es: 'Un rango está bien. Esto decide si el sistema impreso se diseña alrededor de buen papel solamente, o alrededor de foil, relieve y acabados especiales.'
      },
      why: {
        en: 'I would rather design something modest and beautiful that you reorder for years than something expensive you print once.',
        es: 'Prefiero diseñar algo modesto y bonito que vas a volver a pedir por años, que algo caro que imprimes una sola vez.'
      },
      options: {
        en: ['Under $500 to start', '$500 to $1,500', '$1,500 to $3,000', '$3,000 and above', 'I don\u2019t know yet'],
        es: ['Menos de $500 para empezar', '$500 a $1,500', '$1,500 a $3,000', '$3,000 o más', 'Todavía no sé']
      },
      noteLabel: { en: 'Anything that affects this', es: 'Algo que afecte esto' }
    },

    {
      n: 21, section: 'exists', type: 'textarea',
      prompt: {
        en: 'Is there a current logo, colour, or typeface with any recognition worth keeping?',
        es: '¿Hay un logo, un color o una tipografía actual con algo de reconocimiento que valga la pena conservar?'
      },
      sub: {
        en: 'Even if you dislike it. If clients recognize it, that is an asset worth considering before discarding.',
        es: 'Aunque no te guste. Si las clientas lo reconocen, es un activo que vale considerar antes de descartarlo.'
      }
    },
    {
      n: 22, section: 'exists', type: 'textarea',
      prompt: {
        en: 'What is currently live?',
        es: '¿Qué está activo ahora?'
      },
      sub: {
        en: 'Site, Instagram, printed pieces, anything with your name on it. Links or photographs.',
        es: 'Sitio, Instagram, piezas impresas, cualquier cosa con tu nombre. Links o fotos.'
      }
    },
    {
      n: 23, section: 'exists', type: 'textarea',
      prompt: {
        en: 'Is anything locked?',
        es: '¿Hay algo que ya no se pueda mover?'
      },
      sub: {
        en: 'A domain you have paid for, a name registered, a piece already printed in quantity, a partnership with its own requirements.',
        es: 'Un dominio que ya pagaste, un nombre registrado, una pieza ya impresa en cantidad, una alianza con sus propios requisitos.'
      }
    }
  ];

  /* ------------------------------------------------------------------------
     06 · Requests
     ---------------------------------------------------------------------- */

  var REQUESTS = [
    {
      key: 'selection',
      title: { en: 'A representative selection', es: 'Una selección representativa' },
      body: {
        en: 'Thirty to fifty photographs that show where the practice is going. Not your greatest hits. Include the everyday client work, because that is what the system has to hold.',
        es: 'Treinta a cincuenta fotografías que muestren hacia dónde va la práctica. No tus favoritas. Incluye el trabajo de todos los días, porque eso es lo que el sistema tiene que sostener.'
      },
      label: { en: 'Choose photographs', es: 'Elegir fotografías' }
    },
    {
      key: 'printed',
      title: { en: 'Anything printed', es: 'Cualquier cosa impresa' },
      body: {
        en: 'Photographs or scans of cards, packaging, albums, sleeves, anything physical with your name on it. Rough phone pictures are perfectly fine.',
        es: 'Fotos o escaneos de tarjetas, empaques, álbumes, sobres, cualquier cosa física con tu nombre. Fotos rápidas de celular están perfectas.'
      },
      label: { en: 'Choose files', es: 'Elegir archivos' }
    },
    {
      key: 'loved',
      title: { en: 'One thing you love', es: 'Una cosa que ames' },
      body: {
        en: 'A book, a magazine, a shop, a bottle, a website. No explanation required, and it does not need to be about photography.',
        es: 'Un libro, una revista, una tienda, una botella, un sitio web. No hace falta explicar, y no tiene que ser de fotografía.'
      },
      label: { en: 'Choose a file', es: 'Elegir archivo' }
    }
  ];

  /* ------------------------------------------------------------------------
     07 · Long form copy
     ---------------------------------------------------------------------- */

  var COPY = {
    openingTitle: { en: 'Reading<br>the Practice', es: 'Leer<br>la Práctica' },
    openingStatement: {
      en: 'Every practice has a way of seeing the world. Before I design yours, I would like to understand it.',
      es: 'Cada práctica tiene su manera de ver el mundo. Antes de diseñar la tuya, quiero entenderla.'
    },
    letter: {
      en: [
        'Thank you for trusting me with your practice.',
        'Before we talk about colors, websites, or how the work should look, I want to understand how you see it.',
        'Some of these questions will feel practical. Others may feel unusual. That is intentional.',
        'My job is not simply to make the business look better. It is to understand what makes the work unmistakably yours.',
        'Take your time. &ldquo;I don&rsquo;t know&rdquo; is always a real answer, and a sentence is enough almost everywhere.',
        'When you are finished, my goal is to describe your practice in three sentences.',
        'If you recognize yourself in those three sentences, we will know we are ready to begin.'
      ],
      es: [
        'Gracias por confiarme tu práctica.',
        'Antes de hablar de colores, de sitios web, o de cómo debe verse el trabajo, quiero entender cómo lo ves tú.',
        'Algunas de estas preguntas te van a parecer prácticas. Otras te van a parecer raras. Es a propósito.',
        'Mi trabajo no es solamente hacer que el negocio se vea mejor. Es entender qué hace que el trabajo sea inconfundiblemente tuyo.',
        'Tómate tu tiempo. &ldquo;No sé&rdquo; siempre es una respuesta válida, y una sola frase basta en casi todo.',
        'Cuando termines, mi meta es describir tu práctica en tres frases.',
        'Si te reconoces en esas tres frases, sabremos que estamos listos para empezar.'
      ]
    },
    sendTitle: { en: 'A few things to send', es: 'Algunas cosas que mandarme' },
    sendIntro: {
      en: 'Three things, whenever you have a quiet hour. Nothing here needs to be prepared, and nothing here needs to be perfect.',
      es: 'Tres cosas, cuando tengas una hora tranquila. Nada de esto necesita prepararse, y nada de esto necesita estar perfecto.'
    },
    sendNote: {
      en: 'Files stay on your computer. This prototype does not send or store anything, it only shows what you selected. When the intake goes live, delivery connects here.',
      es: 'Los archivos se quedan en tu computadora. Este prototipo no manda ni guarda nada, solo muestra lo que seleccionaste. Cuando esto entre en vivo, la entrega se conecta aquí.'
    },
    sendNext: {
      en: 'Three things, whenever you have a quiet hour. Nothing here needs to be prepared.',
      es: 'Tres cosas, cuando tengas una hora tranquila. Nada de esto necesita prepararse.'
    },
    closingLede: { en: 'We have what we need.', es: 'Ya tenemos lo que necesitamos.' },
    closing: {
      en: [
        'Thank you for taking the time to let me see the practice from your side.',
        'Over the next several days, I&rsquo;ll read your responses slowly. I&rsquo;ll look for patterns, tensions, and the things that make the work unmistakably yours.',
        'The next thing you receive will not be a logo, a mood board, or a collection of concepts.',
        'It will be my read of your practice.'
      ],
      es: [
        'Gracias por tomarte el tiempo de dejarme ver la práctica desde tu lado.',
        'En los próximos días voy a leer tus respuestas con calma. Voy a buscar patrones, tensiones, y las cosas que hacen que el trabajo sea inconfundiblemente tuyo.',
        'Lo siguiente que recibas no va a ser un logo, ni un mood board, ni un montón de conceptos.',
        'Va a ser mi lectura de tu práctica.'
      ]
    },
    closingThree: {
      en: 'Three sentences.<br>If they feel true, we begin designing.',
      es: 'Tres frases.<br>Si se sienten verdaderas, empezamos a diseñar.'
    },
    finalReflectionNext: { en: 'A Few Things To Send', es: 'Algunas Cosas Que Mandarme' },
    pairNote: {
      en: 'Long before either of us did this for a living.',
      es: 'Mucho antes de que esto fuera el trabajo de alguno de los dos.'
    }
  };

  /* ------------------------------------------------------------------------
     08 · Screen sequence
     ---------------------------------------------------------------------- */

  /* The two frames in colour open and close the sequence. Everything the
     chapters carry in between runs in monochrome. */

  var FILM_OPENING = film('film-opening',
    { en: 'On location, late desert light', es: 'En locación, luz tardía en el desierto' },
    'Sharnay_005_hi2ijc', 'v1785217062',
    'e_upscale/c_fill,g_auto,ar_16:9,w_2400/e_brightness:-10/e_contrast:12/q_auto:good',
    '52% 45%', 'light');

  var FILM_SEND = film('film-send',
    { en: 'Feathers, mid air', es: 'Plumas en el aire' },
    'Sharnay_004_hbehan', 'v1785216801',
    'e_upscale/c_thumb,g_auto,z_1.7,ar_16:9,w_2000/e_grayscale/e_brightness:-28/e_contrast:16/q_auto:good',
    '50% 45%');

  var FILM_CLOSING = film('film-closing',
    { en: 'Beauty portrait, the last frame', es: 'Retrato de belleza, el último cuadro' },
    'Sharnay_001_vtln8k', 'v1785216801',
    'e_upscale/c_fill,g_auto,ar_16:9,w_2400/e_saturation:-55/e_brightness:-22/e_contrast:10/q_auto:good',
    '58% 38%', 'heavy');

  var SCREENS = [];

  SCREENS.push({ kind: 'opening', tone: 'dark', film: FILM_OPENING });
  SCREENS.push({ kind: 'letter', tone: 'light' });

  SECTIONS.forEach(function (section, i) {
    SCREENS.push({
      kind: 'interlude',
      tone: 'dark',
      reflection: i === 0 ? null : SECTIONS[i - 1].reflection,
      next: { title: section.title, line: section.line },
      film: section.film,
      sectionIndex: i
    });
    QUESTIONS.filter(function (q) { return q.section === section.id; })
      .forEach(function (q) { SCREENS.push({ kind: 'question', tone: 'light', q: q }); });
  });

  SCREENS.push({
    kind: 'interlude',
    tone: 'dark',
    reflection: SECTIONS[SECTIONS.length - 1].reflection,
    next: { title: COPY.finalReflectionNext, line: COPY.sendNext },
    film: FILM_SEND,
    sectionIndex: null
  });

  SCREENS.push({ kind: 'send', tone: 'light' });
  SCREENS.push({ kind: 'closing', tone: 'dark', film: FILM_CLOSING });

  var CLOSING_INDEX = SCREENS.length - 1;

  /* ------------------------------------------------------------------------
     09 · State
     ---------------------------------------------------------------------- */

  var memoryStore = {};
  var canStore = (function () {
    try {
      window.localStorage.setItem('__lgs__', '1');
      window.localStorage.removeItem('__lgs__');
      return true;
    } catch (e) { return false; }
  })();

  function readStore(key) {
    if (canStore) { try { return window.localStorage.getItem(key); } catch (e) { return null; } }
    return memoryStore[key] || null;
  }
  function writeStore(key, value) {
    if (canStore) { try { window.localStorage.setItem(key, value); return; } catch (e) { /* falls through */ } }
    memoryStore[key] = value;
  }

  function preferredLanguage() {
    var nav = (window.navigator && (window.navigator.language || window.navigator.userLanguage)) || 'en';
    return String(nav).toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
  }

  var defaults = {
    index: 0,
    /* Where she was standing when she chose to go back to the opening, so the
       opening can offer to put her back rather than making her walk forward
       through everything she has already answered. */
    mark: 0,
    lang: null,
    answers: {},
    files: {},
    completed: false,
    completedAt: null,
    started: null,
    updated: null,
    /* Production Phase 1. Stable id for idempotent POST /api/intake. */
    intakeId: null,
    /* null | pending | ok | failed */
    submissionStatus: null,
    submittedAt: null
  };

  var state = (function () {
    var raw = readStore(ENGAGEMENT.storageKey);
    if (!raw) { return Object.assign({}, defaults); }
    try {
      var parsed = JSON.parse(raw);
      var merged = Object.assign({}, defaults, parsed);
      merged.answers = parsed.answers || {};
      merged.files = parsed.files || {};
      if (typeof merged.index !== 'number' || merged.index < 0 || merged.index >= SCREENS.length) merged.index = 0;
      if (typeof merged.mark !== 'number' || merged.mark < 1 || merged.mark >= SCREENS.length) merged.mark = 0;
      if (merged.intakeId != null && typeof merged.intakeId !== 'string') merged.intakeId = null;
      if (merged.submissionStatus !== 'pending' && merged.submissionStatus !== 'ok' &&
          merged.submissionStatus !== 'failed') merged.submissionStatus = null;
      if (merged.submittedAt != null && typeof merged.submittedAt !== 'string') merged.submittedAt = null;
      return merged;
    } catch (e) { return Object.assign({}, defaults); }
  })();

  lang = state.lang === 'es' || state.lang === 'en' ? state.lang : preferredLanguage();
  state.lang = lang;

  var saveTimer = null;
  function save(immediate) {
    state.lang = lang;
    state.updated = new Date().toISOString();
    if (!state.started) state.started = state.updated;
    if (immediate) {
      writeStore(ENGAGEMENT.storageKey, JSON.stringify(state));
      return;
    }
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(function () {
      writeStore(ENGAGEMENT.storageKey, JSON.stringify(state));
    }, 260);
  }

  /* ------------------------------------------------------------------------
     10 · Helpers
     ---------------------------------------------------------------------- */

  var stage = document.getElementById('stage');
  var body = document.body;
  var backdrop = document.getElementById('backdrop');
  var metaLeft = document.getElementById('meta-left');
  var metaRight = document.getElementById('meta-right');
  var chromeBottom = document.getElementById('chrome-bottom');
  var btnBack = document.getElementById('go-back');
  var btnNext = document.getElementById('go-next');
  var btnSaveLater = document.getElementById('save-later');
  var btnBeginning = document.getElementById('to-beginning');
  var langGroup = document.getElementById('lang');
  var announcer = document.getElementById('announcer');
  var toastEl = document.getElementById('toast');
  var printDoc = document.getElementById('print-doc');
  var skipLink = document.querySelector('.skip');

  var reviewMode = false;
  var toastTimer = null;

  /* The foot is pinned to the window, so the app has to reserve exactly its
     height. That height is not a constant: the controls wrap onto a second
     line on narrow screens, and the labels change length with the language.
     Measuring beats guessing. */
  function measureChrome() {
    var h = chromeBottom.offsetHeight;
    if (h > 0) document.documentElement.style.setProperty('--chrome-bottom-h', h + 'px');
  }

  if (window.ResizeObserver) {
    new window.ResizeObserver(measureChrome).observe(chromeBottom);
  } else {
    window.addEventListener('resize', measureChrome);
  }
  measureChrome();

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function formatDate(iso) {
    var d = iso ? new Date(iso) : new Date();
    if (isNaN(d.getTime())) d = new Date();
    try {
      return d.toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-GB',
        { day: 'numeric', month: 'long', year: 'numeric' });
    } catch (e) {
      return d.toDateString();
    }
  }

  function sectionOf(q) {
    for (var i = 0; i < SECTIONS.length; i++) { if (SECTIONS[i].id === q.section) return SECTIONS[i]; }
    return SECTIONS[0];
  }

  function questionScreenIndex(n) {
    for (var i = 0; i < SCREENS.length; i++) {
      if (SCREENS[i].kind === 'question' && SCREENS[i].q.n === n) return i;
    }
    return 0;
  }

  function optionsOf(q) { return t(q.options) || []; }

  function toast(message) {
    toastEl.textContent = message;
    toastEl.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toastEl.hidden = true; }, 4600);
  }

  function filmSide(frame) {
    return ' data-side="' + esc(frame && frame.side ? frame.side : 'left') + '"';
  }

  /* The frame itself lives in the fixed backdrop, outside the panel, so the
     only thing a film screen renders is the credit for it. */
  function filmCaption(frame) {
    if (!frame) return '';
    return '<p class="film__caption">' +
      '<span class="visually-hidden">' + esc(t(UI.photograph)) + ' </span>' +
      esc(t(frame.caption)) +
    '</p>';
  }

  /* ------------------------------------------------------------------------
     11 · Answers

     Structured answers are stored as option indices rather than labels, so
     switching language never orphans a selection. Older label based values
     are migrated on read.
     ---------------------------------------------------------------------- */

  function blankAnswer(q) {
    switch (q.type) {
      case 'list3': return ['', '', ''];
      case 'pairs3': return [['', ''], ['', ''], ['', '']];
      case 'choice': return { choice: null, note: '' };
      case 'multi': return { choices: [], note: '' };
      default: return '';
    }
  }

  function indexOfLabel(q, label) {
    var found = -1;
    ['en', 'es'].forEach(function (code) {
      if (found !== -1) return;
      var list = (q.options && q.options[code]) || [];
      var at = list.indexOf(label);
      if (at !== -1) found = at;
    });
    return found;
  }

  function migrate(q, value) {
    if (q.type === 'choice' && typeof value.choice === 'string' && value.choice) {
      var at = indexOfLabel(q, value.choice);
      value.choice = at === -1 ? null : at;
    }
    if (q.type === 'multi' && Array.isArray(value.choices)) {
      value.choices = value.choices.map(function (item) {
        if (typeof item !== 'string') return item;
        return indexOfLabel(q, item);
      }).filter(function (i) { return typeof i === 'number' && i >= 0; });
    }
    return value;
  }

  function getAnswer(q) {
    var v = state.answers[q.n];
    if (v == null) return blankAnswer(q);
    if (q.type === 'list3' && !Array.isArray(v)) return blankAnswer(q);
    if (q.type === 'pairs3' && !Array.isArray(v)) return blankAnswer(q);
    if ((q.type === 'choice' || q.type === 'multi')) {
      if (typeof v !== 'object' || v === null) return blankAnswer(q);
      if (q.type === 'multi' && !Array.isArray(v.choices)) v.choices = [];
      return migrate(q, v);
    }
    return v;
  }

  function setAnswer(q, value) {
    state.answers[q.n] = value;
    save();
  }

  function answerText(q) {
    var v = state.answers[q.n];
    if (v == null) return '';
    var parts;
    var options = optionsOf(q);
    switch (q.type) {
      case 'list3':
        return (Array.isArray(v) ? v : []).map(function (s) { return (s || '').trim(); })
          .filter(Boolean).join(', ');
      case 'pairs3':
        return (Array.isArray(v) ? v : []).map(function (p) {
          var name = ((p && p[0]) || '').trim();
          var why = ((p && p[1]) || '').trim();
          if (!name && !why) return '';
          if (name && why) return name + '. ' + why;
          return name || why;
        }).filter(Boolean).join('\n');
      case 'choice':
        v = migrate(q, v);
        parts = [];
        if (typeof v.choice === 'number' && options[v.choice]) parts.push(options[v.choice]);
        if (v.note && v.note.trim()) parts.push(v.note.trim());
        return parts.join('\n');
      case 'multi':
        v = migrate(q, v);
        parts = [];
        var picked = (v.choices || []).map(function (i) { return options[i]; }).filter(Boolean);
        if (picked.length) parts.push(picked.join(', '));
        if (v.note && v.note.trim()) parts.push(v.note.trim());
        return parts.join('\n');
      default:
        return String(v).trim();
    }
  }

  function answeredCount() {
    return QUESTIONS.filter(function (q) { return answerText(q).length > 0; }).length;
  }

  function countLine(dateIso, label) {
    return t(label) + ' &middot; ' + answeredCount() + ' ' + t(UI.of) + ' ' + QUESTIONS.length +
      ' ' + t(UI.answered) + ' &middot; ' + esc(formatDate(dateIso));
  }

  /* ------------------------------------------------------------------------
     12 · Fields
     ---------------------------------------------------------------------- */

  function autoGrow(el) {
    el.style.height = 'auto';
    el.style.height = (el.scrollHeight + 2) + 'px';
  }

  function fieldMarkup(q) {
    var a = getAnswer(q);
    var id = 'field-' + q.n;
    var html = '';

    if (q.type === 'text' || q.type === 'textarea') {
      html += '<label class="field-label" for="' + id + '">' + esc(t(UI.yourAnswer)) + '</label>';
      html += '<textarea class="write' + (q.type === 'text' ? ' write--single' : '') + '" id="' + id + '"' +
              ' rows="' + (q.type === 'text' ? 1 : (q.heavy ? 5 : 3)) + '"' +
              (q.type === 'text' ? ' data-role="single"' : '') +
              ' placeholder="' + esc(t(UI.writeHere)) + '">' + esc(a) + '</textarea>';
      return html;
    }

    if (q.type === 'list3') {
      html += '<div class="triple">';
      t(UI.ordinalsF).forEach(function (label, i) {
        html += '<div>' +
          '<label class="field-label" for="' + id + '-' + i + '">' + esc(label) + '</label>' +
          '<textarea class="write write--single" id="' + id + '-' + i + '" rows="1" data-role="single"' +
          ' data-slot="' + i + '" placeholder="' + esc(t(UI.aWord)) + '">' + esc(a[i] || '') + '</textarea>' +
          '</div>';
      });
      html += '</div>';
      return html;
    }

    if (q.type === 'pairs3') {
      html += '<div class="pairs">';
      t(UI.ordinalsM).forEach(function (label, i) {
        var pair = a[i] || ['', ''];
        html += '<div class="pair">' +
          '<p class="pair__index">' + esc(label) + '</p>' +
          '<label class="visually-hidden" for="' + id + '-' + i + '-name">' + esc(t(UI.theBrand) + ' ' + label) + '</label>' +
          '<textarea class="write write--single" id="' + id + '-' + i + '-name" rows="1" data-role="single"' +
          ' data-slot="' + i + '" data-part="0" placeholder="' + esc(t(UI.theBrand)) + '">' + esc(pair[0] || '') + '</textarea>' +
          '<label class="visually-hidden" for="' + id + '-' + i + '-why">' + esc(t(UI.whyRight) + ' ' + label) + '</label>' +
          '<textarea class="write" id="' + id + '-' + i + '-why" rows="1" data-slot="' + i + '" data-part="1"' +
          ' placeholder="' + esc(t(UI.whyRight)) + '">' + esc(pair[1] || '') + '</textarea>' +
          '</div>';
      });
      html += '</div>';
      return html;
    }

    if (q.type === 'choice' || q.type === 'multi') {
      var isMulti = q.type === 'multi';
      html += '<fieldset style="border:0;padding:0;margin:0">';
      html += '<legend class="field-label">' + esc(t(isMulti ? UI.chooseAny : UI.chooseOne)) + '</legend>';
      html += '<div class="choices">';
      optionsOf(q).forEach(function (opt, i) {
        var checked = isMulti ? (a.choices.indexOf(i) !== -1) : (a.choice === i);
        html += '<label class="choice">' +
          '<input type="' + (isMulti ? 'checkbox' : 'radio') + '" name="q' + q.n + '"' +
          ' value="' + i + '" id="' + id + '-o' + i + '"' + (checked ? ' checked' : '') + '>' +
          '<span>' + esc(opt) + '</span>' +
          '</label>';
      });
      html += '</div></fieldset>';
      html += '<label class="field-label" for="' + id + '-note">' +
              esc(t(q.noteLabel || UI.addAnything)) + '</label>';
      html += '<textarea class="write" id="' + id + '-note" rows="2" data-role="note"' +
              ' placeholder="' + esc(t(UI.optional)) + '">' + esc(a.note || '') + '</textarea>';
      return html;
    }

    return html;
  }

  /* If a local file is missing, the Cloudinary chain that produced it stands
     in, the same arrangement the film frames use. */
  function bindRemoteFallback(root) {
    Array.prototype.forEach.call(root.querySelectorAll('img[data-remote]'), function (img) {
      img.addEventListener('error', function () {
        var remote = img.getAttribute('data-remote');
        if (remote && img.getAttribute('src') !== remote) img.src = remote;
      });
    });
  }

  /* Her mark carries the client name as its alt text, which is also what shows
     if the file never arrives, so the document is never left unattributed. */
  function clientMark() {
    return '<img class="mark" src="' + esc(ENGAGEMENT.clientMark) + '"' +
      ' data-remote="' + esc(ENGAGEMENT.clientMarkRemote) + '"' +
      ' alt="' + esc(ENGAGEMENT.client) + '" width="351" height="102">';
  }

  function bindField(root, q) {
    Array.prototype.forEach.call(root.querySelectorAll('.write'), function (el) {
      autoGrow(el);
      el.addEventListener('input', function () {
        autoGrow(el);
        commitField(root, q);
      });
    });
    Array.prototype.forEach.call(root.querySelectorAll('.choice input'), function (el) {
      el.addEventListener('change', function () { commitField(root, q); });
    });
  }

  function commitField(root, q) {
    if (q.type === 'text' || q.type === 'textarea') {
      setAnswer(q, root.querySelector('.write').value);
      return;
    }

    if (q.type === 'list3') {
      var list = ['', '', ''];
      Array.prototype.forEach.call(root.querySelectorAll('.write'), function (el) {
        list[Number(el.getAttribute('data-slot'))] = el.value;
      });
      setAnswer(q, list);
      return;
    }

    if (q.type === 'pairs3') {
      var pairs = [['', ''], ['', ''], ['', '']];
      Array.prototype.forEach.call(root.querySelectorAll('.write'), function (el) {
        pairs[Number(el.getAttribute('data-slot'))][Number(el.getAttribute('data-part'))] = el.value;
      });
      setAnswer(q, pairs);
      return;
    }

    if (q.type === 'choice') {
      var picked = root.querySelector('.choice input:checked');
      setAnswer(q, {
        choice: picked ? Number(picked.value) : null,
        note: root.querySelector('[data-role="note"]').value
      });
      return;
    }

    if (q.type === 'multi') {
      var chosen = [];
      Array.prototype.forEach.call(root.querySelectorAll('.choice input:checked'), function (el) {
        chosen.push(Number(el.value));
      });
      setAnswer(q, { choices: chosen, note: root.querySelector('[data-role="note"]').value });
    }
  }

  /* ------------------------------------------------------------------------
     13 · Screen renderers
     ---------------------------------------------------------------------- */

  function renderOpening(screen) {
    return '' +
      '<section class="panel film film--opening"' + filmSide(screen.film) + '>' +
        '<div class="film__lead">' +
          '<p class="opening__mark">' + esc(ENGAGEMENT.studio) + '</p>' +
        '</div>' +
        '<div class="film__body">' +
          '<div class="opening__head">' +
            '<h1 class="opening__title">' + t(COPY.openingTitle) + '</h1>' +
            '<p class="opening__sub">' + esc(t(ENGAGEMENT.subtitle)) + '</p>' +
          '</div>' +
          '<div class="opening__statement">' +
            '<hr class="rule">' +
            '<p class="statement">' + esc(t(COPY.openingStatement)) + '</p>' +
            '<div class="actions-row">' +
              '<button type="button" class="action" data-act="next">' + esc(t(UI.begin)) + '</button>' +
              (state.mark > 1
                ? '<button type="button" class="link" data-act="resume">' + esc(t(UI.resume)) + '</button>'
                : '') +
              '<span class="microcopy">' + esc(t(answeredCount() > 0 ? UI.returning : UI.anHour)) + '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        filmCaption(screen.film) +
      '</section>';
  }

  function kid(frame) {
    return '' +
      '<figure class="kid">' +
        '<img src="assets/images/' + esc(frame.file) + '.jpg"' +
          ' data-remote="' + esc(frame.remote) + '"' +
          ' alt="' + esc(t(frame.alt)) + '" width="760" height="950">' +
        '<figcaption>' + esc(frame.name) + '</figcaption>' +
      '</figure>';
  }

  function renderLetter() {
    return '' +
      '<section class="panel letter">' +
        '<p class="panel__eyebrow">' + esc(t(UI.letter)) + '</p>' +
        /* The signature and the action are a third block rather than the tail of
           the letter, so that on one column the photographs can fall between
           the letter and the button. Otherwise she meets the button first and
           never scrolls to the two of them. */
        '<div class="letter__grid">' +
          '<div class="letter__main">' +
            '<h1 class="letter__salutation">' + esc(ENGAGEMENT.salutation) + '</h1>' +
            '<div class="prose letter__body">' +
              t(COPY.letter).map(function (p) { return '<p>' + p + '</p>'; }).join('') +
            '</div>' +
          '</div>' +
          '<aside class="letter__pair">' +
            kid(KIDS.luis) +
            kid(KIDS.erika) +
            '<p class="letter__pair-note">' + esc(t(COPY.pairNote)) + '</p>' +
          '</aside>' +
          '<div class="letter__close">' +
            '<p class="signature">' + esc(ENGAGEMENT.author) + '<span>' + esc(ENGAGEMENT.studio) + '</span></p>' +
            '<div class="actions-row">' +
              '<button type="button" class="action" data-act="next">' + esc(t(UI.beginTalk)) + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
  }

  function renderInterlude(screen) {
    var label = screen.sectionIndex === null
      ? t(UI.lastChapter)
      : t(UI.section) + ' ' + SECTIONS[screen.sectionIndex].numeral + ' ' + t(UI.of) + ' VI';

    var html = '<section class="panel film film--interlude"' + filmSide(screen.film) + '>';

    html += '<div class="film__lead">';
    if (screen.reflection) {
      html += '<p class="interlude__reflection">' + esc(t(screen.reflection)) + '</p>';
    }
    html += '</div>';

    html += '<div class="film__body">';
    html += '<p class="interlude__next-label">' + esc(label) + '</p>';
    html += '<h1 class="interlude__next-title">' + esc(t(screen.next.title)) + '</h1>';
    html += '<p class="interlude__next-line">' + esc(t(screen.next.line)) + '</p>';
    html += '<div class="actions-row"><button type="button" class="action" data-act="next">' +
            esc(t(UI.continue)) + '</button></div>';
    html += '</div>';

    html += filmCaption(screen.film);
    html += '</section>';
    return html;
  }

  function renderQuestion(screen) {
    var q = screen.q;
    var section = sectionOf(q);
    var html = '<section class="panel question' + (q.heavy ? ' question--heavy' : '') + '">';

    html += '<div class="question__body">';
    html += '<p class="panel__eyebrow">' + esc(t(section.title)) + ' &middot; ' +
            esc(t(UI.question)) + ' ' + pad(q.n) + '</p>';
    html += '<h1 class="question__prompt">' + esc(t(q.prompt)) + '</h1>';
    if (q.sub) html += '<p class="question__sub">' + esc(t(q.sub)) + '</p>';
    if (q.body) html += '<p class="question__body-note">' + esc(t(q.body)) + '</p>';

    if (q.why) {
      html += '<div class="why">' +
        '<button type="button" class="why__toggle" aria-expanded="false" aria-controls="why-' + q.n + '">' +
          esc(t(UI.whyAsking)) +
        '</button>' +
        '<div class="why__panel" id="why-' + q.n + '" hidden>' + esc(t(q.why)) + '</div>' +
      '</div>';
    }

    html += '<div class="question__field-wrap">' + fieldMarkup(q) + '</div>';
    if (q.micro) html += '<p class="microcopy">' + esc(t(q.micro)) + '</p>';
    html += '</div>';

    html += '<aside class="question__aside" aria-hidden="true">' +
      '<p class="question__numeral">' + esc(section.numeral) + '</p>' +
      '<p class="question__section-name">' + esc(t(section.title)) + '</p>' +
    '</aside>';

    html += '</section>';
    return html;
  }

  function renderSend() {
    var html = '<section class="panel send">';
    html += '<p class="panel__eyebrow">' + esc(t(UI.lastChapter)) + '</p>';
    html += '<h1 class="display">' + esc(t(COPY.sendTitle)) + '</h1>';
    html += '<p class="prose send__intro">' + esc(t(COPY.sendIntro)) + '</p>';

    html += '<div class="requests">';
    REQUESTS.forEach(function (r, i) {
      var chosen = state.files[r.key] || [];
      html += '<div class="request">' +
        '<p class="request__index">' + esc(t(UI.ordinalsM)[i]) + '</p>' +
        '<h2 class="request__title">' + esc(t(r.title)) + '</h2>' +
        '<p class="request__body">' + esc(t(r.body)) + '</p>' +
        '<div class="drop">' +
          '<input type="file" id="file-' + r.key + '" data-key="' + r.key + '"' +
            (r.key === 'loved' ? '' : ' multiple') + '>' +
          '<label class="drop__label" for="file-' + r.key + '">' + esc(t(r.label)) + '</label>' +
          '<ul class="drop__list" data-list="' + r.key + '">' +
            chosen.map(function (name) { return '<li>' + esc(name) + '</li>'; }).join('') +
          '</ul>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';

    html += '<p class="aside-note send__note">' + esc(t(COPY.sendNote)) + '</p>';
    html += '<div class="actions-row"><button type="button" class="action" data-act="next">' +
            esc(t(UI.finish)) + '</button></div>';
    html += '</section>';
    return html;
  }

  function renderClosing(screen) {
    return '' +
      '<section class="panel film film--closing"' + filmSide(screen.film) + '>' +
        '<div class="film__lead">' +
          '<p class="closing__state">' + countLine(state.completedAt, UI.complete) + '</p>' +
        '</div>' +
        '<div class="film__body">' +
          '<div class="closing__body">' +
            '<h1 class="closing__lede">' + esc(t(COPY.closingLede)) + '</h1>' +
            '<div class="prose">' +
              t(COPY.closing).map(function (p) { return '<p>' + p + '</p>'; }).join('') +
            '</div>' +
            '<p class="closing__three">' + t(COPY.closingThree) + '</p>' +
            '<p class="signature">' + esc(ENGAGEMENT.author) + '<span>' + esc(ENGAGEMENT.studio) + '</span></p>' +
            '<div class="actions-row">' +
              '<button type="button" class="action" data-act="review">' + esc(t(UI.reviewMine)) + '</button>' +
              '<button type="button" class="link" data-act="export">' + esc(t(UI.exportCopy)) + '</button>' +
              '<button type="button" class="link" data-act="print">' + esc(t(UI.printSave)) + '</button>' +
              (state.submissionStatus === 'failed'
                ? '<button type="button" class="link" data-act="retry-submit">' + esc(t(UI.retrySubmit)) + '</button>'
                : '') +
            '</div>' +
          '</div>' +
        '</div>' +
        filmCaption(screen.film) +
      '</section>';
  }

  function renderReview() {
    var html = '<section class="panel review">';
    html += '<header class="review__masthead">' +
      '<h1 class="review__title">' + esc(t(ENGAGEMENT.title)) + '</h1>' +
      '<p class="review__client">' + clientMark() + '</p>' +
      '<p class="review__stamp">' +
        '<span>' + esc(t(UI.preparedFor) + ' ' + ENGAGEMENT.studio) + '</span>' +
        '<span>' + esc(formatDate(state.updated)) + '</span>' +
        '<span>' + answeredCount() + ' ' + esc(t(UI.of)) + ' ' + QUESTIONS.length + ' ' + esc(t(UI.answered)) + '</span>' +
      '</p>' +
    '</header>';

    SECTIONS.forEach(function (section) {
      html += '<div class="review__section">' +
        '<div class="review__section-head">' +
          '<span class="review__section-numeral">' + esc(section.numeral) + '</span>' +
          '<h2 class="review__section-title">' + esc(t(section.title)) + '</h2>' +
        '</div>';

      QUESTIONS.filter(function (q) { return q.section === section.id; }).forEach(function (q) {
        var text = answerText(q);
        html += '<article class="entry">' +
          '<p class="entry__n">' + esc(t(UI.question)) + ' ' + pad(q.n) + '</p>' +
          '<div>' +
            '<p class="entry__q">' + esc(t(q.prompt)) + '</p>' +
            '<p class="entry__a' + (text ? '' : ' entry__a--empty') + '">' +
              (text ? esc(text) : esc(t(UI.notAnswered))) +
            '</p>' +
          '</div>' +
          '<button type="button" class="link entry__edit" data-act="edit" data-n="' + q.n + '">' +
            esc(t(UI.editResp)) + '</button>' +
        '</article>';
      });

      html += '</div>';
    });

    if (REQUESTS.some(function (r) { return (state.files[r.key] || []).length > 0; })) {
      html += '<div class="review__section">' +
        '<div class="review__section-head">' +
          '<span class="review__section-numeral">VII</span>' +
          '<h2 class="review__section-title">' + esc(t(COPY.finalReflectionNext)) + '</h2>' +
        '</div>';
      REQUESTS.forEach(function (r, i) {
        var names = state.files[r.key] || [];
        html += '<article class="entry">' +
          '<p class="entry__n">' + esc(t(UI.ordinalsM)[i]) + '</p>' +
          '<div>' +
            '<p class="entry__q">' + esc(t(r.title)) + '</p>' +
            '<p class="entry__a' + (names.length ? '' : ' entry__a--empty') + '">' +
              (names.length ? esc(names.join('\n')) : esc(t(UI.nothingSel))) +
            '</p>' +
          '</div>' +
        '</article>';
      });
      html += '</div>';
    }

    html += '<div class="actions-row">' +
      '<button type="button" class="action" data-act="close-review">' + esc(t(UI.returnClose)) + '</button>' +
      '<button type="button" class="link" data-act="export">' + esc(t(UI.exportJSON)) + '</button>' +
      '<button type="button" class="link" data-act="print">' + esc(t(UI.print)) + '</button>' +
    '</div>';

    html += '</section>';
    return html;
  }

  /* ------------------------------------------------------------------------
     14 · Render
     ---------------------------------------------------------------------- */

  /* --- The backdrop -------------------------------------------------------
     Two stacked layers, so one frame dissolves into the next instead of
     cutting. A frame is looked for locally first and falls back to the
     Cloudinary chain; if neither answers, the near black behind the layers
     is what shows, and the screen still reads. */

  var filmLayers = backdrop ? backdrop.querySelectorAll('.backdrop__layer') : [];
  var filmSlot = 0;
  var filmShowing = null;
  var filmSources = {};

  function resolveFilm(frame, done) {
    if (filmSources[frame.file]) { done(filmSources[frame.file]); return; }

    var candidates = ['jpg', 'jpeg', 'png', 'webp'].map(function (ext) {
      return 'assets/images/' + frame.file + '.' + ext;
    });
    if (frame.remote) candidates.push(frame.remote);

    var i = 0;
    (function attempt() {
      if (i >= candidates.length) return;
      var src = candidates[i];
      var probe = new Image();
      probe.onload = function () { filmSources[frame.file] = src; done(src); };
      probe.onerror = function () { i += 1; attempt(); };
      probe.src = src;
    })();
  }

  function showFilm(frame) {
    if (!backdrop) return;

    if (!frame) {
      body.classList.remove('is-film');
      filmShowing = null;
      return;
    }

    backdrop.setAttribute('data-scrim', frame.scrim);
    backdrop.setAttribute('data-side', frame.side);
    body.classList.add('is-film');

    if (filmShowing === frame.file) return;
    filmShowing = frame.file;

    resolveFilm(frame, function (src) {
      if (filmShowing !== frame.file) return;

      var incoming = filmLayers[filmSlot];
      var outgoing = filmLayers[filmSlot ? 0 : 1];

      incoming.style.backgroundImage = 'url("' + src + '")';
      incoming.style.setProperty('--focus', frame.focus);

      /* Retire and re-apply so the slow drift starts again on this frame. */
      incoming.classList.remove('is-live');
      void incoming.offsetWidth;
      incoming.classList.add('is-live');
      outgoing.classList.remove('is-live');

      filmSlot = filmSlot ? 0 : 1;
    });
  }

  /* The next photographic screen is fetched quietly while the client is
     reading or writing, so the dissolve has something to work with. */
  function preloadNextFilm(index) {
    for (var i = index + 1; i < SCREENS.length; i++) {
      if (SCREENS[i].film) { resolveFilm(SCREENS[i].film, function () {}); return; }
    }
  }

  function updateChrome(screen) {
    document.documentElement.setAttribute('lang', lang);
    document.title = t(ENGAGEMENT.title) + ' · ' + ENGAGEMENT.client + ' · ' + ENGAGEMENT.studio;
    if (skipLink) skipLink.textContent = t(UI.skip);
    if (langGroup) langGroup.setAttribute('aria-label', t(UI.language));
    Array.prototype.forEach.call(langGroup.querySelectorAll('.lang__btn'), function (el) {
      el.setAttribute('aria-pressed', String(el.getAttribute('data-lang') === lang));
    });

    btnBack.textContent = t(UI.back);
    btnNext.textContent = t(UI.continue);
    btnSaveLater.textContent = t(UI.saveLater);
    btnBeginning.textContent = t(UI.toBeginning);
    metaLeft.textContent = ENGAGEMENT.client;

    if (reviewMode) {
      metaRight.textContent = t(UI.review);
      btnNext.hidden = true;
      btnSaveLater.hidden = true;
      btnBeginning.hidden = true;
      /* The review is the longest screen in the piece and its own exit sits at
         the very bottom of it. Back stays so there is a way out from anywhere. */
      btnBack.hidden = false;
      return;
    }

    btnBack.hidden = false;
    btnNext.hidden = false;
    btnSaveLater.hidden = false;
    btnBeginning.hidden = false;

    if (screen.kind === 'opening') {
      metaRight.textContent = t(ENGAGEMENT.title);
      btnBack.hidden = true;
      btnNext.hidden = true;
      btnSaveLater.hidden = true;
      btnBeginning.hidden = true;
    } else if (screen.kind === 'letter') {
      metaRight.textContent = t(UI.letter);
      btnNext.hidden = true;
    } else if (screen.kind === 'interlude') {
      metaRight.textContent = screen.sectionIndex === null
        ? t(UI.lastChapter)
        : t(UI.section) + ' ' + pad(screen.sectionIndex + 1) + ' / ' + pad(SECTIONS.length);
      btnNext.hidden = true;
    } else if (screen.kind === 'question') {
      metaRight.textContent = t(sectionOf(screen.q).title) + ' · ' + t(UI.question) + ' ' + pad(screen.q.n);
    } else if (screen.kind === 'send') {
      metaRight.textContent = t(COPY.sendTitle);
      btnNext.hidden = true;
    } else if (screen.kind === 'closing') {
      metaRight.textContent = t(UI.complete);
      btnNext.hidden = true;
      btnSaveLater.hidden = true;
    }
  }

  function announce(screen) {
    var message = '';
    if (reviewMode) {
      message = t(UI.review) + '. ' + answeredCount() + ' ' + t(UI.of) + ' ' + QUESTIONS.length + ' ' + t(UI.answered) + '.';
    } else if (screen.kind === 'question') {
      message = t(sectionOf(screen.q).title) + '. ' + t(UI.question) + ' ' + screen.q.n + ' ' +
        t(UI.of) + ' ' + QUESTIONS.length + '.';
    } else if (screen.kind === 'interlude') {
      message = t(screen.next.title) + '.';
    } else if (screen.kind === 'opening') {
      message = t(ENGAGEMENT.title) + '.';
    } else if (screen.kind === 'letter') {
      message = t(UI.letter) + '.';
    } else if (screen.kind === 'send') {
      message = t(COPY.sendTitle) + '.';
    } else if (screen.kind === 'closing') {
      message = t(UI.complete) + '.';
    }
    announcer.textContent = message;
  }

  function render(options) {
    options = options || {};
    var screen = SCREENS[state.index];
    var html;

    if (reviewMode) {
      html = renderReview();
      body.classList.remove('tone-dark');
      body.classList.add('tone-light');
      showFilm(null);
    } else {
      switch (screen.kind) {
        case 'opening':   html = renderOpening(screen); break;
        case 'letter':    html = renderLetter(); break;
        case 'interlude': html = renderInterlude(screen); break;
        case 'question':  html = renderQuestion(screen); break;
        case 'send':      html = renderSend(); break;
        case 'closing':   html = renderClosing(screen); break;
        default:          html = renderOpening(screen);
      }
      body.classList.toggle('tone-dark', screen.tone === 'dark');
      body.classList.toggle('tone-light', screen.tone !== 'dark');
      showFilm(screen.film || null);
      preloadNextFilm(state.index);
    }

    stage.innerHTML = html;
    updateChrome(screen);
    announce(screen);

    if (!reviewMode && screen.kind === 'question') bindField(stage, screen.q);
    bindRemoteFallback(stage);

    if (!options.keepScroll) window.scrollTo(0, 0);
    if (!options.keepFocus) stage.focus({ preventScroll: true });
  }

  /* ------------------------------------------------------------------------
     15 · Navigation and language
     ---------------------------------------------------------------------- */

  function goTo(index, options) {
    reviewMode = false;
    state.index = Math.max(0, Math.min(SCREENS.length - 1, index));
    var justCompleted = false;
    if (state.index === CLOSING_INDEX && !state.completed) {
      state.completed = true;
      state.completedAt = new Date().toISOString();
      justCompleted = true;
    }
    save(true);
    render(options);
    /* Production seam: first arrival at closing posts buildExport() to /api/intake.
       Failure never clears answers; the closing screen offers retry. */
    if (justCompleted) submitIntake();
  }

  function next() {
    if (reviewMode) return;
    if (state.index < SCREENS.length - 1) goTo(state.index + 1);
  }

  function back() {
    if (reviewMode) { closeReview(); return; }
    if (state.index > 0) goTo(state.index - 1);
  }

  /* Going back to the opening is a reading move, not a reset. Her place is
     kept so the opening can offer it back, and nothing written is touched. */
  function toBeginning() {
    /* Reviewing counts as standing at the closing, since that is the only
       screen review is reached from. goTo leaves review on its own. */
    var from = reviewMode ? CLOSING_INDEX : state.index;
    if (from > 0) state.mark = from;
    goTo(0);
    toast(t(UI.kept));
  }

  function resume() {
    var target = state.mark;
    state.mark = 0;
    goTo(target > 0 ? target : 1);
  }

  function openReview() {
    reviewMode = true;
    render();
  }

  function closeReview() {
    reviewMode = false;
    state.index = CLOSING_INDEX;
    save(true);
    render();
  }

  function setLanguage(code) {
    if (code !== 'en' && code !== 'es') return;
    if (code === lang) return;
    lang = code;
    save(true);
    render({ keepScroll: true, keepFocus: true });
  }

  /* ------------------------------------------------------------------------
     16 · Export and print
     ---------------------------------------------------------------------- */

  function buildExport() {
    return {
      document: t(ENGAGEMENT.title),
      client: ENGAGEMENT.client,
      /* Phase 1 has no email field in the experience. Kept null so the API
         column stays stable when a later phase collects one. */
      clientEmail: null,
      preparedFor: ENGAGEMENT.studio,
      language: lang,
      preparedOn: new Date().toISOString(),
      started: state.started,
      completed: state.completed,
      answeredCount: answeredCount(),
      questionCount: QUESTIONS.length,
      experienceVersion: ENGAGEMENT.experienceVersion,
      intakeId: state.intakeId,
      sections: SECTIONS.map(function (section) {
        return {
          numeral: section.numeral,
          title: t(section.title),
          questions: QUESTIONS.filter(function (q) { return q.section === section.id; }).map(function (q) {
            return {
              number: q.n,
              question: t(q.prompt),
              answer: answerText(q),
              raw: state.answers[q.n] == null ? null : state.answers[q.n]
            };
          })
        };
      }),
      filesSelected: REQUESTS.map(function (r) {
        return { request: t(r.title), files: state.files[r.key] || [] };
      }),
      note: 'Files are listed by name only. File contents are not uploaded in this version.'
    };
  }

  function newIntakeId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }
    /* RFC4122-ish fallback for older browsers. */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0;
      var v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function ensureIntakeId() {
    if (typeof state.intakeId === 'string' && state.intakeId.length >= 32) return state.intakeId;
    state.intakeId = newIntakeId();
    save(true);
    return state.intakeId;
  }

  /* Posts the canonical buildExport() payload. Local-first: failures keep
     every answer, localStorage, export, and print. The same intakeId is reused
     on retry so a lost success response does not create a second studio row. */
  function submitIntake() {
    if (state.submissionStatus === 'ok' || state.submissionStatus === 'pending') return;

    ensureIntakeId();
    state.submissionStatus = 'pending';
    save(true);

    var payload = buildExport();

    fetch(ENGAGEMENT.submitUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (res) {
      return res.json().catch(function () { return null; }).then(function (body) {
        return { ok: res.ok, body: body };
      });
    }).then(function (result) {
      if (!result.ok || !result.body || result.body.ok !== true) {
        throw new Error((result.body && result.body.error) || 'submit failed');
      }
      state.submissionStatus = 'ok';
      state.submittedAt = new Date().toISOString();
      if (!state.completed) {
        state.completed = true;
        state.completedAt = state.submittedAt;
      }
      save(true);
      render({ keepScroll: true, keepFocus: true });
    }).catch(function () {
      state.submissionStatus = 'failed';
      save(true);
      toast(t(UI.submitFailed));
      render({ keepScroll: true, keepFocus: true });
    });
  }

  function exportJSON() {
    var data = JSON.stringify(buildExport(), null, 2);
    var stamp = new Date().toISOString().slice(0, 10);
    var filename = 'reading-the-practice-sharnay-' + lang + '-' + stamp + '.json';
    try {
      var blob = new Blob([data], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      toast(t(UI.exported) + ' ' + filename);
    } catch (e) {
      var w = window.open('', '_blank');
      if (w) {
        w.document.write('<pre>' + esc(data) + '</pre>');
        w.document.close();
        toast(t(UI.exportTab) + ' ' + filename);
      } else {
        toast(t(UI.exportBlock));
      }
    }
  }

  function buildPrintDoc() {
    var html = '';
    html += '<div class="p-masthead">' +
      '<h1 class="p-title">' + esc(t(ENGAGEMENT.title)) + '</h1>' +
      '<p class="p-client">' + clientMark() + '</p>' +
      '<div class="p-stamp">' +
        '<span>' + esc(t(UI.preparedFor) + ' ' + ENGAGEMENT.studio) + '</span>' +
        '<span>' + esc(formatDate(state.updated)) + '</span>' +
        '<span>' + answeredCount() + ' ' + esc(t(UI.of)) + ' ' + QUESTIONS.length + ' ' + esc(t(UI.answered)) + '</span>' +
      '</div>' +
    '</div>';

    SECTIONS.forEach(function (section) {
      html += '<section class="p-section">' +
        '<div class="p-section-head">' +
          '<span class="p-section-numeral">' + esc(t(UI.section)) + ' ' + esc(section.numeral) + '</span>' +
          '<h2 class="p-section-title">' + esc(t(section.title)) + '</h2>' +
        '</div>';
      QUESTIONS.filter(function (q) { return q.section === section.id; }).forEach(function (q) {
        var text = answerText(q);
        html += '<article class="p-entry">' +
          '<p class="p-n">' + esc(t(UI.question)) + ' ' + pad(q.n) + '</p>' +
          '<p class="p-q">' + esc(t(q.prompt)) + '</p>' +
          '<p class="p-a' + (text ? '' : ' p-a--empty') + '">' +
            (text ? esc(text) : esc(t(UI.notAnswered))) + '</p>' +
        '</article>';
      });
      html += '</section>';
    });

    if (REQUESTS.some(function (r) { return (state.files[r.key] || []).length > 0; })) {
      html += '<section class="p-section">' +
        '<div class="p-section-head">' +
          '<span class="p-section-numeral">' + esc(t(UI.enclosures)) + '</span>' +
          '<h2 class="p-section-title">' + esc(t(COPY.finalReflectionNext)) + '</h2>' +
        '</div>';
      REQUESTS.forEach(function (r, i) {
        var names = state.files[r.key] || [];
        html += '<article class="p-entry">' +
          '<p class="p-n">' + esc(t(UI.ordinalsM)[i]) + '</p>' +
          '<p class="p-q">' + esc(t(r.title)) + '</p>' +
          '<p class="p-a' + (names.length ? '' : ' p-a--empty') + '">' +
            (names.length ? esc(names.join('\n')) : esc(t(UI.nothingSel))) + '</p>' +
        '</article>';
      });
      html += '</section>';
    }

    html += '<div class="p-foot">' +
      '<span>' + esc(ENGAGEMENT.studio) + '</span>' +
      '<span>' + esc(ENGAGEMENT.client) + '</span>' +
      '<span>' + esc(t(UI.prepared) + ' ' + formatDate(state.updated)) + '</span>' +
    '</div>';

    printDoc.innerHTML = html;
    bindRemoteFallback(printDoc);
  }

  function printIntake() {
    buildPrintDoc();
    window.setTimeout(function () { window.print(); }, 60);
  }

  /* ------------------------------------------------------------------------
     17 · Events
     ---------------------------------------------------------------------- */

  stage.addEventListener('click', function (event) {
    var trigger = event.target.closest('[data-act]');
    if (trigger) {
      var act = trigger.getAttribute('data-act');
      if (act === 'next') { next(); return; }
      if (act === 'resume') { resume(); return; }
      if (act === 'review') { openReview(); return; }
      if (act === 'close-review') { closeReview(); return; }
      if (act === 'export') { exportJSON(); return; }
      if (act === 'print') { printIntake(); return; }
      if (act === 'retry-submit') { submitIntake(); return; }
      if (act === 'edit') { goTo(questionScreenIndex(Number(trigger.getAttribute('data-n')))); return; }
    }

    var why = event.target.closest('.why__toggle');
    if (why) {
      var panel = document.getElementById(why.getAttribute('aria-controls'));
      var open = why.getAttribute('aria-expanded') === 'true';
      why.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    }
  });

  stage.addEventListener('change', function (event) {
    var input = event.target;
    if (input.type !== 'file') return;
    var key = input.getAttribute('data-key');
    var names = Array.prototype.map.call(input.files || [], function (f) { return f.name; });
    state.files[key] = names;
    save(true);
    var list = stage.querySelector('[data-list="' + key + '"]');
    if (list) list.innerHTML = names.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('');
    announcer.textContent = names.length
      ? names.length + ' ' + t(names.length === 1 ? UI.filesPicked : UI.filesPickedPlural)
      : t(UI.noFiles);
  });

  langGroup.addEventListener('click', function (event) {
    var btn = event.target.closest('.lang__btn');
    if (btn) setLanguage(btn.getAttribute('data-lang'));
  });

  btnNext.addEventListener('click', next);
  btnBack.addEventListener('click', back);

  btnSaveLater.addEventListener('click', function () {
    save(true);
    toast(t(canStore ? UI.savedYes : UI.savedNo));
  });

  btnBeginning.addEventListener('click', toBeginning);

  document.addEventListener('keydown', function (event) {
    var el = document.activeElement;
    var tag = el ? el.tagName : '';
    var inField = tag === 'TEXTAREA' || tag === 'INPUT' || tag === 'SELECT';

    if (event.key === 'Escape') {
      var openToggle = stage.querySelector('.why__toggle[aria-expanded="true"]');
      if (openToggle) {
        openToggle.setAttribute('aria-expanded', 'false');
        document.getElementById(openToggle.getAttribute('aria-controls')).hidden = true;
        openToggle.focus();
        event.preventDefault();
      }
      return;
    }

    if (event.key === 'Enter') {
      if (reviewMode) return;
      if (SCREENS[state.index].kind === 'closing') return;

      if (!inField) {
        if (event.target === document.body || el === stage) { event.preventDefault(); next(); }
        return;
      }
      if (event.shiftKey) return;
      if (el.getAttribute('data-role') === 'single' || event.metaKey || event.ctrlKey) {
        event.preventDefault();
        next();
      }
      return;
    }

    if (inField || reviewMode) return;

    if (event.key === 'ArrowRight') { event.preventDefault(); next(); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); back(); }
  });

  window.addEventListener('beforeunload', function () { save(true); });

  /* ------------------------------------------------------------------------
     18 · Start
     ---------------------------------------------------------------------- */

  render();

  /* If she already finished in a prior session but the studio never received
     the row (upgrade, failed POST, offline), try once on load. */
  if (state.index === CLOSING_INDEX && state.completed &&
      state.submissionStatus !== 'ok' && state.submissionStatus !== 'pending') {
    submitIntake();
  }

})();
