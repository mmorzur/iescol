/* TOC LAB · Catálogos editables.
   Añade fichas a apps, proyectos o webs. La portada se actualiza automáticamente.
   fechaAlta: fecha REAL de incorporación (AAAA-MM-DD), no de realización del trabajo.
   Las fechas vacías se ordenan al final, respetando el orden de este archivo.
   Proyectos: anio = curso académico; nivel = 3.º ESO; grupo = A (sin repetir el nivel).
   ejemplo: true identifica una muestra; no lo quites hasta incorporar un trabajo real.
   URL: HTTPS o ruta relativa; deja "" si no hay destino. Nunca añadas contraseñas. */
window.SITE_DATA = {
  "limiteInicio": 3,
  "apps": [
    {
      "id": "lectura-viva",
      "titulo": "Lectura Viva",
      "resumen": "Lecturas didácticas personalizadas y seguimiento lector por grupos y niveles.",
      "categoria": "Lectura",
      "icono": "book",
      "url": "https://lecturaviva.mmorzur733.workers.dev/",
      "fechaAlta": "2026-11-01",
      "acceso": "cuenta-docente",
      "estado": "publicada",
      "plataforma": "Cloudflare"
    },
    {
      "id": "enigma",
      "titulo": "Máquina Enigma",
      "resumen": "Prototipo de seudonimización de documentos, hoja clave y restauración.",
      "categoria": "Privacidad",
      "icono": "key",
      "url": "https://maquina-enigma.mimozin.chatgpt.site",
      "fechaAlta": "2026-11-01",
      "acceso": "restringido",
      "estado": "piloto",
      "plataforma": "ChatGPT"
    },
    {
      "id": "acompana",
      "titulo": "Acompaña",
      "resumen": "Asistente docente para preparar y revisar programas de refuerzo y profundización.",
      "categoria": "Apoyo docente",
      "icono": "compass",
      "url": "https://acompana-los-colegiales.mimozin.chatgpt.site",
      "fechaAlta": "2026-11-01",
      "acceso": "restringido",
      "estado": "piloto",
      "plataforma": "ChatGPT"
    },
    {
      "id": "programador",
      "titulo": "Programador Séneca",
      "resumen": "Apoyo a la elaboración y revisión de programaciones didácticas por apartados.",
      "categoria": "Planificación",
      "icono": "grid",
      "url": "https://programador-seneca-colegiales.mimozin.chatgpt.site",
      "fechaAlta": "2026-11-01",
      "acceso": "restringido",
      "estado": "piloto",
      "plataforma": "ChatGPT"
    }
  ],
  "proyectos": [
    {
      "id": "web-divulgacion",
      "titulo": "Web de divulgación científica",
      "resumen": "Dos páginas conectadas para explicar un fenómeno científico de forma visual y clara.",
      "descripcion": "Ejemplo de proyecto HTML y CSS con navegación, imágenes, estilos compartidos y una reflexión sobre las fuentes utilizadas. La ficha muestra cómo documentar un trabajo sin publicar datos del alumnado.",
      "materia": "Computación y Robótica",
      "anio": "2026/27",
      "etiquetas": [
        "HTML",
        "CSS",
        "Web"
      ],
      "icono": "web",
      "url": "",
      "codigo": "",
      "nivel": "3.º ESO",
      "grupo": "",
      "fechaAlta": "",
      "ejemplo": true
    },
    {
      "id": "robot-obstaculos",
      "titulo": "Robot que detecta obstáculos",
      "resumen": "Programación por bloques, lectura del sensor y pruebas de respuesta automática.",
      "descripcion": "Ficha ilustrativa de un sistema robótico con una entrada, una decisión y una salida. Puede enlazar a una página de documentación, un vídeo autorizado o una simulación.",
      "materia": "Computación y Robótica",
      "anio": "2025/26",
      "etiquetas": [
        "Robótica",
        "Sensores",
        "MakeCode"
      ],
      "icono": "robot",
      "url": "",
      "codigo": "",
      "nivel": "2.º ESO",
      "grupo": "",
      "fechaAlta": "",
      "ejemplo": true
    },
    {
      "id": "economia-local",
      "titulo": "Mapa de iniciativas locales",
      "resumen": "Investigación y representación de propuestas de economía y emprendimiento.",
      "descripcion": "Ejemplo de producto de investigación orientado a comparar iniciativas con indicadores definidos, citar fuentes y comunicar conclusiones.",
      "materia": "Economía y Emprendimiento",
      "anio": "2026/27",
      "etiquetas": [
        "Investigación",
        "Datos",
        "Entorno"
      ],
      "icono": "chart",
      "url": "",
      "codigo": "",
      "nivel": "4.º ESO",
      "grupo": "",
      "fechaAlta": "",
      "ejemplo": true
    }
  ],
  "webs": [
    {
      "categoria": "DESARROLLO WEB",
      "titulo": "MDN Web Docs",
      "descripcion": "Referencia sobre HTML, CSS y JavaScript.",
      "url": "https://developer.mozilla.org/es/docs/Web",
      "id": "mdn",
      "autor": "Mozilla y comunidad MDN",
      "fechaAlta": ""
    },
    {
      "categoria": "COMPUTACIÓN FÍSICA",
      "titulo": "MakeCode micro:bit",
      "descripcion": "Programación visual y simulador para micro:bit.",
      "url": "https://makecode.microbit.org/",
      "id": "makecode",
      "autor": "Microsoft MakeCode",
      "fechaAlta": ""
    },
    {
      "categoria": "APPS",
      "titulo": "MIT App Inventor",
      "descripcion": "Entorno visual para construir aplicaciones.",
      "url": "https://appinventor.mit.edu/",
      "id": "appinventor",
      "autor": "MIT App Inventor",
      "fechaAlta": ""
    }
  ]
};
