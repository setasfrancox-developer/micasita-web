# Spec 001 — Páginas de detalle de servicios

## Contexto y objetivo
Los visitantes pueden consultar los servicios de MiCasita en la sección Servicios de index.html, pero necesitan más información antes de decidirse. Esta funcionalidad permite acceder a una página independiente para cada servicio, con características, qué incluye, precio y fotografías relacionadas.

## Usuarios / actores
- Visitantes: consultan los servicios y quieren conocerlos con más detalle.
- MiCasita: proporciona la información, fotografías y precios de cada servicio.

## Historias de usuario
- H1: Como visitante, quiero seleccionar un servicio para consultar toda su información.
- H2: Como visitante, quiero ver fotografías y conocer qué incluye cada servicio para decidir si me interesa.
- H3: Como visitante, quiero consultar el precio de cada servicio para conocer su coste.
- H4: Como visitante, quiero volver fácilmente a la sección de servicios para consultar otras opciones.
- H5: Como visitante, quiero contactar con MiCasita desde la página de un servicio para solicitar más información.

## Requisitos funcionales (EARS)
- RF-1: CUANDO el visitante seleccione un servicio, EL SISTEMA abrirá su página de detalle correspondiente.
- RF-2: CUANDO el visitante acceda a una página de detalle, EL SISTEMA mostrará el nombre del servicio, una fotografía representativa, una descripción, lo que incluye y su precio.
- RF-3: EL SISTEMA mantendrá la misma estructura y diseño en todas las páginas de detalle, cambiando únicamente la información y las fotografías correspondientes a cada servicio.
- RF-4: CUANDO el visitante seleccione el botón «Volver a servicios», EL SISTEMA lo llevará a la sección de servicios.
- RF-5: CUANDO el visitante seleccione el enlace «Servicios» de la parte superior, EL SISTEMA lo llevará a la sección de servicios.
- RF-6: EL SISTEMA ofrecerá una página de detalle para cada uno de los servicios que aparecen actualmente en MiCasita.
- RF-7: CUANDO el visitante seleccione el botón de contacto, EL SISTEMA le permitirá acceder al medio de contacto de MiCasita para solicitar información sobre el servicio.
- RF-8: SI el visitante accede a una página de un servicio que no existe, ENTONCES EL SISTEMA mostrará una respuesta adecuada y permitirá regresar a la sección de servicios.

## Requisitos no funcionales
- Las páginas mantendrán la identidad visual de MiCasita.
- El diseño se adaptará a ordenadores, tabletas y móviles.
- Los textos estarán en español y serán fáciles de entender.
- Las fotografías tendrán calidad adecuada y representarán el servicio correspondiente.
- La navegación entre servicios y sus páginas de detalle será sencilla.

## Casos límite
- Un servicio podría no tener una fotografía disponible.
- Un servicio podría no tener toda su información o precio definido.
- El visitante podría intentar acceder a una página de un servicio que ya no existe.
- El visitante podría acceder directamente a una página de detalle sin pasar primero por la sección de servicios.
- El enlace de contacto podría no estar disponible o no funcionar.
