"use strict";

/* ============================================================
   MiCasita · Efectos visuales
   Aparición de bloques al hacer scroll y cabecera al desplazarse.
   ============================================================ */

document.documentElement.classList.add("js");

// La cabecera se convierte en una píldora de cristal al bajar.
const cabecera = document.querySelector(".header");

if (cabecera) {
  function actualizarCabecera() {
    cabecera.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  window.addEventListener("scroll", actualizarCabecera, { passive: true });
  actualizarCabecera();
}

// Los bloques con data-reveal aparecen suavemente al entrar en pantalla.
const bloquesRevelados = document.querySelectorAll("[data-reveal]");

if (bloquesRevelados.length > 0) {
  if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("se-ha-revelado");
            observador.unobserve(entrada.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    bloquesRevelados.forEach(function (bloque) {
      observador.observe(bloque);
    });
  } else {
    bloquesRevelados.forEach(function (bloque) {
      bloque.classList.add("se-ha-revelado");
    });
  }
}

/* ============================================================
   MiCasita · Pétalos de fondo
   Crea una capa fija con formas suaves que caen lentamente.
   Es solo decoración: no hay nada que leer ni pulsar.
   ============================================================ */

const prefiereMenosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!prefiereMenosMovimiento.matches) {
  // Cada pétalo guarda su posición, tamaño, velocidad y tono.
  const datosPetalos = [
    { left: "3%", tam: "10px", caida: "19s", vaiven: "3.2s", retraso: "-22s", tono: "#f7d3db" },
    { left: "8%", tam: "12px", caida: "16s", vaiven: "4.1s", retraso: "-6s", tono: "var(--rosa)" },
    { left: "14%", tam: "9px", caida: "21s", vaiven: "5.4s", retraso: "-14s", tono: "var(--rosa)" },
    { left: "21%", tam: "13px", caida: "18s", vaiven: "3.6s", retraso: "-9s", tono: "#f6d9cf" },
    { left: "28%", tam: "10px", caida: "23s", vaiven: "4.8s", retraso: "-17s", tono: "#f7d3db" },
    { left: "35%", tam: "11px", caida: "17s", vaiven: "3.9s", retraso: "-3s", tono: "var(--rosa)" },
    { left: "42%", tam: "14px", caida: "22s", vaiven: "5.1s", retraso: "-12s", tono: "#f6d9cf" },
    { left: "49%", tam: "9px", caida: "20s", vaiven: "4.4s", retraso: "-20s", tono: "#f7d3db" },
    { left: "56%", tam: "12px", caida: "16s", vaiven: "3.3s", retraso: "-7s", tono: "var(--rosa)" },
    { left: "63%", tam: "10px", caida: "24s", vaiven: "5.6s", retraso: "-15s", tono: "#efd9b6" },
    { left: "70%", tam: "13px", caida: "19s", vaiven: "4.2s", retraso: "-1s", tono: "#f7d3db" },
    { left: "76%", tam: "9px", caida: "21s", vaiven: "3.7s", retraso: "-18s", tono: "var(--rosa)" },
    { left: "82%", tam: "11px", caida: "17s", vaiven: "4.9s", retraso: "-11s", tono: "#f6d9cf" },
    { left: "88%", tam: "12px", caida: "23s", vaiven: "3.5s", retraso: "-4s", tono: "#f7d3db" },
    { left: "93%", tam: "10px", caida: "18s", vaiven: "5.2s", retraso: "-13s", tono: "var(--rosa)" },
    { left: "97%", tam: "11px", caida: "22s", vaiven: "4.6s", retraso: "-8s", tono: "#efd9b6" }
  ];

  const capaPetalos = document.createElement("div");
  capaPetalos.className = "petalos";
  capaPetalos.setAttribute("aria-hidden", "true");

  datosPetalos.forEach(function (datos) {
    const petalo = document.createElement("span");
    petalo.className = "petalo";
    petalo.style.setProperty("--left", datos.left);
    petalo.style.setProperty("--tam", datos.tam);
    petalo.style.setProperty("--caida", datos.caida);
    petalo.style.setProperty("--vaiven", datos.vaiven);
    petalo.style.setProperty("--retraso", datos.retraso);
    petalo.style.setProperty("--tono", datos.tono);

    const hoja = document.createElement("i");
    petalo.appendChild(hoja);
    capaPetalos.appendChild(petalo);
  });

  document.body.appendChild(capaPetalos);
}

