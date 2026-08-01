# El Retrato

**Informe del sistema · Sharnay Photography × LG Studio**
Estado: cuestionario cerrado · documentos sincronizados

---

## 1 · Qué es esto

Antes de diseñar la identidad de un estudio de fotografía, hay una conversación. Normalmente ocurre por llamada, se toma nota a medias y se pierde casi todo.

**El Retrato es esa conversación, construida.** Erika la recorre sola, en su tiempo, en su teléfono o en su escritorio. Veinticinco preguntas repartidas en seis capítulos, con fotografías suyas entre medias y la voz de Luis apareciendo de tanto en tanto para acusar recibo.

No es un formulario. Un formulario recoge datos. Esto recoge **cómo ve ella su propio trabajo**, y se lo devuelve mientras responde.

### Lo que lo distingue

Tres cosas, y las tres son decisiones, no funcionalidades.

**Le devuelve sus palabras.** A lo largo del recorrido, frases que ella escribió reaparecen compuestas como material editorial. Se llama El Retrato y ocurre en tres etapas: Archive devuelve una frase recién escrita, Collection acumula varias, Exhibition sostiene una sola. Nunca se interpreta lo que dijo, nunca se corrige, nunca se traduce. Se compone y se devuelve.

**No se desplaza.** Cada pantalla cabe entera. Una pantalla es una vista, no una página. La única excepción es la revisión final, donde recorrer lo que escribió es la tarea misma.

**Pregunta por lo que pasó, no por lo que pretende.** Ninguna de las veinticinco pide una autodefinición. Piden un recuerdo: qué le dijeron al terminar una sesión, cómo la presentaron al recomendarla, qué se lleva una clienta. Un recuerdo no se puede fingir con vocabulario prestado.

---

## 2 · Los cuatro documentos

| archivo | qué es | quién manda aquí |
|---|---|---|
| `index.html` | El producto. Autocontenido, sin build. | — |
| `Sharnay_Photography_Visual_Language_System_ES-EN.html` | Sistema de lenguaje visual de la marca | **apariencia** |
| `el-retrato-system-specification.html` | Especificación del producto | **comportamiento** |
| `el-retrato-runtime-patches.md` | Registro de por qué existe cada parche | memoria |

### La frontera, que es lo importante

Esta es la arquitectura del conjunto y evita que los documentos se contradigan.

**El VLS gobierna la apariencia.** La marca y su construcción, la paleta, las cuatro voces tipográficas, los recursos fotográficos, el velo, la impresión, el feed.

**La especificación gobierna el comportamiento.** La secuencia, los estados, la orientación, y la custodia de lo que una persona escribe.

Y la regla que resuelve cualquier duda futura:

> Si un cambio en la especificación alteraría cómo se ve la marca en otro sitio, está en el archivo equivocado.

La especificación **cita** al VLS en lugar de repetir sus reglas, porque una regla repetida es una regla que se va a desactualizar. Ya pasó una vez: la spec describía el chrome como "marca más el nombre compuesto aparte", y eso llevaba meses siendo falso.

---

## 3 · Cómo funciona el producto

### El recorrido

```
portada  →  carta  →  [ capítulo  →  preguntas  →  pausa ]  ×6  →  envío  →  cierre
```

Entre el último bloque de preguntas de un capítulo y el siguiente ocurre la secuencia más cuidada del producto:

```
pausa            una frase de Luis, sola sobre la fotografía
umbral           negro; el título del capítulo aparece en su sitio definitivo
capítulo         la fotografía crece detrás; el título no se mueve
```

Lo que permanece fijo une los dos planos. Por eso el título del umbral y el del capítulo tienen que ser **el mismo texto, el mismo corte de línea y el mismo lado**. Si difieren, el ojo lee dos pantallas en vez de una revelación.

### El Retrato

Tres etapas, con reglas de selección distintas **a propósito**:

| etapa | selecciona | por qué |
|---|---|---|
| Archive | el fragmento más reciente | su trabajo es la devolución inmediata |
| Collection | orden ascendente de escritura | su trabajo es la acumulación y la relación |
| Exhibition | el número más bajo de su sección | necesita elegir uno sin que parezca un juicio |

No se homogeneizan. Cada regla es la forma del trabajo emocional de esa etapa.

**La custodia.** Un fragmento se retiene si viene de un campo de texto, no está vacío y cabe en 180 caracteres. Nada se evalúa por calidad ni por relevancia. Un fragmento retenido se devuelve **sin cambios**. Si no cabe en su composición, el tipo cede hasta 17px y la medida hasta 20ch; si aun así no entra, **se retira entero**. Nunca se recorta, se trunca ni se elide texto de la participante.

**El idioma.** El interruptor cambia la interfaz y todo lo que escribió el estudio. **Nunca toca un fragmento de la participante.** Es la única violación de la que este sistema no se recupera.

### Sin desplazamiento

`fitScreen()` mide y escribe un solo número, `--fit`. Cuando todo cabe vale 1 y no se reduce nada. Solo cuando no cabe, la pantalla cede por bisección.

Dos trampas documentadas, porque ya cayeron una vez:

Las barras usan `min-height`, así que su altura real puede superar el token. Reservar el token deja el panel por debajo de la barra inferior.

Y hay que **medir el contenido, no la caja**: el panel lleva `height: 100%` y su caja reporta lo mismo a cualquier escala, así que la búsqueda nunca converge. Ese error dejó las 25 preguntas al 48% de tamaño.

