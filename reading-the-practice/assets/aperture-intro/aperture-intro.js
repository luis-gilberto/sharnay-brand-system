/* ============================================================
   EL RETRATO · APERTURA
   destello → iris → oro → disparo de flash → la página expuesta
   Sin dependencias. API: window.__intro.run() / .finish()
   ============================================================ */
(function () {
  var intro = document.getElementById("__intro");
  if (!intro) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var body = document.body;
  var timers = [];
  var vuelo = null;

  body.classList.add("intro-lock");

  function at(ms, fn) { timers.push(setTimeout(fn, ms)); }
  function step(n) { intro.classList.add("intro--" + n); }

  function limpiar() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  /* --------- el disparo: el flash expone la página --------- */
  function entregar() {
    if (intro.classList.contains("intro--entrega")) return;

    step("entrega");

    /* la página se compone bajo la luz; el H1 se expone en el pico del flash */
    body.classList.remove("intro-lock");
    body.classList.add("intro-complete");
    at(reduced ? 0 : 210, function () { body.classList.add("intro-aterrizado"); });

    at(reduced ? 200 : 1150, finish);
  }


  function finish() {
    limpiar();
    body.classList.remove("intro-lock");
    body.classList.add("intro-complete", "intro-aterrizado");
    intro.classList.add("intro--done");
    setTimeout(function () {
      if (vuelo) { vuelo.remove(); vuelo = null; }
      if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
      body.classList.remove("intro-complete", "intro-aterrizado", "intro-lock");
    }, 1600);
  }

  function run() {
    limpiar();
    ["play","reveal","open","gold","entrega","done"].forEach(function (n) {
      intro.classList.remove("intro--" + n);
    });
    body.classList.remove("intro-complete", "intro-aterrizado");
    body.classList.add("intro-lock");
    if (vuelo) { vuelo.remove(); vuelo = null; }
    intro.style.display = "none"; void intro.offsetWidth; intro.style.display = "";

    requestAnimationFrame(function () {
      step("play");                                /* 0.0s  el destello */
      at(480,  function () { step("reveal"); });   /* el lente se resuelve */
      at(900,  function () { step("open"); });     /* apertura lenta, 3.2s */
      at(3400, function () { step("gold"); });     /* el metal se vuelve oro y la luz se calienta antes del disparo */
      at(4700, entregar);                          /* se dispara el flash y la página queda expuesta */
    });
  }

  var saltar = document.getElementById("intro-saltar");
  if (saltar) saltar.addEventListener("click", function () { limpiar(); entregar(); });

  window.__intro = { el: intro, run: run, finish: finish };

  /* Mid-session resume or reduced motion: no aperture, keep the cover as-is. */
  if (reduced || !body.classList.contains("is-title")) {
    limpiar();
    body.classList.remove("intro-lock", "intro-complete", "intro-aterrizado");
    if (intro.parentNode) intro.parentNode.removeChild(intro);
    return;
  }
  run();
})();
