import Recruitment from "@icons/Recruitment.astro";
import Evaluation from "@icons/Evaluation.astro";
import Selection from "@icons/Selection.astro";
import Payroll from "@icons/Payroll.astro";
import Hiring from "@icons/Hiring.astro";

export const IconOutsourcingMapper = (title: string) => {
  switch (title) {
    case "Reclutamiento":
      return Recruitment;
    case "Evaluación":
      return Evaluation;
    case "Selección":
      return Selection;
    case "Contratación":
      return Hiring;
    case "Administración de nómina":
      return Payroll;
    default:
      return null;
  }
};
