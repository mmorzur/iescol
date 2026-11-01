# TOC LAB

Web personal con tres catálogos independientes y una portada que muestra las tres últimas incorporaciones de cada área. HTML, CSS y JavaScript sin dependencias, compatible con GitHub Pages y con rutas relativas.

## Páginas

| Archivo | Contenido |
| --- | --- |
| `index.html` | Portada y últimas incorporaciones de las tres áreas |
| `laboratorio.html` | Aplicaciones web propias, descripción y enlace |
| `proyectos.html` | Proyectos del alumnado con búsqueda y filtros combinados |
| `webs.html` | Webs de otros autores con atribución, descripción, categoría y enlace |

El logotipo y la paleta de TOC LAB se mantienen. El diseño utiliza fondo claro, azul y ámbar, con un bloque oscuro para el laboratorio en la portada.

## Blog docente y autoría

La portada incluye un acceso destacado al blog docente facilitado por el autor:
https://blogsaverroes.juntadeandalucia.es/tecnologocompulsivo/

El blog reúne contenidos propios y queda separado del catálogo de webs de otros autores. La firma «By Miguel Ángel Morales» aparece en el pie de las cuatro páginas y enlaza al mismo blog. El antiguo botón «Entrar al laboratorio» se ha eliminado de la presentación inicial.

## Gestionar los contenidos

Edita únicamente `js/data.js`. La navegación, los filtros y la portada se actualizan desde ese archivo; no hay que repetir las fichas en el HTML.

- `apps`: aplicaciones propias.
- `proyectos`: trabajos del alumnado.
- `webs`: sitios externos de otros autores.
- `limiteInicio`: número máximo de fichas por sección en portada; por defecto, 3.

Cada ficha lleva un `id` único, un título y los textos y enlaces adecuados a su catálogo. Las URL admiten HTTPS o rutas relativas. Una URL vacía muestra la ficha sin inventar un enlace.

### Incorporaciones recientes

`fechaAlta` indica la **fecha real de incorporación al catálogo**, con formato `AAAA-MM-DD`. Se ordena de la más reciente a la más antigua. Las fichas sin fecha aparecen después, en el orden de `data.js`; los empates conservan también ese orden. No confundir con el curso académico del trabajo.

Las apps de este rediseño se incorporaron el 01/11/2026. No se han atribuido fechas históricas a las fichas heredadas que no las tenían.

### Añadir una aplicación

```js
{
  id: "mi-app",
  titulo: "Nombre de la app",
  resumen: "Qué permite hacer y para quién está pensada.",
  categoria: "Apoyo docente",
  icono: "grid", // key, compass, book o grid
  fechaAlta: "", // Completar con la fecha real de incorporación.
  url: "",       // Dirección publicada de la app.
  estado: "piloto", // Usar "publicada" para una instalación externa verificada.
  plataforma: "ChatGPT",
  acceso: "restringido" // "publico" o "cuenta-docente" según su acceso real.
}
```

Los enlaces a otras apps **no modifican sus permisos**. Lectura Viva enlaza a su instalación publicada desde el repositorio `mmorzur/lecturaviva`, en `https://lecturaviva.mmorzur733.workers.dev/`, y usa cuentas docentes propias. Máquina Enigma, Acompaña y Programador Séneca conservan sus direcciones de ChatGPT y se identifican como «Piloto · ChatGPT».

En cada app, `estado` admite `publicada` o `piloto`; `plataforma` identifica el alojamiento para la búsqueda. El botón de los pilotos dice «Abrir piloto». Las direcciones `*.chatgpt.site` se identifican automáticamente como pilotos, aunque falte el campo. `acceso: "cuenta-docente"` muestra «Cuenta docente» y `acceso: "restringido"` muestra «Acceso restringido». El estado de publicación y el tipo de acceso se muestran por separado. «Versión publicada» identifica la instalación externa; no certifica su madurez o ausencia de errores.

### Añadir un proyecto

```js
{
  id: "proyecto-unico",
  titulo: "Nombre del proyecto",
  resumen: "Descripción breve del producto o trabajo.",
  descripcion: "Contexto, desarrollo y resultado.",
  anio: "2026/27",  // Curso académico.
  nivel: "3.º ESO", // Nivel educativo.
  grupo: "A",       // Grupo dentro del nivel; vacío si se desconoce.
  materia: "Tecnología y Digitalización",
  etiquetas: ["Prototipo", "Diseño"],
  icono: "web", // web, robot o chart
  fechaAlta: "",
  url: "",
  codigo: "",
  ejemplo: false // Solo para trabajos reales revisados.
}
```

Los filtros son **curso académico + nivel + grupo**, combinables con la búsqueda por título, materia, tema o etiquetas. Los niveles disponibles dependen del curso académico; los grupos, del curso académico y del nivel. Si una selección deja de existir, se restablece automáticamente. Los proyectos sin grupo tienen la opción «Sin especificar».

Los filtros quedan en la URL y se conservan al recargar o compartir el enlace. La búsqueda ignora mayúsculas y tildes. «Limpiar filtros» y el botón del estado sin resultados recuperan el listado completo.

Se conservan **tres fichas de ejemplo** de la versión anterior, claramente identificadas y sin grupos inventados. Sustitúyelas por trabajos auténticos antes de usarlas como evidencia del trabajo del alumnado. El aviso desaparece automáticamente cuando ninguna ficha tiene `ejemplo: true`.

Para publicar un proyecto HTML local, guarda sus archivos en una carpeta y usa una ruta como `proyectos/2026-27/3ESO-A/proyecto-01/index.html`. También puedes enlazar una web, documento, vídeo o repositorio que ya esté publicado.

### Añadir una web de otro autor

```js
{
  id: "referencia-unica",
  titulo: "Nombre de la web",
  descripcion: "Por qué puede resultar útil.",
  autor: "Autor, entidad o comunidad responsable",
  categoria: "DESARROLLO WEB",
  fechaAlta: "",
  url: ""
}
```

El catálogo permite buscar por título, autor, descripción o categoría, y filtrar por categoría. Se mantienen las tres referencias de la versión anterior: MDN Web Docs, MakeCode micro:bit y MIT App Inventor.

## Publicación y límites

El repositorio existente publica desde `main` con GitHub Pages. No requiere instalación ni compilación. Mantén `index.html`, las tres páginas de catálogo y las carpetas `assets`, `css` y `js` en la misma raíz.

No hay base de datos, panel de administración, cuentas ni subidas públicas. El contenido se edita en `js/data.js`. Los archivos de `ejemplos/` y `css/styles_v1.css` se conservan; el nuevo diseño no los utiliza. No se publican claves ni datos identificativos del alumnado en las fichas.
