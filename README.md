# aula.lab — plantilla para GitHub Pages

Galería docente personal de proyectos, trabajos del alumnado y recursos. Sitio estático: **HTML + CSS + JavaScript sin dependencias ni servidor**. Compatible con GitHub Pages.

## Publicar por primera vez

1. Abre tu repositorio en GitHub y comprueba que la rama principal sea `main`.
2. Pulsa **Add file → Upload files** y sube **el contenido** de esta carpeta, manteniendo sus subcarpetas (`css`, `js`, `ejemplos`), no la carpeta contenedora.
3. Confirma con **Commit changes**.
4. En **Settings → Pages** elige **Deploy from a branch → main → /(root)** y pulsa **Save**.
5. La URL habitual es `https://USUARIO.github.io/REPOSITORIO/`. El `index.html` principal debe estar en la raíz elegida.

## Añadir proyectos, sin editar las páginas

Edita `js/data.js` y añade un objeto a `SITE_DATA.proyectos` siguiendo los ejemplos. Campos:

- `id`: identificador único y estable (sin espacios); por ejemplo, `web-energia`.
- `tipo`: `alumnado` o `docente`.
- `titulo`, `resumen`, `descripcion`: textos públicos.
- `curso`, `materia`, `anio`: sirven para filtrar el archivo.
- `etiquetas`: lista corta, por ejemplo `["HTML", "CSS"]`.
- `color`: `menta`, `lila`, `melocoton`, `amarillo`, `azul` o `rosa`.
- `icono`: `web`, `robot`, `chart`, `code`, `grid` o `spark`.
- `url`: ruta o enlace HTTPS a la web publicada (se deja `""` hasta que exista).
- `codigo`: enlace HTTPS al código si quieres mostrarlo (opcional).

Los filtros de **año académico, nivel/curso y materia** se generan automáticamente a partir de los registros. No hay que añadir manualmente las opciones.

## Añadir un proyecto HTML del alumnado

1. Crea una carpeta dentro del repositorio, por ejemplo `proyectos/2026-27/3ESO-A/web-01/`.
2. Dentro coloca `index.html`, otros HTML, `style.css`, imágenes y demás recursos. Asegura que sus rutas sean relativas.
3. En `js/data.js`, crea su ficha con `url: "proyectos/2026-27/3ESO-A/web-01/index.html"`.
4. Haz **Commit changes**. Abre la galería y pulsa la flecha de la ficha para comprobar el enlace.

## Cuando la web sea real

- Elimina las seis fichas de muestra (no corresponden a trabajos auténticos) o sustitúyelas por proyectos revisados.
- Cambia `demoMode: true` por `demoMode: false` en `js/data.js`. Desaparecerá el aviso de demostración.
- Actualiza el título de la página y textos generales de `index.html` si deseas cambiar `aula.lab`.
- No publiques nombres completos, imágenes de estudiantes identificables, teléfonos ni otros datos personales sin base y autorización adecuadas. Revisa permisos de imágenes, textos y fuentes externas.
- No incluyas claves API ni contraseñas: los archivos de un sitio estático público son visibles.

## Estructura

```
index.html
css/styles.css
js/data.js
js/app.js
ejemplos/web-divulgacion/index.html
ejemplos/web-divulgacion/segunda.html
ejemplos/web-divulgacion/estilos.css
```

## Limitaciones

- No hay base de datos, administración con contraseña ni subidas públicas. Para insertar proyectos se modifica `js/data.js` en GitHub.
- Los proyectos se publican estáticamente: HTML, CSS, imágenes y JavaScript del navegador, sin PHP o Python de servidor.
- El buscador filtra el listado cargado en la página, sin indexación de contenidos internos de las webs de cada proyecto.
