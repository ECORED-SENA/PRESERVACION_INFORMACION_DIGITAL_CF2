export default {
  global: {
    componenteFormativo: 'La tecnología en la información digital',
    descripcionCurso:
      'Hoy en día, las entidades tienen como misión convertir los documentos en nuevos medios para optimizar las posibilidades y disponer de información ágil y segura, además de su digitalización y fácil acceso. Son estas dos razones, “preservación y distribución”, las que han promovido en gran medida el funcionamiento del mecanismo digital y han sentado las bases para mejorar el trabajo de bibliotecas, museos, instituciones y archivos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normativa vigente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ley de protección de datos',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normas de gestión ambiental',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El archivo digital y sus parámetros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Clasificación de los documentos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estructura de un documento electrónico',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Imágenes digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de imágenes digitales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'La resolución de las imágenes digitales',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Tamaño del archivo',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Clasificación digital',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Sistemas de ordenación documental',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Archivo General de la Nación AGN. (2003). Ordenación documental.',
      link:
        'https://www.archivogeneral.gov.co/caja_de_herramientas/docs/5.%20organizacion/DOCUMENTOS%20TECNICOS/CARTILLA%20DE%20ORDENACION%20DOCUMENTAL.pdf',
    },
    {
      referencia:
        'Heredia, A. (1995). Archivística general teoría y práctica. 7ª. Ed. Diputación de Sevilla.',
      link: '',
    },
    {
      referencia: 'ISO 14001. (2015). Control de la documentación.',
      link:
        'https://www.nueva-iso-14001.com/2015/02/iso-14001-control-de-la-documentacion/',
    },
    {
      referencia: 'Minambiente. (2021). Programa de gestión documental PGD. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/09/Programa-de-gestion-documental-minambiente-PGD.pdf',
    },
    {
      referencia:
        'MinTIC. (2021). Guía para la gestión de documentos y expedientes electrónicos. ',
      link:
        'https://mintic.gov.co/arquitecturati/630/articles-61594_recurso_pdf.pdf ',
    },
    {
      referencia:
        'Norma Técnica Colombiana. (2021). Norma ISO-15489-1. ICONTEC.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normograma/NTC-ISO%2015489-1.pdf',
    },
    {
      referencia:
        'Olaya, V. (2013). Sistemas de información geográfica. Tomo 2. OSGEO.',
      link: '',
    },
    {
      referencia:
        'Posada, E. (2008). Introducción al procesamiento digital. Instituto Geográfico Agustín Codazzi.',
      link: '',
    },
    {
      referencia: 'SIC. (2021). Datos personales. SIC',
      link: 'https://www.sic.gov.co/sobre-la-proteccion-de-datos-personales ',
    },
    {
      referencia: 'Significados. (2018). Normatividad.',
      link: 'https://www.significados.com/normatividad/',
    },
  ],
  glosario: [
    {
      termino: 'Archivo',
      significado:
        'Un archivo es un lugar destinado al almacenamiento de documentos.',
    },
    {
      termino: 'Fiabilidad',
      significado:
        'Se define como la probabilidad de que un bien funcione adecuadamente durante un período determinado bajo condiciones operativas específicas.',
    },
    {
      termino: 'Gestión de documentos',
      significado:
        'La gestión documental consiste en la captura, almacenamiento y recuperación de documentos. Cualquier organización ya captura, almacena y recupera documentos todos los días. Es una manera para definir un proceso.',
    },
    {
      termino: 'Hardware',
      significado:
        'Generalmente es todo lo físico. Es la parte tangible de un ordenador o sistema informático. Está formado por componentes eléctricos, electrónicos, electromecánicos y mecánicos.',
    },
    {
      termino: 'Integridad',
      significado:
        'Es la condición de un individuo u objeto de mantener todas sus partes. Esto no incluye solo lo físico, sino los valores y convicciones. Se puede afirmar que una persona es íntegra cuando actúa de acuerdo con las ideas que siempre ha manifestado, esto significa que es confiable.',
    },
    {
      termino: 'Repositorios',
      significado:
        'Son instalaciones virtuales donde se depositan los resultados de la investigación científica.',
    },
    {
      termino: 'SGA',
      significado: 'Sistema de Gestión Ambiental.',
    },
    {
      termino: 'Software',
      significado:
        'Hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático. El software no siempre es visible a diferencia del Hardware.',
    },
  ],
  complementario: [
    {
      texto:
        'Grupo PROSID. (2007). Archivo digital empresarial [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4yHGlKZAAGs ',
    },
    {
      texto:
        'Universidad del Quindío. (2020). Documentos digitales preservación y conservación [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tuuT1ALIzIE',
    },
    {
      texto:
        'Escuela Judicial RLB. (2021). Ley de protección de datos [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/AFWVo4WAAG4',
    },
    {
      texto:
        'Acierto Abogados Consultores. (2020) Política de protección de datos [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/McooG4VCJNg ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Marcela González Gómez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesus Perez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Rafael Augusto Mantilla Lopez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
