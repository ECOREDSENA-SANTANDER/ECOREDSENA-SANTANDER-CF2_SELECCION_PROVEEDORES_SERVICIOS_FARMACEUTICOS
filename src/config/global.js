export default {
  global: {
    Name: 'Evaluación y contratación en el sector farmacéutico',
    Description:
      'Desarrolla competencias clave en los profesionales del sector salud para la evaluación, negociación y contratación de proveedores farmacéuticos, con base en criterios técnicos, normativos y comerciales. Fomenta el uso de herramientas especializadas para el análisis, comparación y categorización de oferentes, fortaleciendo la toma de decisiones responsables en los procesos de adquisición. Además, orienta la formulación de estrategias de abastecimiento que garanticen la calidad, trazabilidad y cumplimiento regulatorio en la gestión de medicamentos e insumos médicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Convocatoria de proveedores',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Negociación con proveedores en el contexto farmacéutico colombiano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Evaluación técnica y categorización de proveedores farmacéuticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Contratación en servicios farmacéuticos: tipos, normativa y cláusulas',
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
        download: 'downloads/CF2_DU.pdf',
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
      tema: 'Evaluación técnica y categorización de proveedores farmacéuticos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Evaluación de proveedores.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sBZgU1RlQX8',
    },
    {
      tema: 'Convocatoria de proveedores',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Técnicas de clasificación de proveedores.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Zj_V-_ky_5c',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría',
      significado:
        'revisión sistemática de los procesos de contratación y proveedores para verificar el cumplimiento de requisitos técnicos, legales y financieros.',
    },
    {
      termino: 'Cláusulas contractuales',
      significado:
        'condiciones específicas establecidas en un contrato que regulan aspectos como plazos, pagos, garantías, penalidades, confidencialidad y resolución de conflictos.',
    },
    {
      termino: 'Comparación de cotizaciones',
      significado:
        'herramienta utilizada para evaluar varias propuestas de proveedores con base en variables como precio, calidad, tiempos de entrega y cumplimiento normativo.',
    },
    {
      termino: 'Contrato de suministro',
      significado:
        'acuerdo legal mediante el cual un proveedor entrega periódicamente medicamentos o insumos, bajo condiciones técnicas, económicas y de tiempo previamente definidas.',
    },
    {
      termino: 'Convenio marco',
      significado:
        'contrato preestablecido, licitado por una entidad estatal como Colombia Compra Eficiente, que permite a otras instituciones adquirir productos bajo condiciones uniformes y previamente negociadas.',
    },
    {
      termino: 'Evaluación técnica de proveedores',
      significado:
        'análisis sistemático de fichas técnicas y documentación del proveedor, con el fin de verificar la calidad, seguridad, eficacia y cumplimiento normativo de los productos ofertados.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento que resume las características normativas y técnicas de un producto farmacéutico, como nombre genérico, concentración, forma farmacéutica, registro INVIMA y condiciones de almacenamiento.',
    },
    {
      termino: 'Ley 80 de 1993',
      significado:
        'norma que regula la contratación estatal en Colombia, estableciendo principios como transparencia, economía, responsabilidad y selección objetiva.',
    },
    {
      termino: 'Matriz de riesgo',
      significado:
        'instrumento que permite identificar y clasificar riesgos asociados a los proveedores, con base en variables como cumplimiento legal, calidad y logística, para tomar decisiones preventivas.',
    },
    {
      termino: 'Negociación integrativa',
      significado:
        'tipo de negociación que busca beneficios mutuos entre proveedor e institución, priorizando relaciones sostenibles y acuerdos colaborativos.',
    },
    {
      termino: 'Normativa INVIMA',
      significado:
        'conjunto de disposiciones técnicas y sanitarias emitidas por el Instituto Nacional de Vigilancia de Medicamentos y Alimentos, que regulan la fabricación, comercialización y registro de productos farmacéuticos.',
    },
    {
      termino: 'Registro sanitario',
      significado:
        'código emitido por el INVIMA que certifica que un medicamento o dispositivo cumple con los requisitos de calidad, seguridad y eficacia exigidos por la legislación colombiana.',
    },
    {
      termino: 'Resolución 1403 de 2007',
      significado:
        'normativa colombiana que regula los servicios farmacéuticos y define estándares técnicos para el funcionamiento de farmacias, droguerías y servicios de salud en general.',
    },
    {
      termino: 'Selección de proveedores',
      significado:
        'proceso mediante el cual una entidad analiza y elige al proveedor más adecuado con base en criterios técnicos, financieros, legales y logísticos previamente establecidos.',
    },
    {
      termino: 'Tipos de convocatoria',
      significado:
        'modalidades de contratación utilizadas para invitar a proveedores a presentar propuestas: licitación pública, invitación cerrada, contratación directa y convenios marco.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Contratación Pública – Colombia Compra Eficiente. (s.f.). Tienda Virtual del Estado Colombiano. Recuperado Julio 16, 2025, from',
      link: 'https://www.colombiacompra.gov.co/secop/tvec',
    },
    {
      referencia:
        'Congreso de Colombia. (1993). Ley 80 de 1993: Estatuto General de Contratación de la Administración Pública. Diario Oficial No. 41.094.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2007). Ley 1150 de 2007: Por medio de la cual se introducen medidas para la eficiencia y la transparencia en la Ley 80 de 1993. Diario Oficial No. 46.691.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2011). Ley 1438 de 2011: Por medio de la cual se reforma el Sistema General de Seguridad Social en Salud. Diario Oficial No. 47.957.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2015). Decreto 1082 de 2015: Decreto Único Reglamentario del Sector Administrativo de Planeación Nacional. Diario Oficial No. 49.523.',
      link: '',
    },
    {
      referencia:
        'Superintendencia Nacional de Salud. (s. f.). Cuide su salud, nosotros nos encargamos de proteger sus derechos. Recuperado de ',
      link:
        'https://www.supersalud.gov.co/es-co/Paginas/Oficina%20de%20Comunicaciones/campa%C3%B1as/que-es-la-supersalud/index.html',
    },
    {
      referencia:
        'Sistema Electrónico de Contratación Pública - SECOP. (s.f.). ¿Qué es SECOP II?. ',
      link: 'https://www.colombiacompra.gov.co/secop/secop-ii',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Christian Llano Villegas',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
