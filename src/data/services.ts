type Service = {
  title: string;
  description: string[];
  list?: string[] | string[][];
};

export const services: Service[] = [
  {
    title: "Fibra óptica",
    description: [
      "Con la tendencia del mercado en el uso de la Fibra Óptica, contamos con personal de experiencia, equipos y logística listos para ejecutar proyectos de gran envergadura.",
      "Entre nuestro servicio que ofrecemos, listamos los siguientes:",
    ],
    list: [
      ["Survey y Diseño de Redes."],
      [
        "Gestión de permisos con entidades públicas citada, por ejemplo: Eléctricas, ABT, ABC, Alcaldías y Gobernaciones.",
      ],
      [
        "Implementación y construcción de redes punto a punto, Multipunto FTTH, FTTB (edificios) y conexiones a abonados.",
      ],
      ["Diseño e implementación de redes HFC."],
      ["Certificados de Redes:"],
      [
        "Mediciones OTDR.",
        "Mediciones de Potencia.",
        "Mediciones de PMD.",
        "Mediciones de RFC.",
      ],
      ["Documentación AsBuilt del Enlace o Sitio"],
    ],
  },
  {
    title: "Carrier",
    description: [
      "Soluciones Carrier brinda servicios en el rubro de las telecomunicaciones.",
      "Contamos con amplias unidades de negocio pensadas para resolver las problemáticas de nuestros operadores.",
      "A través de nuestros diferentes servicios de alto valor agregado, buscamos convertirnos en socios estratégicos de nuestros clientes para desarrollar e integrar las soluciones tecnológicas más adecuadas.",
    ],
  },
  {
    title: "Enterprise",
    description: [
      "Soluciones Enterprise es el mejor aliado para las empresas que requieren servicios en telecomunicaciones en el área corporativa, ayudándolos a mejorar las comunicaciones en sus negocios e incrementar su producción.",
      "Nuestras áreas fueron creadas para ofrecerle el mejor servicio de acuerdo a sus necesidades y ofrecer nuestra experiencia en soluciones tecnológicas como valor agregado.",
    ],
  },
  {
    title: "Microondas",
    description: [
      "Nuestros profesionales cuentan con la destreza y la experiencia necesaria para el montaje, instalación, integración y mantenimiento de equipos de telefonía celular, reduciendo riesgos al cumplir estrictamente las normas de seguridad industrial.",
      "Servicios ofrecidos:",
    ],
    list: [
      "Site Survey, relevamiento y diseño de estaciones base de telefonía celular.",
      "Instalación, expansión, SWAP y desmontaje de equipos Radio Bases, antenas, Dual-Band.",
      "Instalación, reemplazo y desmontaje de Radio Bases completas.",
      "Instalación, SWAP y desmontaje de Micro BTS.",
      "Instalación de BSS/RNC.",
      "Migración de tecnologías.",
      "Drive Test de Radio Frecuencia.",
      "Site Survey LOS (Line Of Sight) y relevamiento de estaciones para implementación de nuevos equipos.",
      "Comisionamiento, instalación, expansión y reemplazo de equipos de microondas de las series RTN300-900.",
      "Instalación, alineamiento, swap, desmontaje y reemplazo de enlaces de microondas en diferentes escenarios a nivel nacional.",
      "Migración de servicio y tecnologías.",
      "Adecuación en torres, instalación y movimientos de soportes.",
    ],
  },
  {
    title: "Radiobases",
    description: [
      "Nuestra empresa se distingue por su profundo conocimiento de las últimas tecnologías en radiobases y su capacidad para adaptarse a las necesidades particulares de cada cliente, ya sea en entornos urbanos o rurales. Trabajamos con equipos de última generación y seguimos los más altos estándares de calidad y seguridad para garantizar redes de alto rendimiento y confiabilidad.",
      "En DIT Group, entendemos la importancia de mantener a nuestros clientes conectados en todo momento. Por eso, proporcionamos soluciones personalizadas que maximicen la eficiencia y el alcance de sus redes de telecomunicaciones, asegurando una cobertura óptima y continua. Además, ofrecemos servicios de monitoreo, mantenimiento y actualización constante para que su infraestructura de radiobases esté siempre a la vanguardia.",
    ],
  },
  {
    title: "Transmisión",
    description: [
      "La tecnología actual nos ha dirigido a interconectar todos nuestros centros de operaciones. Asumiendo el deber de colaborar a nuestros clientes, contamos con personal capacitado para realizar instalaciones y soporte en el área de transmisión.",
      "Actividades que se describen:",
    ],
    list: [
      "Instalación y configuración de Router / Switch, instalación de redes LAN y MAN.",
      "Instalación y configuración de equipos OTDR para verificación del estado de la RED y QoS.",
      "Instalación y configuración de equipos de alto tráfico DWDM.",
      "Instalación y adecuaciones para gabinetes y rack.",
      "Certificación de UTP, FTP y STP.",
    ],
  },
  {
    title: "Energía",
    description: [
      "Contamos con un grupo de profesionales expertos y certificados en el manejo, instalación y mantenimiento de equipos de energía en el área de telecomunicaciones",
      "Nuestras áreas de negocio son las siguientes:",
    ],
    list: [
      "Site Survey y diseño de nuevos sistemas de energía Híbridos",
      "Instalación y Comisionamiento de UPS (Sistemas de Alimentación Ininterrumpida)",
      "Instalación y Comisionamiento de Diesel Generador",
      "Montaje y puesta en marcha de Paneles Solares, en diferentes escenarios",
      "Comisionamiento e instalación de gabinetes de energía",
      "Instalación de bancos de baterías",
    ],
  },
];
