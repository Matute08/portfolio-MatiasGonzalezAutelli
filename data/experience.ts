import type { WorkExperience, Education } from "@/types";

export const dataWorkExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Pasante Software Engineer Front-end",
    company: "Bitlogic S.A.",
    description: "Desarrollo de interfaces para Teclab, plataforma educativa líder con +500.000 estudiantes en Argentina, Chile y México. Responsable de migrar componentes legacy de Vue 2 a Vue 3, implementar nuevas funcionalidades y gestionar despliegues en ambientes Dev, QA y Producción utilizando AWS CodeCommit.",
    date: "Junio 2025 - Actualidad",
    technologies: ["Vue.js 2 & 3", "JavaScript", "SCSS", "Git", "AWS CodeCommit", "JIRA"],
  },
];

export const dataAboutPage: Education[] = [
  {
    id: 1,
    title: "Ingeniería en Sistemas de Información",
    subtitle: "UTN - Facultad Regional Córdoba",
    description:
      "Cursado finalizado. 2 finales restantes para obtener el título de Ingeniero en Sistemas de Información.",
    date: "02/2017 - Actual",
  },
  {
    id: 2,
    title: "Desarrollador Front-end",
    subtitle: "CoderHouse",
    description:
      "Finalicé con éxito los cursos de: Desarrollo Web, JavaScript y React JS.",
    date: "08/2022 - 03/2023",
  },
  {
    id: 3,
    title: "Bachillerato en Ciencias Sociales",
    subtitle: "Colegio Clemente José Andrada - Santa Rosa, La Pampa",
    description:
      "Estudios secundarios completos con orientación en Ciencias Sociales.",
    date: "03/2010 - 12/2015",
  },
];

