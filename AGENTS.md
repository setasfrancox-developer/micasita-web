## AGENTS.md — MiCasita
Web estática para una guardería canina campestre. Su objetivo es presentar el negocio, mostrar sus servicios y permitir que los clientes contacten mediante un formulario. El código debe ser fácil de entender para alguien que está empezando a programar.
## Stack y estructura
- HTML, CSS y JavaScript puros.
- Sin frameworks, librerías, dependencias, npm ni herramientas de compilación.
- index.html: estructura de la página y sus ocho secciones.
- styles.css: estilos, colores y diseño responsive.
- app.js: lógica del formulario y del carrusel de reseñas.
- servicio-*.html: páginas de detalle de cada servicio (spec 001) y `servicio-no-encontrado.html`. Comparten cabecera, pie, `styles.css` y `app.js`.
- imagenes/: imágenes utilizadas en la web.
- La cabecera y el pie usan `imagenes/logo-circular.png` (el logo completo dentro de un círculo, con su amarillo original) junto al texto "MiCasita". El favicon usa `imagenes/logo.jpeg`.
- Debe funcionar abriendo index.html con doble clic (file://). No utilizar módulos ES, fetch ni nada que necesite un servidor.
- El proyecto está en micasita-web/. No confundirlo con ../micasita/ (proyecto PHP/MySQL antiguo) ni con ../mi-casitacanina-campestre-backup/ (backend Node de respaldo).
## Comandos
- Abrir la web: open index.html.
- Comprobar sintaxis JavaScript: node --check app.js.
- No hay tests, lint ni compilación.
## Convenciones
- Todos los textos de la interfaz deben estar en español.
- Utilizar nombres descriptivos y código sencillo.
- Mantener HTML, CSS y JavaScript separados.
- Evitar código innecesariamente complicado.
- Mantener la paleta de colores naturales definida en :root.
- Mantener el diseño responsive.
- Seguir los patrones de código existentes en los tres archivos principales.
- Utilizar comentarios solo cuando sean necesarios.
## Reglas de dominio / trampas conocidas
- La web tiene ocho secciones: navbar, hero, quiénes somos, servicios, cómo funciona, reseñas, contacto y footer.
- Las funcionalidades interactivas son el formulario de contacto y el carrusel de reseñas.
- El formulario no envía correos reales. El envío es simulado.
- Los campos son nombre, correo electrónico, teléfono y mensaje.
- El nombre debe tener al menos 2 caracteres.
- El correo debe tener un formato válido.
- El teléfono debe tener entre 7 y 15 dígitos después de eliminar espacios y símbolos permitidos.
- El mensaje debe tener al menos 10 caracteres.
- Los errores y mensajes de confirmación se muestran en el propio formulario.
- Si cambias los identificadores de los campos, debes actualizar también las referencias correspondientes en app.js.
- Los datos de contacto, horarios y reseñas son ejemplos. No presentarlos como información real.
- Las imágenes utilizan rutas relativas desde la carpeta imagenes/. No moverlas sin actualizar sus referencias.
- El formulario no guarda datos ni utiliza localStorage.
- El header es fijo únicamente en escritorio. En pantallas de hasta 820 px es estático.
- No añadir un menú móvil con JavaScript sin autorización.

## Carrusel de reseñas
- Hay 6 reseñas. Se ven 3 en escritorio, 2 en tablet y 1 en móvil.
- Usa scroll nativo con `scroll-snap`; los botones solo llaman a `scrollBy`.
- Clases e IDs: `.carousel`, `.carousel__track` (`#reviews-track`), `.carousel__button--prev` y `.carousel__button--next`.
- Los botones se desactivan al inicio y al final. También se puede deslizar con el dedo y usar las flechas del teclado.
- No añadir autoplay, bucle infinito, puntos indicadores ni librerías sin autorización.
- Si se añaden o quitan reseñas, no hace falta tocar `app.js`.

## Forma de trabajar
- Antes de modificar código, revisa los archivos relacionados.
- Si el cambio afecta a varias partes, explica brevemente el plan antes de realizarlo.
- Realiza cambios pequeños y enfocados.
- No reescribas código que ya funciona sin necesidad.
- No añadas funcionalidades por iniciativa propia.
- Al terminar, explica qué has cambiado y cómo comprobarlo.
- Indica cualquier decisión que deba revisar.

## Memoria
- Al empezar, lee `MEMORY.md` para conocer el estado del proyecto y las decisiones
tomadas.
- Al terminar una tarea, actualízalo: estado actual, decisiones importantes (con su
porqué) y errores a evitar.
- Mantenlo breve (máximo ~50 líneas): resume o elimina lo que ya no aporte.
- Si algo se convierte en una regla permanente, propón moverlo a `AGENTS.md` en lugar de
dejarlo en la memoria.
- No guardes nunca datos sensibles (claves, tokens, datos personales).

## Reglas
- Lee `docs/constitution.md` y la spec activa (`specs/NNN-*`) antes de tocar código.

## Límites
- ✅ Siempre:
- Mantener la estructura de la web.
- Respetar el diseño y los colores existentes.
- Mantener los textos en español.
- Comprobar que el formulario funciona.
- Mantener la compatibilidad con file://.
- Actualizar `MEMORY.md` al terminar cada tarea.
- ⚠ Pregunta antes:
- Añadir archivos nuevos.
- Instalar dependencias o librerías.
- Cambiar la estructura del proyecto.
- Incorporar nuevas funcionalidades.
- Modificar el diseño general de la web.
- 🚫 Nunca:
- Añadir frameworks o backend.
- Añadir reservas, usuarios o bases de datos.
- Implementar almacenamiento de datos.
- Eliminar imágenes o archivos existentes sin permiso.
- Modificar los otros proyectos que están fuera de micasita-web/.
## Verificación antes de terminar cualquier modificación:

No hay tests automáticos. Después de cada cambio, utilizar el MCP de Chrome DevTools para comprobar el funcionamiento de la web.

1. Ejecutar node --check app.js.
2. Abrir index.html en el navegador.
3. Comprobar que los enlaces de navegación funcionan.
4. Comprobar que las imágenes se muestran correctamente.
5. Probar el formulario vacío.
6. Probar el formulario con datos incorrectos.
7. Probar un envío válido.
8. Revisar la web en resoluciones de 1440, 768 y 390 píxeles.
9. Comprobar que no hay errores en la consola ni desplazamiento horizontal.
10. Probar el carrusel: botones, extremos, deslizamiento táctil y flechas del teclado.