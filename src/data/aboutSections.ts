import WhoWeAreIcon from "@icons/WhoWeAre.astro";
import MissionIcon from "@icons/Mission.astro";
import VisionIcon from "@icons/Vision.astro";
import { IconHowDoWeworkAboutMapper, IconValuePropositionMapper } from "@utils/iconAboutMapper";

export const usAboutSection = [
  {
    icon: WhoWeAreIcon,
    title: "¿Quiénes somos?",
    description: ["Somos una sociedad de ingenieros calificados con vasta experiencia, brindamos soluciones eficaces y profesionales en telecomunicaciones.", "Aliados comercialmente con multinacionales, buscamos convertirnos en socios estratégicos de nuestros clientes a través de nuestros servicios de calidad, nuestras soluciones tecnológicas resolverán las necesidades de tu empresa."]
  },
  {
    icon: MissionIcon,
    title: "Misión",
    description: ["Resolver las problemáticas tecnológicas de nuestros clientes brindando respuestas eficaces y profesionales para ayudarles a alcanzar su potencial con soluciones integrales. Satisfacer las necesidades tecnológicas de nuestros clientes brindándoles soluciones eficaces, profesionales e integrales, para ayudarles a alcanzar su máximo potencial como empresa."]
  },
  {
    icon: VisionIcon,
    title: "Visión",
    description: ["Ser el mayor referente a nivel nacional e internacional quebrinde soluciones de calidad en nuestros servicios en telecomunicaciones."]
  }
];

export const ourProfessionalsAboutSection = [
  {
    description: "Se nos complica mostrar todo el valor humano con el que contamos, ingenieros capacitados en rubros especíﬁcos, técnicos con bastante experiencia en el área de las telecomunicaiones, administrativos con alta capacidad de gestión en proyectos y trabajo que día a día entregan todo de sí para conseguir los objetivos planteados como empresa."
  }
];

export const howDoWeWorkAboutSection = [
  { title: "Diseñamos", icon: IconHowDoWeworkAboutMapper("Diseñamos") },
  { title: "Planificamos", icon: IconHowDoWeworkAboutMapper("Planificamos") },
  { title: "Gestionamos", icon: IconHowDoWeworkAboutMapper("Gestionamos") },
  { title: "Ejecutamos", icon: IconHowDoWeworkAboutMapper("Ejecutamos") },
  { title: "Entregamos", icon: IconHowDoWeworkAboutMapper("Entregamos")},
];

export const valuePropositionAboutSection = [
  { title: "Confianza", icon: IconValuePropositionMapper("Confianza") },
  { title: "Ejecución", icon: IconValuePropositionMapper("Ejecución") },
  { title: "Eficiencia", icon: IconValuePropositionMapper("Eficiencia") },
  { title: "Optimización", icon: IconValuePropositionMapper("Optimización") },
  { title: "Disponibilidad", icon: IconValuePropositionMapper("Disponibilidad")},
];