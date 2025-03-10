import OpticalFiber from "@icons/OpticalFiber.astro";
import Carrier from "@icons/Carrier.astro";
import Enterprise from "@icons/Enterprise.astro";
import Microwave from "@icons/Microwave.astro";
import RadioBase from "@icons/RadioBase.astro";
import Transmission from "@icons/Transmission.astro";
import Energy from "@icons/Energy.astro";

export const IconServicesMapper = (title: string) => {
  switch (title) {
    case "Fibra óptica":
      return OpticalFiber;
    case "Carrier":
      return Carrier;
    case "Enterprise":
      return Enterprise;
    case "Microondas":
      return Microwave;
    case "Radiobases":
      return RadioBase;
    case "Transmisión":
      return Transmission;
    case "Energía":
      return Energy;
    default:
      return null;
  }
};
