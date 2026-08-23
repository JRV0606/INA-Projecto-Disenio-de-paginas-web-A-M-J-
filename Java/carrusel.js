/*
    ===========================================================
    carrusel.js
    ===========================================================
    Carrusel propio (sin Bootstrap) para las secciones
    "Productos Principales" y "Productos Destacados" del Index.

    A diferencia del carrusel de Bootstrap, este SIEMPRE muestra
    varias imagenes a la vez (3 en pantallas grandes, 1 en
    celular, segun el CSS), pero la transicion mueve la fila
    de a UNA imagen, no el grupo completo.

    Truco para que el ciclo se vea infinito:
    1. Se duplican las imagenes originales y se pegan otra vez
       al final de la fila (asi la fila tiene el doble de
       imagenes, pero se ven repetidas).
    2. Cuando el carrusel llega a la copia (osea, dio una vuelta
       completa), se hace un salto INSTANTANEO (sin transicion)
       de vuelta al inicio. Como la copia es identica al inicio,
       el ojo no nota el salto.
    ===========================================================
*/

function iniciarCarrusel(idVisor) {
  const visor = document.getElementById(idVisor);
  if (!visor) {
    return;
  }

  const pista = visor.querySelector(".carrusel-pista");
  const botonPrev = visor.querySelector(".carrusel-prev");
  const botonNext = visor.querySelector(".carrusel-next");

  /* Imagenes originales (antes de duplicar nada) */
  const imagenesOriginales = Array.from(pista.children);
  const totalOriginal = imagenesOriginales.length;

  /* Duplicamos las imagenes originales y las agregamos al   */
  /* final, para poder hacer el "salto" invisible al llegar  */
  /* a la vuelta completa                                    */
  imagenesOriginales.forEach((img) => {
    pista.appendChild(img.cloneNode(true));
  });

  let indice = 0;
  const intervaloMs = Number(visor.dataset.intervalo) || 4000;
  let temporizador = null;

  function moverA(nuevoIndice, animado) {
    const anchoImagen = pista.children[0].getBoundingClientRect().width;

    if (!animado) {
      pista.style.transition = "none";
    } else {
      pista.style.transition = "";
    }

    pista.style.transform = `translateX(${-nuevoIndice * anchoImagen}px)`;

    if (!animado) {
      /* Forzamos "reflow" para que el navegador aplique el */
      /* salto sin transicion antes de volver a habilitarla */
      void pista.offsetHeight;
      pista.style.transition = "";
    }
  }

  function siguiente() {
    indice++;
    moverA(indice, true);

    /* Si llegamos a la copia (dimos una vuelta completa), */
    /* despues de que termine la animacion saltamos al     */
    /* inicio real sin transicion                          */
    if (indice === totalOriginal) {
      setTimeout(() => {
        indice = 0;
        moverA(indice, false);
      }, 650);
    }
  }

  function anterior() {
    if (indice === 0) {
      /* Saltamos sin transicion hasta la copia del final */
      /* (que se ve igual a la ultima imagen original) y  */
      /* de ahi retrocedemos animado                      */
      indice = totalOriginal;
      moverA(indice, false);
      void pista.offsetHeight;
    }

    indice--;
    moverA(indice, true);
  }

  function reiniciarAutoplay() {
    if (temporizador) {
      clearInterval(temporizador);
    }
    temporizador = setInterval(siguiente, intervaloMs);
  }

  if (botonNext) {
    botonNext.addEventListener("click", () => {
      siguiente();
      reiniciarAutoplay();
    });
  }

  if (botonPrev) {
    botonPrev.addEventListener("click", () => {
      anterior();
      reiniciarAutoplay();
    });
  }

  /* Si la ventana cambia de tamano (por ejemplo, gira el     */
  /* celular), recalculamos la posicion para que no quede     */
  /* descuadrada                                               */
  window.addEventListener("resize", () => {
    moverA(indice, false);
  });

  reiniciarAutoplay();
}

document.addEventListener("DOMContentLoaded", () => {
  iniciarCarrusel("carruselPrincipales");
  iniciarCarrusel("carruselDestacados");
});