/* ============================================================
   MiCasita · Menú de móvil
   El botón de hamburguesa abre y cierra la navegación.
   ============================================================ */

const botonMenu = document.querySelector(".nav-toggle");
const menuNavegacion = document.querySelector(".nav");

if (botonMenu && menuNavegacion) {
  function cerrarMenu() {
    menuNavegacion.classList.remove("nav--abierto");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Abrir menú");
  }

  botonMenu.addEventListener("click", function () {
    const abierto = menuNavegacion.classList.toggle("nav--abierto");

    botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
    botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  });

  // Al tocar un enlace del menú, el panel se cierra solo.
  menuNavegacion.addEventListener("click", function (evento) {
    if (evento.target.closest("a")) {
      cerrarMenu();
    }
  });

  // La tecla Escape también lo cierra.
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
      cerrarMenu();
    }
  });
}

/* ============================================================
   MiCasita · Formulario de contacto
   Valida los campos y simula el envío. No se manda ningún correo.
   ============================================================ */

// Referencias a los elementos de la página.
const formulario = document.getElementById("contact-form");

if (formulario) {
  const mensajeExito = document.getElementById("form-success");
  const textoExito = document.getElementById("success-text");
  const botonEnviar = formulario.querySelector('button[type="submit"]');

  // Cada campo tiene su input, su mensaje de error y una regla de validación.
  const campos = [
  {
    input: document.getElementById("nombre"),
    mensaje: "Escribe tu nombre (mínimo 2 letras).",
    esValido: function (valor) {
      return valor.length >= 2;
    }
  },
  {
    input: document.getElementById("correo"),
    mensaje: "Escribe un correo electrónico válido.",
    esValido: function (valor) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    }
  },
  {
    input: document.getElementById("telefono"),
    mensaje: "Escribe un teléfono válido (entre 7 y 15 números).",
    esValido: function (valor) {
      // Quitamos espacios, paréntesis, puntos, guiones y el signo +.
      const soloNumeros = valor.replace(/[\s()+.-]/g, "");
      return /^\d{7,15}$/.test(soloNumeros);
    }
  },
  {
    input: document.getElementById("mensaje"),
    mensaje: "Cuéntanos un poco más (mínimo 10 caracteres).",
    esValido: function (valor) {
      return valor.length >= 10;
    }
  }
];

  // La casilla de la política se valida aparte porque no es un campo de texto.
  const casillaAcepto = document.getElementById("acepto");

  function validarAcepto() {
    if (!casillaAcepto) {
      return true;
    }

    const cajaError = document.getElementById("error-acepto");
    const correcto = casillaAcepto.checked;

    cajaError.textContent = correcto ? "" : "Marca la casilla para aceptar la política de datos.";
    casillaAcepto.setAttribute("aria-invalid", correcto ? "false" : "true");

    if (!correcto) {
      casillaAcepto.focus();
    }

    return correcto;
  }

/**
 * Muestra u oculta el error de un campo.
 * Si el texto está vacío, el error desaparece.
 */
function mostrarError(campo, texto) {
  const cajaError = document.getElementById("error-" + campo.input.id);

  cajaError.textContent = texto;
  campo.input.setAttribute("aria-invalid", texto ? "true" : "false");
}

/**
 * Valida un solo campo y devuelve true o false.
 */
function validarCampo(campo) {
  const valor = campo.input.value.trim();
  const correcto = campo.esValido(valor);

  mostrarError(campo, correcto ? "" : campo.mensaje);
  return correcto;
}

/**
 * Valida todos los campos.
 * Si hay errores, lleva el foco al primero y devuelve false.
 */
