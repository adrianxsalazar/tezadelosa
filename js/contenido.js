/* =====================================================================
   CONTENIDO DE LA WEB DE TEZA DE LOSA
   ---------------------------------------------------------------------
   Todo lo que se lee en la web sale de este archivo. Para cambiar un
   texto, una fecha o una foto, edita aquí y guarda: no hace falta tocar
   nada más.

   Reglas rápidas:
   - Los textos van entre comillas "así". Si dentro necesitas comillas,
     usa « » o comillas simples.
   - Cada elemento de una lista acaba en coma.
   - Fotos: súbelas a la carpeta img/ y escribe aquí su ruta, por
     ejemplo  imagen: "img/san-juan-2027.jpg".  Mientras la ruta apunte a
     img/ilustraciones/ la web muestra el aviso «Hueco para foto».
   - Las líneas marcadas con  // REVISAR  son datos que conviene que
     confirme alguien del pueblo antes de publicar.
   ===================================================================== */

window.CONTENIDO = {

  /* ---------- Datos generales ---------- */
  sitio: {
    nombre: "Teza de Losa",
    subtitulo: "Valle de Losa · Burgos",
    // Escudo del Valle de Losa (cabecera, pie y sección del valle).
    logo: "img/escudo-valle-de-losa.png",
    logoAlt: "Escudo del Valle de Losa",
  },

  /* ---------- Portada ---------- */
  portada: {
    etiqueta: "Valle de Losa · Norte de Burgos",
    titulo: ["Teza", "de Losa"],
    texto: "Un pueblo pequeño con mucho ambiente en el Valle de Losa, al norte de Burgos. Está a 40 minutos de Bilbao y a una hora de Vitoria-Gasteiz y de Burgos.",
    botones: [
      { texto: "Descubre el pueblo", enlace: "#pueblo" },
      { texto: "Mira los eventos", enlace: "#eventos" },
    ],
    detalles: ["42° 58′ 17″ N · 3° 12′ 4″ O", "En el siglo XIV se escribía «Deça»"],
    imagen: "img/iglesia-atardecer.jpg",
    imagenAlt: "La iglesia de San Nicolás de Teza de Losa al atardecer",
    // Qué parte de la foto se ve (horizontal vertical). Sube o baja el
    // segundo número para mostrar más cielo o más suelo.
    imagenFoco: "40% 55%",
  },

  /* ---------- Franja de cifras ---------- */
  datos: [
    { cifra: "40 min", texto: "en coche hasta Bilbao. Vitoria-Gasteiz, a una hora" },
    { cifra: "s. XIII", texto: "la iglesia de San Nicolás, del último románico" },
    { cifra: "2 hab/km²", texto: "en todo el valle. Aquí sobra sitio" },
    { cifra: "4", texto: "citas al año que llenan el pueblo" },
  ],

  /* ---------- El pueblo ---------- */
  pueblo: {
    etiqueta: "El pueblo",
    titulo: "Un pueblo con ocho siglos a la espalda",
    parrafos: [
      "Teza de Losa está en el Valle de Losa, en la comarca de Las Merindades, al norte de Burgos. Es un llano abierto junto al río Nabón, con campos alrededor y robledales a un paseo.",
      "Teza mantiene una relación muy estrecha con Lastras de Teza, su pueblo hermano y vecino, que queda justo al lado.",
      "Es pequeño, pero da para mucho: una iglesia del siglo XIII, caminos para salir a andar o en bici y unas fiestas que llenan el pueblo cada verano.",
    ],
    cita: {
      texto: "Situado en un llano con buena ventilación y clima frío, pero saludable.",
      autor: "Pascual Madoz, Diccionario geográfico-estadístico-histórico, tomo XIV (mediados del siglo XIX)",
    },
    imagen: "img/casa-tipica.jpg",
    imagenAlt: "Casa típica de piedra de Teza de Losa, con tejado de teja y esquinas de sillería, al atardecer",
    desplegables: [
      {
        titulo: "De Deça a Teza: la historia en corto",
        parrafos: [
          "La zona se repobló pronto, probablemente hacia el siglo IX, aunque apenas quedan documentos medievales.",
          "La primera mención escrita llega a mediados del siglo XIV, en el Libro Becerro de las Behetrías. El pueblo aparece como «Deça», una de las trece aldeas que dependían de Villalba de Losa. El nombre podría venir de «dehesa».",
          "En el censo de Floridablanca (1787) figura como lugar de señorío del duque de Frías, que nombraba al alcalde ordinario.",
          "A mediados del siglo XIX, Madoz cuenta 19 casas, 80 habitantes y una escuela pagada con 15 fanegas de trigo. Se vivía del cereal, las legumbres, las patatas y el ganado.",
          "Hoy forma parte del municipio de Valle de Losa y mantiene su propia junta administrativa.",
        ],
      },
      {
        titulo: "La iglesia de San Nicolás, capitel a capitel",
        imagen: "img/ventana-san-nicolas.jpg",
        imagenAlt: "Ventana románica de la iglesia de San Nicolás, con dos columnas, capiteles y un arco decorado con bolas",
        pie: "Una de las ventanas de San Nicolás: dos columnas con capitel y un arco decorado con bolas.",
        parrafos: [
          "Es de principios del siglo XIII: conserva las formas del románico y ya enseña los arcos apuntados del gótico.",
          "La nave original es única y se cubre con bóveda de cañón apuntado. La cabecera cuadrada, la sacristía y la torre del lado sur se añadieron siglos después.",
          "La portada, al sur y bajo un pórtico, tiene dos arquivoltas apuntadas y dos capiteles con figuras. En uno, una mujer desnuda con serpientes y aves, que se lee como la lujuria. En el otro, un personaje sentado que algunos estudiosos interpretan como la calumnia.",
          "Fíjate en el alero norte: conserva 17 canecillos.",
        ],
      },
      {
        titulo: "Qué hay alrededor",
        parrafos: [
          "Al oeste está Lastras de Teza, el pueblo hermano. El término también linda con Baró al noreste, Villacián al este y San Martín de Losa al sureste. Todos quedan a un paseo o a una vuelta en bici.",
          "En San Martín de Losa están los restos de la villa romana de Los Casarejos.",
          "Desde el monte de Teza se ve el valle de Angulo y, cuando baja agua, la cascada de San Miguel.",
          "Quincoces de Yuso, el núcleo principal del valle, está a pocos minutos en coche.",
        ],
      },
    ],
  },

  /* ---------- El valle ---------- */
  valle: {
    etiqueta: "El valle",
    titulo: "Valle de Losa: mucho campo y muy poca prisa",
    texto: "Al norte de Burgos y pegado a Álava, a una hora o menos de Bilbao y de Vitoria-Gasteiz. Son más de veinte pueblos y casi 228 km² para menos de 500 vecinos. Lo recorre el río Jerea y lo rodean la Sierra Salvada, la Sierra Carbonilla y los Montes de la Peña.",
    escudo: true,   // muestra el escudo junto al texto (pon false para quitarlo)
    imagen: "img/mirador-angulo.jpg",
    imagenAlt: "Vista desde el monte de Teza hacia el valle de Angulo, con los cortados de la peña y la cascada de San Miguel a la derecha",
    imagenFoco: "50% 55%",
    pie: "Lo que se ve desde el monte de Teza: el valle de Angulo y, a la derecha, la cascada de San Miguel.",
    credito: "",   // REVISAR: autor de la foto, p. ej. "Foto: Nombre Apellido"
    // icono: "naturaleza", "patrimonio", "producto" o "caballo"
    temas: [
      {
        icono: "naturaleza",
        titulo: "Hayedos, robledales y cortados",
        resumen: "Sierras para andar todo el día sin cruzarte con casi nadie.",
        parrafos: [
          "El río Jerea nace en la Sierra Carbonilla, cerca de Relloso, y baja hasta el Ebro. Por el camino recoge al Nabón, el río de Teza.",
          "En el límite oriental está el Monte Santiago, monumento natural, con su hayedo y el Salto del Nervión.",
          "Por el Pico del Fraile y por la Peña hay rutas para andar o ir en bici.",
        ],
      },
      {
        icono: "patrimonio",
        titulo: "Románico, torres y una villa romana",
        resumen: "Mucha historia para un valle tan tranquilo.",
        parrafos: [
          "La ermita de San Pantaleón de Losa, consagrada en 1207, es la foto más famosa del valle.",
          "Quedan torres medievales en Lastras de la Torre, Río de Losa y San Llorente.",
          "En San Martín de Losa, pegado a Teza, está la villa romana de Los Casarejos.",
        ],
      },
      {
        icono: "producto",
        titulo: "Patata de Losa y morcilla",
        resumen: "Aquí se come de lo que da la tierra.",
        parrafos: [
          "La patata de Losa tiene nombre propio. Se cultiva en el valle, junto al cereal de secano, desde hace generaciones.",
          "En la mesa, lo de siempre en el norte de Burgos: buena morcilla y queso fresco.",
        ],
      },
      {
        icono: "caballo",
        titulo: "El caballo que lleva el nombre del valle",
        resumen: "El losino es una raza autóctona nacida en estos montes.",
        parrafos: [
          "El caballo losino es originario del Valle de Losa y se ha criado en sus montes, entre los 600 y los 1.450 metros de altitud.",
          "Figura en el Catálogo Oficial de Razas de Ganado de España como raza autóctona en peligro de extinción.",
        ],
      },
    ],
  },

  /* ---------- Eventos ---------- */
  eventos: {
    etiqueta: "Eventos",
    titulo: "Cuatro fechas para apuntar en el calendario",
    texto: "Teza es pequeño, pero aquí no se aburre nadie. Estas son las citas que juntan a vecinos, familia, amigos y a quien se quiera apuntar.",
    aviso: "Los programas de cada año se publican aquí en cuanto están cerrados.",
    // El primer evento de la lista sale en grande.
    lista: [
      {
        titulo: "Fiestas de Teza",
        cuando: "Último fin de semana de agosto",
        resumen: "El finde grande del año. Vuelve todo el que tiene raíces aquí, se llena la plaza y la fiesta sigue hasta bien entrada la noche.",
        imagen: "img/fiestas-de-teza.jpg",
        imagenAlt: "Gente bailando de noche frente al escenario en las Fiestas de Teza",
        detalles: [
          { titulo: "Cuándo", texto: "Último fin de semana de agosto, todos los años." },
          { titulo: "Programa", texto: "Lo publicamos aquí unas semanas antes." },   // REVISAR
          { titulo: "Para quién", texto: "Para todo el mundo. Si vienes de fuera, eres más que bienvenido." },
          { titulo: "Consejo", texto: "Si quieres quedarte a dormir, busca alojamiento en el valle con tiempo, que ese finde vuela." },
        ],
      },
      {
        titulo: "Concentración de coches clásicos",
        cuando: "Primer fin de semana de octubre",
        resumen: "Ya va por su segunda edición. Coches con historia aparcados en el pueblo, carpas, buen ambiente y mucha charla de motor.",
        imagen: "img/coches-clasicos-2026.jpg",
        imagenAlt: "Coches clásicos expuestos en Teza de Losa durante la concentración de octubre",
        // Qué parte de la foto se ve cuando se recorta (horizontal vertical).
        imagenFoco: "40% 50%",
        detalles: [
          { titulo: "Cuándo", texto: "Primer fin de semana de octubre." },
          { titulo: "Qué hay", texto: "Coches clásicos y con solera expuestos en el pueblo, con carpas y ambiente durante todo el día." },
          { titulo: "¿Tienes un clásico?", texto: "Escríbenos y te contamos cómo apuntarte a la próxima edición." },
        ],
      },
      {
        titulo: "Halloween y alubiada",
        cuando: "Finales de octubre",   // REVISAR
        resumen: "Disfraces, calabazas y una alubiada popular para entrar en calor. La noche más terrorífica del año, en versión pueblo.",
        imagen: "img/ilustraciones/halloween.svg",
        imagenAlt: "Calabazas iluminadas bajo la luna llena con el pueblo al fondo",
        detalles: [
          { titulo: "Qué hay", texto: "Alubiada popular y fiesta de Halloween con disfraces." },
          { titulo: "Para quién", texto: "Peques, mayores y cualquiera con ganas de disfrazarse (y de alubias)." },
        ],
      },
      {
        titulo: "Noche de San Juan",
        cuando: "En torno al 23 de junio",   // REVISAR
        resumen: "Hoguera para dar la bienvenida al verano, con todo el pueblo alrededor del fuego.",
        imagen: "img/ilustraciones/san-juan.svg",
        imagenAlt: "Hoguera de San Juan en la noche, con el pueblo al fondo",
        detalles: [
          { titulo: "Qué hay", texto: "Hoguera al caer la noche." },   // REVISAR
          { titulo: "Consejo", texto: "Trae una sudadera: aquí refresca incluso en junio." },
        ],
      },
    ],
  },

  /* ---------- Qué ver cerca ---------- */
  cerca: {
    etiqueta: "Qué ver cerca",
    titulo: "Sitios chulos a tiro de coche",
    texto: "Románico, cascadas, castillos y cuevas a una hora como mucho. Los tiempos en coche son aproximados.",
    // tipo: "Naturaleza" o "Patrimonio" (son los filtros de la sección)
    // mapa: lo que se buscará en Google Maps al pulsar «Ver en el mapa»
    lugares: [
      {
        nombre: "Cascada de San Miguel y mirador de Angulo",
        tipo: "Naturaleza",
        tiempo: "Desde el monte de Teza",
        resumen: "Lo que se ve desde el monte de Teza: un salto de unos 200 metros que cae por los cortados hacia el valle de Angulo.",
        imagen: "img/cascada-san-miguel.jpg",
        imagenAlt: "La cascada de San Miguel cayendo por los cortados de caliza sobre el valle de Angulo",
        credito: "",   // REVISAR: autor de la foto
        parrafos: [
          "La cascada de San Miguel está junto a Encima Angulo, en el límite entre el Valle de Losa y el Valle de Mena. El río San Miguel se tira por la peña en un salto de unos 200 metros.",
          "Desde el monte de Teza se ve el valle de Angulo entero: cortados de caliza, prados muy verdes y la cascada al fondo.",
          "Para verla de cerca hay una senda de unos 20 minutos que sale tras una portilla y va por el borde del cortado, protegida con valla.",
        ],
        consejo: "Ve después de días de lluvia o con el deshielo, que es cuando más agua lleva.",
        mapa: "Cascada de San Miguel Encima Angulo",
      },
      {
        nombre: "Ermita de San Pantaleón de Losa",
        tipo: "Patrimonio",
        tiempo: "Unos 15 min",   // REVISAR
        resumen: "Una ermita románica subida a una peña con forma de proa. De las fotos más reconocibles de Las Merindades.",
        imagen: "img/ilustraciones/san-pantaleon.svg",
        imagenAlt: "La ermita de San Pantaleón en lo alto de la Peña Colorada",
        parrafos: [
          "Se consagró en 1207 y está en lo alto de la Peña Colorada, en el propio Valle de Losa.",
          "La portada tiene un atlante esculpido y un gran zigzag que enmarca columnas y arquivoltas. Dentro, un tramo de la nave se cubre con cúpula.",
          "Hay quien la relaciona con las leyendas del Santo Grial.",
        ],
        consejo: "Consulta los horarios de apertura antes de subir. Los gestiona la asociación Amigos de San Pantaleón.",
        mapa: "Ermita de San Pantaleón de Losa",
      },
      {
        nombre: "Salto del Nervión y Monte Santiago",
        tipo: "Naturaleza",
        tiempo: "Unos 30 min",   // REVISAR
        resumen: "Un salto de agua de 222 metros al borde de un hayedo. Con agua o sin ella, el mirador impresiona.",
        imagen: "img/ilustraciones/salto-del-nervion.svg",
        imagenAlt: "El Salto del Nervión cayendo desde el cortado de Monte Santiago",
        parrafos: [
          "El Monumento Natural de Monte Santiago está entre las sierras Salvada y Gibijo. Un bosque de hayas llega hasta el mismo borde del cortado.",
          "El sendero al mirador del Nervión (PR-BU 42) es corto y fácil: unos 2 km.",
          "La Casa del Parque está en Berberana.",
        ],
        consejo: "La cascada solo lleva agua tras lluvias fuertes o deshielo. Ve después de varios días de lluvia.",
        mapa: "Mirador del Salto del Nervión",
      },
      {
        nombre: "Sierra Salvada",
        tipo: "Naturaleza",
        tiempo: "Unos 30 min",   // REVISAR
        resumen: "El valle sube suave hacia el norte y de pronto se acaba: cientos de metros de caída sobre Orduña y el valle de Ayala.",
        imagen: "img/ilustraciones/sierra-salvada.svg",
        imagenAlt: "Los cortados de la Sierra Salvada con el Pico del Fraile",
        parrafos: [
          "Los miradores del borde están entre los mejores del norte de Burgos. Es fácil ver buitres planeando a tu altura.",
          "La ruta de la Dehesa de Agua (PR-BU 51, 12,5 km circulares, unas 3 horas) llega hasta la Virgen de Txarlazo y el Pico del Fraile.",
        ],
        consejo: "Con niebla o viento fuerte, mejor lejos del borde.",
        mapa: "Pico del Fraile Sierra Salvada",
      },
      {
        nombre: "Medina de Pomar",
        tipo: "Patrimonio",
        tiempo: "Unos 35 min",   // REVISAR
        resumen: "La ciudad de referencia de la comarca, presidida por las dos torres del alcázar de los Velasco.",
        imagen: "img/ilustraciones/medina-de-pomar.svg",
        imagenAlt: "El alcázar de los Velasco sobre los tejados de Medina de Pomar",
        parrafos: [
          "El alcázar, conocido como Las Torres, alberga el Museo Histórico de Las Merindades.",
          "Es también el sitio para hacer la compra grande, salir a cenar o tomar algo.",
        ],
        consejo: "",
        mapa: "Alcázar de los Velasco Medina de Pomar",
      },
      {
        nombre: "Frías",
        tipo: "Patrimonio",
        tiempo: "Unos 40 min",   // REVISAR
        resumen: "La ciudad más pequeña de España: un castillo en lo alto de una peña, casas colgadas y un puente medieval sobre el Ebro.",
        imagen: "img/ilustraciones/frias.svg",
        imagenAlt: "El castillo y las casas colgadas de Frías sobre el puente medieval",
        parrafos: [
          "Tiene título de ciudad desde el siglo XV y apenas unos cientos de habitantes.",
          "Sube al castillo por las vistas y baja al puente fortificado para la foto.",
        ],
        consejo: "",
        mapa: "Frías Burgos",
      },
      {
        nombre: "Ojo Guareña",
        tipo: "Naturaleza",
        tiempo: "Alrededor de 1 h",   // REVISAR
        resumen: "Uno de los mayores complejos de cuevas de la península, con una ermita metida en la roca.",
        imagen: "img/ilustraciones/ojo-guarena.svg",
        imagenAlt: "La cueva-ermita de San Bernabé en Ojo Guareña",
        parrafos: [
          "Más de 100 km de galerías excavadas por el agua bajo la Merindad de Sotoscueva.",
          "La cueva-ermita de San Bernabé se visita con guía.",
        ],
        consejo: "Reserva la visita con antelación, sobre todo en verano y en puentes.",
        mapa: "Cueva Ermita de San Bernabé Ojo Guareña",
      },
    ],
  },

  /* ---------- Vivir aquí ---------- */
  vivir: {
    etiqueta: "Vivir aquí",
    titulo: "Razones para quedarse",
    texto: "Cada vez más gente, sobre todo del País Vasco, tiene casa en el valle. Unos vienen los findes y en verano. Otros se lo están pensando en serio.",
    razones: [
      {
        titulo: "Bilbao, a 40 minutos",
        texto: "Vitoria-Gasteiz y Burgos, a una hora. Lo justo para venir cada finde o para bajar a la oficina un par de días a la semana.",
      },
      {
        titulo: "Sitio y silencio",
        texto: "En todo el valle viven menos de 500 personas en casi 228 km². Aquí lo que sobra es espacio.",
      },
      {
        titulo: "Un pueblo con plan",
        texto: "Fiestas, coches clásicos, Halloween con alubiada y San Juan. En Teza siempre hay una excusa para juntarse.",
      },
      {
        titulo: "Servicios a mano",   // REVISAR
        texto: "Quincoces de Yuso, a pocos minutos, es el núcleo principal del valle: allí están el colegio y los servicios del día a día.",
      },
    ],
    tablon: {
      titulo: "Casas y terrenos",
      vacio: "Ahora mismo no hay anuncios publicados. Cuéntanos qué buscas y te avisamos cuando salga algo.",
      boton: "Cuéntanos qué buscas",
      // Para publicar un anuncio, copia este bloque dentro de la lista
      // "anuncios", quita las dos barras del principio de cada línea y
      // cambia los datos:
      //
      // {
      //   titulo: "Casa de piedra para reformar",
      //   tipo: "Venta",
      //   texto: "150 m² en dos plantas, con huerta. En el centro del pueblo.",
      //   precio: "Consultar",
      //   imagen: "img/casa-1.jpg",
      // },
      anuncios: [],
      desplegable: {
        titulo: "¿Vendes o alquilas en Teza?",
        parrafos: [
          "Mándanos unas fotos, una descripción corta y un contacto, y publicamos el anuncio en este tablón.",
          "Vale para casas, pajares, huertas y terrenos, en Teza o en los pueblos de alrededor.",
        ],
      },
    },
  },

  /* ---------- Cómo llegar ---------- */
  llegar: {
    etiqueta: "Cómo llegar",
    titulo: "Más cerca de lo que parece",
    texto: "Teza está al norte de Burgos, en la parte noreste del Valle de Losa y a pocos minutos de Quincoces de Yuso. El último tramo va por carreteras locales: sin prisa y con buenas vistas.",
    lat: 42.9714,
    lon: -3.2011,
    coordenadas: "42° 58′ 17″ N, 3° 12′ 4″ O",
    // km y tiempo: por carretera, aproximados.   // REVISAR
    origenes: [
      { nombre: "Bilbao", km: 50, tiempo: "40 min", lat: 43.263, lon: -2.935 },
      { nombre: "Vitoria-Gasteiz", km: 55, tiempo: "1 h", lat: 42.8467, lon: -2.6727 },
      { nombre: "Medina de Pomar", km: 30, tiempo: "35 min", lat: 42.9303, lon: -3.4878 },
      { nombre: "Burgos", km: 120, tiempo: "1 h", lat: 42.3439, lon: -3.6969 },   // REVISAR
    ],
    nota: "Distancias y tiempos aproximados en coche.",
  },

  /* ---------- Contacto ---------- */
  contacto: {
    titulo: "¿Te vienes? Escríbenos",
    texto: "Para preguntar por los eventos, apuntar tu coche clásico, buscar casa o lo que se te ocurra.",
    email: "tucorreo@ejemplo.com",   // REVISAR: pon aquí el correo real
    // Redes: pega la dirección completa (https://...). Si lo dejas
    // vacío, el enlace no se muestra.
    redes: [
      { nombre: "Instagram", enlace: "" },
      { nombre: "Facebook", enlace: "" },
      { nombre: "WhatsApp", enlace: "" },
    ],
  },

  /* ---------- Pie ---------- */
  pie: {
    nota: "Web hecha por Adrian Salazar y los amigos de Teza. No es una web oficial del Ayuntamiento.",
    fuentesTitulo: "Fuentes de los datos",
    fuentes: [
      { texto: "Enciclopedia del Románico (Románico Digital): iglesia de San Nicolás de Teza de Losa", enlace: "https://www.romanicodigital.com/sites/default/files/pdfs/files/burgos_TEZA_DE_LOSA.pdf" },
      { texto: "Wikipedia: Teza de Losa (con la descripción de Madoz)", enlace: "https://es.wikipedia.org/wiki/Teza_de_Losa" },
      { texto: "WikiBurgos: Teza de Losa", enlace: "https://www.wikiburgos.es/wiki/Teza_de_Losa" },
      { texto: "Hispanopedia: Valle de Losa (población INE 2025, superficie y geografía)", enlace: "https://es.hispanopedia.com/wiki/Valle_de_Losa" },
      { texto: "Turismo de Castilla y León: ermita de San Pantaleón", enlace: "https://www.turismocastillayleon.com/es/patrimonio-cultura/iglesias-ermitas/ermita-san-pantaleon" },
      { texto: "Turismo de Castilla y León: Monumento Natural Monte Santiago", enlace: "https://www.turismocastillayleon.com/es/naturaleza/monumento-natural-monte-santiago" },
      { texto: "Wikipedia: Losino horse", enlace: "https://en.wikipedia.org/wiki/Losino_horse" },
      { texto: "Terranostrum: sendero a la cascada de San Miguel", enlace: "https://www.terranostrum.es/senderismo/sendero-cascada-de-san-miguel" },
    ],
  },
};
