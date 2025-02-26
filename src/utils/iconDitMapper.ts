import DitCommercial from "@icons/DitCommercial.astro";
import DitOutsourcing from "@icons/DitOutsourcing.astro";
import DitTransport from "@icons/DitTransport.astro";

export const IconDitMapper = (title: string) => {
  switch (title) {
    case "Transport":
      return DitTransport;
    case "Outsourcing":
      return DitOutsourcing;
    case "Commercial":
      return DitCommercial;
    default:
      return null;
  }
};
