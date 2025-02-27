import Design from "@icons/Design.astro";
import Planification from "@icons/Planification.astro";
import Management from "@icons/Management.astro";
import Execution from "@icons/Execution.astro";
import Deliver from "@icons/Deliver.astro";

import Trust from "@icons/Trust.astro";
import ExecuteProjects from "@icons/ExecuteProjects.astro";
import TimeEfficiency from "@icons/TimeEfficiency.astro";
import ResourceOptimization from "@icons/ResourceOptimization.astro";
import Availability from "@icons/Availability.astro";


export const IconHowDoWeworkAboutMapper = (title: string) => {
  switch (title) {
    case "Diseñamos":
      return Design;
    case "Planificamos":
      return Planification;
    case "Gestionamos":
      return Management;
    case "Ejecutamos":
      return Execution;
    case "Entregamos":
      return Deliver;
    default:
      return null;
  }
};

export const IconValuePropositionMapper = (title: string) => {
  switch (title) {
    case "Confianza":
      return Trust;
    case "Ejecución":
      return ExecuteProjects;
    case "Eficiencia":
      return TimeEfficiency;
    case "Optimización":
      return ResourceOptimization;
    case "Disponibilidad":
      return Availability;
    default:
      return null;
  }
};