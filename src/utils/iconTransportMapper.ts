import Courrier from "@icons/Courrier.astro";
import Distribution from "@icons/Distribution.astro";
import DoorToDoor from "@icons/DoorToDoor.astro";
import Inventory from "@icons/Inventory.astro";
import Loader from "@icons/Loader.astro";
import Packed from "@icons/Packed.astro";
import Storage from "@icons/Storage.astro";

export const IconTransportMapper = (title: string) => {
  switch (title) {
    case "Almacenaje":
      return Storage;
    case "Inventario":
      return Inventory;
    case "Empaquetado":
      return Packed;
    case "Courrier":
      return Courrier;
    case "Puerta a puerta":
      return DoorToDoor;
    case "Carga":
      return Loader;
    case "Distribución":
      return Distribution;
    default:
      return null;
  }
};
