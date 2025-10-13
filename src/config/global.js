export default {
  global: {
    Name: 'Escuchemos a las comunidades campesinas',
    Description:
      'El componente formativo Escuchemos a las comunidades campesinas, promueve la investigación participativa para comprender la realidad rural. Se abordan métodos cualitativos y cuantitativos, técnicas como cartografía social, talleres, grupos focales y análisis FODA, además de instrumentos como diarios de campo y encuestas. Su propósito es fortalecer la organización comunitaria y construir soluciones colectivas sostenibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          '¿A qué nos referimos con hacer investigación dentro de una comunidad campesina?',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métodos de investigación básica en comunidades campesinas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Métodos y técnicas de investigación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Instrumentos para registros de información',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Herramientas tecnológicas para sistematizar y/o tabular información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          '¿Cómo organizar y comprender la información de una investigación participativa?',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: 'Método FODA',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2018). Análisis de FODA [Documento en línea]. FAO. ',
      tipo: 'Documento en línea',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/83189797-00f4-49ec-ac96-878c4806fa1e/content',
    },
    {
      tema: 'Método FODA',
      referencia: 'UDE CUCEA. (2015). Análisis de FODA [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8Dnw5Mmxzc8',
    },
  ],
  glosario: [
    {
      termino: 'Cartografía',
      significado:
        'la cartografía es la ciencia y el arte de crear mapas. Se encarga de representar, de manera gráfica, la superficie terrestre y otros elementos geográficos (como montañas, ríos, carreteras o fronteras) para mostrar la distribución de estos elementos en un espacio determinado.',
    },
    {
      termino: 'Jerarquía',
      significado:
        'la jerarquía es un sistema de organización en el que se establecen niveles o rangos de importancia o autoridad. En una jerarquía, las personas o elementos se ordenan de acuerdo a su poder, responsabilidad o función, siendo algunos superiores a otros.',
    },
    {
      termino: 'Métodos estadísticos',
      significado:
        'los métodos estadísticos son herramientas que se usan para entender y analizar datos. Sirven para organizar la información, encontrar patrones (identificar repeticiones o regularidades) y sacar conclusiones.',
    },
    {
      termino: 'Muestra representativa',
      significado:
        'una muestra representativa es un grupo seleccionado de una población más grande que refleja con precisión las características clave de esa población. El objetivo es que los resultados obtenidos a partir de esta muestra puedan generalizarse a toda la población sin sesgos significativos. Características: diversidad, tamaño adecuado, selección aleatoria (al azar), proporcionalidad con respecto a subgrupos (por ejemplo igual proporción de hombres y mujeres).',
    },
    {
      termino: 'Saberes',
      significado:
        'los saberes son los conocimientos, experiencias, habilidades y aprendizajes que una persona o una comunidad tiene sobre algo. Pueden ser tanto teóricos (como los que aprendemos en la escuela) como prácticos (como los que adquirimos haciendo cosas en la vida diaria o a través del trabajo). Existen saberes de tipo popular, práctico, académico y científico entre otros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Geilfus, F. (1997). <em>80 herramientas para el desarrollo participativo: Diagnóstico, planificación, monitoreo, evaluación. San Salvador</em>, El Salvador: EDICPSA.',
      link: '',
    },
    {
      referencia:
        'Ortiz Coronel, D., y de Sá, R. L. (2025, 28 de marzo). <em>Construcción colectiva del conocimiento: Herramientas para la investigación participativa</em>. Revista Amawtakuna. Editorial de la revista Amawtakuna. Asunción, Paraguay. ',
      link: '',
    },
    {
      referencia:
        'Ríos Pacheco, E. F., Barbosa Trigos, J. F., y Páez Quintana, H. A. (2021, noviembre). <em>Herramientas para redactar un diagnóstico participativo</em> (Primera ed.). En Redipe Red Iberoamericana de Pedagogía (Ed.), Capítulo Estados Unidos. Ocaña, Colombia: Bowker Books in Print.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Cecilia Diaz Espinosa',
          cargo: 'Experta temática',
          centro:
            'Centro Agroecológico y Empresarial Fusagasugá - Regional Cundinamarca',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',

          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia	',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo	Garavito Parada',
          cargo: 'Animador y Productor Multimedia	',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