---

## 4 · Estado verificado

| | |
|---|---|
| preguntas | 25, sin huecos ni duplicados |
| pantallas recorridas sin error | 52 |
| escritorio 1440×900 | nada recortado, cero scroll, `fit = 1` en las 25 |
| iPhone y Android bajo | cero scroll |
| paridad bilingüe del VLS | 452 / 452 |
| secciones de la especificación | 17, numeradas 00–16 |

### Lo que sigue abierto

**Cinco pantallas ceden escala en teléfono:** la 7, la 11, la 14, la 16 y la 20. Todas llevan opciones múltiples o pares. No es un fallo de medición: **tienen más contenido del que cabe en un teléfono**. La salida es editorial, no tipográfica: partirlas en dos o aceptar que algún bloque es opcional.

**El residuo vertical de la revelación**, entre 10 y 20px. Viene del interlineado. Para llevarlo a cero, el umbral tendría que saber cuántas líneas tendrá el título antes de componerlo.

**Las hojas de módulo.** Cuatro pantallas dependen al 100% de CSS externo y fallan en silencio si no sube. Hay un respaldo mínimo dentro del archivo para que se vean sobrias en vez de rotas, pero **el arreglo es desplegar los archivos**.

**Los tres maestros de lockup** viven incrustados en el VLS pero no como archivos del repositorio. Mientras cada proyecto tenga su copia, volverán a divergir.

---

## 5 · Qué debe hacer Cursor

### Antes de tocar nada

`index.html` es **autocontenido y sin build**. No hay bundler, no hay `npm install`, no hay paso de compilación. Se abre en un navegador y funciona. **No lo conviertas en un proyecto.**

Tres cosas que rompen el archivo en silencio:

1. **Reformatear.** Prettier o similar sobre este archivo destruye la alineación del CSS crítico y la legibilidad de las plantillas de cadena. No lo formatees.
2. **Cambiar los finales de línea.** El archivo es CRLF de principio a fin. Un editor que guarde LF genera un diff de 40.000 líneas.
3. **Tocar los assets.** Hay imágenes en base64 embebidas. No las extraigas ni las optimices sin decirlo.

### El orden de las hojas de estilo importa

Los `<style>` internos van **antes** de los `<link>` de módulo a propósito, para que una hoja real siempre gane. Y varios bloques tardíos dependen de ir después de otros para resolver la cascada por orden. Mover un bloque cambia el resultado.

### Qué se puede tocar sin permiso

Copy de preguntas: `prompt`, `sub`, `body`, `why`, `micro`.

### Qué no se toca sin decisión explícita

| | por qué |
|---|---|
| `portraitEligible`, `portraitStages`, `portraitRole` | deciden qué vuelve a ella en el retrato |
| `options` de las preguntas de elección | están redactadas en relación a su enunciado |
| el orden del array `QUESTIONS` | es el orden de pantalla, y no coincide con la numeración |
| `room`, `title` y `titleLines` de una sección | los tres tienen que decir lo mismo |
| `portraitMaxChars` | mueve §8.2, §9.8, §16.8 y la elegibilidad a la vez |
| el bloque de cierre marcado con freeze | tiene una fecha y una razón |

### Ojo con la numeración

El orden del array **no** es el orden numérico. La 24 va entre la 12 y la 13; la 25 va antes de la 21. "La siguiente pregunta" no es "n+1". Localiza siempre por `n:`, nunca por posición.

### Antes de dar por buena cualquier tarea

```
1440×900, 1366×768, 390×844, 360×640
```

En los cuatro: recorrer todas las pantallas y confirmar que **el documento no se desplaza** salvo en la revisión; que **nada queda por encima de la barra superior ni por debajo de la inferior**; y que **la mayoría de pantallas reportan `--fit` de 1**.

Ese último es el que detecta el error de medición: si todo sale reducido, lo roto es la medición, no el contenido.

Y las dos comprobaciones de custodia:

Cambiar de idioma en una etapa del retrato y confirmar que **el fragmento no cambia en absoluto**.

Forzar un fragmento que no quepa y confirmar que **se retira entero**, nunca recortado.

### Si hay que tocar la marca

No se decide en este repositorio. La autoridad es el VLS: §01·07 las tres formas, §01·10 la construcción, §01·11 el aire, los suelos y qué forma va dónde, §07·02 el velo, §07·01 las voces tipográficas.

Regla práctica: el chrome es una barra fija de menos de 100px, así que le corresponde el **logomark**, nunca un lockup. Y nunca la marca junto a palabras compuestas aparte: eso es un lockup reconstruido desde sus piezas y está prohibido.

---

## 6 · Lo que hay que entender para trabajar aquí

El sistema tiene una obsesión y conviene nombrarla, porque explica decisiones que de otro modo parecen excesivas.

**Nada que ella escriba se pierde, se recorta ni se altera.**

De ahí sale que el texto ceda tamaño antes que la caja. Que un fragmento se retire entero antes que mostrarse a medias. Que el interruptor de idioma no toque sus palabras. Que la carta de cierre no aparezca hasta que el servidor confirme que se guardó, porque una carta que dice "ya tenemos lo que necesitamos" sobre un envío fallido es una mentira.

Todo lo demás del producto se puede discutir. Eso no.