function validarFormulario() {
  let primerCampoIncorrecto = null;

  campos.forEach(function (campo) {
    const correcto = validarCampo(campo);

    if (!correcto && primerCampoIncorrecto === null) {
      primerCampoIncorrecto = campo.input;
    }
  });

  if (primerCampoIncorrecto !== null) {
    primerCampoIncorrecto.focus();
    return false;
  }

  return true;
}

// Mientras escribe, si un campo ya tenía error, lo volvemos a comprobar.
campos.forEach(function (campo) {
  campo.input.addEventListener("input", function () {
    if (campo.input.getAttribute("aria-invalid") === "true") {
      validarCampo(campo);
    }

    mensajeExito.hidden = true;
  });
});

// La casilla de la política se vuelve a comprobar al marcarla o desmarcarla.
if (casillaAcepto) {
  casillaAcepto.addEventListener("change", function () {
    if (casillaAcepto.getAttribute("aria-invalid") === "true") {
      validarAcepto();
    }

    mensajeExito.hidden = true;
  });
}

// Envío del formulario.
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  mensajeExito.hidden = true;

  if (!validarFormulario() || !validarAcepto()) {
    return;
  }

  const nombre = document.getElementById("nombre").value.trim();
  const contenidoBoton = botonEnviar.innerHTML;

  // Bloqueamos el botón mientras dura el envío simulado.
  botonEnviar.disabled = true;
  botonEnviar.textContent = "Enviando…";

  window.setTimeout(function () {
    textoExito.textContent =
      "¡Gracias, " + nombre + "! Hemos recibido tu mensaje y te responderemos muy pronto.";

    mensajeExito.hidden = false;
    mensajeExito.focus();
    formulario.reset();

    // Al vaciar el formulario también limpiamos los errores.
    campos.forEach(function (campo) {
      mostrarError(campo, "");
    });

    if (casillaAcepto) {
      document.getElementById("error-acepto").textContent = "";
      casillaAcepto.setAttribute("aria-invalid", "false");
    }

    botonEnviar.disabled = false;
    botonEnviar.innerHTML = contenidoBoton;
  }, 900);
});
}

/* ============================================================
   MiCasita · Carrusel de reseñas
   Los botones mueven la fila. En móvil también se puede deslizar.
   ============================================================ */

const carrusel = document.querySelector(".carousel__track");
const botonAnterior = document.querySelector(".carousel__button--prev");
const botonSiguiente = document.querySelector(".carousel__button--next");

if (carrusel && botonAnterior && botonSiguiente) {
  const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Calcula el ancho de una tarjeta y desplaza el carrusel.
  function moverCarrusel(direccion) {
    const primeraTarjeta = carrusel.querySelector(".review");
    if (!primeraTarjeta) {
      return;
    }

    const estilos = getComputedStyle(carrusel);
    const separacion = parseFloat(estilos.columnGap || estilos.gap) || 0;
    const paso = primeraTarjeta.getBoundingClientRect().width + separacion;

    carrusel.scrollBy({
      left: direccion * paso,
      behavior: reducirMovimiento ? "auto" : "smooth"
    });
  }

  // Desactiva los botones cuando ya no se puede seguir avanzando.
  function actualizarBotones() {
    const margen = 2;
    const alInicio = carrusel.scrollLeft <= margen;
    const alFinal =
      carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth - margen;

    botonAnterior.disabled = alInicio;
    botonSiguiente.disabled = alFinal;
  }

  botonAnterior.addEventListener("click", function () {
    moverCarrusel(-1);
  });

  botonSiguiente.addEventListener("click", function () {
    moverCarrusel(1);
  });

  carrusel.addEventListener("scroll", actualizarBotones, { passive: true });
  window.addEventListener("resize", actualizarBotones);

  // También se puede mover con las flechas del teclado.
  carrusel.addEventListener("keydown", function (evento) {
    if (evento.key === "ArrowLeft") {
      evento.preventDefault();
      moverCarrusel(-1);
    }

    if (evento.key === "ArrowRight") {
      evento.preventDefault();
      moverCarrusel(1);
    }
  });

  actualizarBotones();
}
