TOC LAB — WEB INTEGRADA (29/10/2026)
====================================

OBJETIVO
Página estática HTML/CSS/JavaScript lista para alojarse en un repositorio
configurado para GitHub Pages. Sin backend, dependencias ni servicios externos
obligatorios para el catálogo.

ARCHIVOS
index.html                  Página de inicio y estructura del sitio
css/styles.css             Estilos de TOC LAB (paleta carbón/azul/ámbar)
js/data.js                 Contenidos: proyectos, recursos y modo demo
js/app.js                  Lógica: filtros, tarjetas, detalles y menú móvil
assets/logo.png            Logotipo de TOC LAB
assets/logo-icono.png      Versión compacta del icono para la cabecera
assets/favicon-48.png      Favicon
assets/favicon-192.png     Icono 192 px

COMPROBACIONES EFECTUADAS
- node --check: ambos JavaScript sin errores de sintaxis.
- Referencias HTML: CSS, JS, favicon e imagen de cabecera presentes.
- Chromium mediante documento autocontenido: comprobadas resoluciones
  1440x900, 768x900 y 390x844.
- En las tres: 6 proyectos y 3 recursos aparecen, funcionan búsqueda,
  restablecer filtros, filtro por tipo, filtro por año, apertura/cierre de
  fichas y ausencia de errores JS/desbordamiento horizontal en la prueba.
- En móvil: apertura y cierre del menú comprobados.
- No se han verificado los enlaces externos ni el despliegue real en GitHub Pages.

CONTENIDO DE DEMOSTRACIÓN
js/data.js conserva demoMode: true (6 fichas de ejemplo). Sustitúyelas por
trabajos reales revisados antes de pasar demoMode a false.
La entrada de ejemplo "Web de divulgación científica" contenía una ruta a
'ejemplos/web-divulgacion/index.html', pero esa página no se ha recibido.
Para evitar un enlace roto, el campo url se ha dejado vacío.
Si incorporas el proyecto real, restituye en js/data.js:
  url: "ejemplos/web-divulgacion/index.html",
y agrega el archivo en esa ruta, o usa una URL HTTPS ya publicada.

PUBLICACIÓN EN GITHUB PAGES
1. Haz una copia del repositorio existente.
2. Copia el CONTENIDO de esta carpeta en la raíz de la rama que use Pages;
   si la publicación se hace desde /docs, respeta allí las mismas rutas.
3. Configura Settings > Pages según la rama/carpeta que utilice tu proyecto.
4. Revisa las rutas con tu dominio de Pages y comprueba móvil/escritorio.
5. Sustituye las fichas demo y confirma permisos antes de publicar recursos
   con material o imágenes atribuibles al alumnado.

OBSERVACIONES
- El PNG original del logotipo tiene fondo blanco. Para fondos distintos
  convendría crear una versión transparente o SVG a partir de su fuente.
- Para añadir un proyecto, sigue el esquema existente de js/data.js:
  id, tipo, titulo, resumen, descripcion, curso, materia, anio,
  etiquetas, color, icono, url y codigo.
- No se han modificado las reglas principales de filtrado ni la estructura
  HTML previa, para minimizar la posibilidad de regresiones.
