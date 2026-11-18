# MEMORY.md — MiCasita
Memoria del proyecto entre sesiones. Máximo ~50 líneas: resume o elimina lo que ya no aporte.

## Estado actual
- Web estática de guardería canina campestre (sin backend ni dependencias): index + 7 páginas de servicio.
- Nueve secciones en index: navbar, hero, quiénes somos, servicios, beneficios, cómo funciona, reseñas, contacto y footer.
- Paleta papel/tinta/bermellón, fondos difusos, pétalos, cabecera píldora y menú hamburguesa ≤ 820 px.
- Titular "Todo un hogar para tu mejor amigo, en pleno campo." y bajada "Juego, calma y mucha compañía. Un espacio seguro para correr, socializar y descansar al sol, con rutinas adaptadas a cada perro."; ubicación en La Buitrera de Palmira (Valle del Cauca). El h1 conserva el tamaño grande de `clamp(2.9rem, 6vw, 4.6rem)`: el usuario prefiere 4 líneas grandes a 3 más pequeñas.
- Formulario con validación y envío simulado; carrusel de 6 reseñas.

## Decisiones (y por qué)
- Sin dependencias: debe funcionar abriendo index.html por file://.
- Solo fuentes del sistema (Georgia + Avenir Next); nada de Google Fonts.
- Paleta en `:root` con alias antiguos (`--crema`, `--miel`…) para no tocar los HTML.
- Fondos difusos en `body::after` fijo con `z-index:-1`; `html` pinta `--papel`.
- Color organizado: una sola mancha cálida arriba a la derecha; servicios y contacto sin bandas de color (fondo uniforme). Bermellón solo en acentos, etiquetas y CTA; oliva en checks; oro en estrellas.
- Subrayado del acento con `text-decoration` para que siga al texto al partirse.
- Menú móvil sin librerías; pétalos creados desde app.js.
- Datos de contacto de Colombia en las 8 páginas; precios en COP.
- Menú (con Reseñas) y pie (con Síguenos y WhatsApp) idénticos en todas las páginas: mismo párrafo de marca ("Plazas fijas y transporte", sin mencionar pasadías) y solo la dirección "La Buitrera de Palmira, km 7" (sin Finca San Francisco).
- Guardería = plaza recurrente, misma rutina y aviso diario; las fotos se publican en redes sociales, no se envían al cliente. Pasadía = todos los miércoles, día completo con transporte incluido (recogida y regreso) y fotos/videos al final del día. No volver a igualarlos.
- Día de prueba gratuito y sin transporte: lo lleva el cliente. Evitar la palabra "probar" en Pasadía para no confundirlo con la prueba gratuita.
- Pasadía: el cartel de referencia manda (miércoles, transporte incluido). Los 4 beneficios (espacios verdes, rutinas adaptadas, juegos y cariño, fotos y videos) van en la portada, tras Servicios, en rejilla de líneas finas al estilo Features de gettomari.com, con el título centrado y sin texto debajo.
- Sección Servicios: el título va centrado (`section__head--center`) desde esta petición.
- Transporte: cobertura La Buitrera/Palmira, $40.000 por trayecto, $80.000 ida y vuelta, aviso por WhatsApp.
- Hero con CTA "Contacta con nosotros"; en el bloque de confianza va la ubicación con chincheta ("La Buitrera de Palmira / Valle del Cauca"). La valoración de Google se quitó del hero. WhatsApp en contacto y pie.
- Tarjetas de servicio (Propuesta A, aprobada): 3 columnas, tarjeta entera clicable con `::after` del enlace (sin botón dentro), etiqueta fina sin cápsula, descripción de una línea, "Ver detalle" + flecha abajo, sombra suave y hover con zoom. Servicios lleva una frase introductoria centrada (máx. 560 px, `text-wrap: balance`).
- Imágenes optimizadas (guardería y transporte a 1200 px, favicon 512 px); pie a 5 columnas.
- Descartada la sección de FAQ: las dudas operativas van en "Cómo funciona" y en cada ficha.
- `politica-de-datos.html` (Ley 1581 de 2012) se enlaza solo desde la casilla del formulario; sin marcarla no se envía. El pie ya no la enlaza (petición del usuario).
- "Cómo funciona" es puramente operativa (pasos, tiempos, prueba gratis, transporte) para no repetir el tono de confianza de "Quiénes somos".
- Lenguaje unificado: siempre "perro" (nunca "perrito" ni "peludo"); los plazos, siempre "24 horas hábiles"; descripciones de tarjeta de una sola línea.

## Aprendizajes y errores a evitar
- Viewport móvil real: `emulate({ viewport: "390x844x2,mobile,touch" })`; `resize_page` no baja de ~500 px.
- Las capturas inmediatas salen a mitad de las animaciones; repetir. Las de página completa muestran vacías las imágenes `lazy` (artefacto).
- El `IntersectionObserver` solo revela lo visible; con scroll restaurado los bloques de arriba siguen ocultos.
- `sips` solo reduce peso en imágenes pesadas; en otras puede subirlo (`pasoapaso.jpg`). Comparar antes de sustituir.
- `text-decoration` no se pinta bien en `inline-flex`: usar `inline-block` y grosor en px.
- El carrusel usa scroll nativo; `.carousel` lleva `overflow-x: clip`.

## Próximos pasos
- Revisar si Pasadía ($80.000) debe costar menos que Guardería ($120.000).
- `imagenes/captura-3.png` (2,6 MB) no se usa; falta permiso para eliminarla.
- Pendiente: envío real del formulario y Open Graph + `LocalBusiness`.
- Revisar la política con asesor legal antes de publicarla; no incluye NIT ni razón social porque no los tenemos.
