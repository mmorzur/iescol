/* EDITA ESTE ARCHIVO para publicar tus proyectos. No hace falta tocar HTML ni CSS.
   demoMode: true muestra el aviso de que los registros son ejemplos.
   Cuando sustituyas todos los ejemplos por trabajos reales revisados, cambia a false.
   URL: deja "" si aún no se ha publicado; admite direcciones HTTPS o rutas relativas.
   No incluyas nombres completos ni información identificativa de menores. */
window.SITE_DATA = {
  demoMode: true,
  proyectos: [
    {
      id: "web-divulgacion",
      tipo: "alumnado",
      titulo: "Web de divulgación científica",
      resumen: "Dos páginas conectadas para explicar un fenómeno científico de forma visual y clara.",
      descripcion: "Ejemplo de proyecto HTML y CSS con navegación, imágenes, estilos compartidos y una reflexión sobre las fuentes utilizadas. La ficha muestra cómo documentar un trabajo sin publicar datos del alumnado.",
      curso: "3.º ESO",
      materia: "Computación y Robótica",
      anio: "2026/27",
      etiquetas: ["HTML", "CSS", "Web"],
      color: "menta",
      icono: "web",
      url: "ejemplos/web-divulgacion/index.html",
      codigo: ""
    },
    {
      id: "robot-obstaculos",
      tipo: "alumnado",
      titulo: "Robot que detecta obstáculos",
      resumen: "Programación por bloques, lectura del sensor y pruebas de respuesta automática.",
      descripcion: "Ficha ilustrativa de un sistema robótico con una entrada, una decisión y una salida. Puede enlazar a una página de documentación, un vídeo autorizado o una simulación.",
      curso: "2.º ESO",
      materia: "Computación y Robótica",
      anio: "2025/26",
      etiquetas: ["Robótica", "Sensores", "MakeCode"],
      color: "lila", icono: "robot", url: "", codigo: ""
    },
    {
      id: "economia-local",
      tipo: "alumnado",
      titulo: "Mapa de iniciativas locales",
      resumen: "Investigación y representación de propuestas de economía y emprendimiento.",
      descripcion: "Ejemplo de producto de investigación orientado a comparar iniciativas con indicadores definidos, citar fuentes y comunicar conclusiones.",
      curso: "4.º ESO",
      materia: "Economía y Emprendimiento",
      anio: "2026/27",
      etiquetas: ["Investigación", "Datos", "Entorno"],
      color: "melocoton", icono: "chart", url: "", codigo: ""
    },
    {
      id: "kit-html-css",
      tipo: "docente",
      titulo: "Kit de retos HTML + CSS",
      resumen: "Actividades graduadas para aprender estructura, estilo, enlaces y depuración.",
      descripcion: "Ejemplo de recurso docente compuesto por pequeños retos autocontenidos, un proyecto final y comprobaciones individuales. Sustituye esta ficha por tus materiales cuando estén listos para difusión.",
      curso: "3.º ESO",
      materia: "Computación y Robótica",
      anio: "2026/27",
      etiquetas: ["Material didáctico", "HTML", "CSS"],
      color: "amarillo", icono: "code", url: "", codigo: ""
    },
    {
      id: "cuaderno-steam",
      tipo: "docente",
      titulo: "Cuaderno de retos STEAM",
      resumen: "Un esquema reutilizable para documentar prototipos, decisiones y pruebas.",
      descripcion: "Ficha de muestra de un material para guiar proyectos de carácter científico-tecnológico. Cada reto reúne pregunta, restricciones, prototipo, prueba y mejora.",
      curso: "Secundaria",
      materia: "Tecnología",
      anio: "2025/26",
      etiquetas: ["STEAM", "Prototipos", "Evaluación"],
      color: "azul", icono: "grid", url: "", codigo: ""
    },
    {
      id: "ia-aula",
      tipo: "docente",
      titulo: "IA: probar y comprender",
      resumen: "Una secuencia de experimentos para analizar datos, clasificación y errores.",
      descripcion: "Ejemplo de secuencia que prioriza la comprensión del funcionamiento y las limitaciones de modelos sencillos frente al uso superficial de herramientas.",
      curso: "ESO",
      materia: "Computación y Robótica",
      anio: "2026/27",
      etiquetas: ["IA", "Datos", "Didáctica"],
      color: "rosa", icono: "spark", url: "", codigo: ""
    }
  ],
  recursos: [
    { categoria: "DESARROLLO WEB", titulo: "MDN Web Docs", descripcion: "Referencia sobre HTML, CSS y JavaScript.", url: "https://developer.mozilla.org/es/docs/Web" },
    { categoria: "COMPUTACIÓN FÍSICA", titulo: "MakeCode micro:bit", descripcion: "Programación visual y simulador para micro:bit.", url: "https://makecode.microbit.org/" },
    { categoria: "APPS", titulo: "MIT App Inventor", descripcion: "Entorno visual para construir aplicaciones.", url: "https://appinventor.mit.edu/" }
  ]
};
