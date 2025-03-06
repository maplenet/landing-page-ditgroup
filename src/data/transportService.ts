import { IconTransportMapper } from "@utils/iconTransportMapper";

export const transportService = [
  {
    title: "Almacenaje",
    description:
      "Contamos con un servicio de almacenaje seguro y accesible para tu negocio, con alquiler de espacio por metro cuadrado y serenaje de 24 horas al día los siete días de la semana.",
    icon: IconTransportMapper("Almacenaje"),
  },
  {
    title: "Inventario",
    description:
      "Si no cuentas con el tiempo o el personal para realizar el inventariado de tu mercancía, te ofrecemos un trabajo profesional y sistematizado para mantener el orden de tus productos.",
    icon: IconTransportMapper("Inventario"),
  },
  // { title: "Empaquetado", icon: IconTransportMapper("Empaquetado") },
  // { title: "Courrier", icon: IconTransportMapper("Courrier") },
  // {
  //   title: "Puerta a puerta",
  //   icon: IconTransportMapper("Puerta a puerta"),
  // },
  {
    title: "Carga",
    description:
      "Contamos con equipo completo para realizar el transporte de carga de sus productos y mercancías según las necesidades específicas que requiera.",
    icon: IconTransportMapper("Carga"),
  },
  {
    title: "Distribución",
    description:
      "Nuestros camiones se encargan de hacer la entrega de sus productos o mercancías directamente desde su proveedor o hasta sus clientes.",
    icon: IconTransportMapper("Distribución"),
  },
];
