"use client";

import type { TechnicalSkill, SoftSkill } from "@/types";

export const technicalSkillsFront: TechnicalSkill[] = [
  {
    icon: <img src="/images/skills/html.png" alt="HTML" style={{ width: 25, height: 25 }} />,
    title: "HTML",
    level: "expert",
  },
  {
    icon: <img src="/images/skills/css.png" alt="CSS" style={{ width: 25, height: 25 }} />,
    title: "CSS / SCSS",
    level: "expert",
  },
  {
    icon: <img src="/images/skills/js.png" alt="JavaScript" style={{ width: 25, height: 25 }} />,
    title: "JavaScript",
    level: "advanced",
  },
  {
    icon: <img src="/images/skills/vue.png" alt="Vue.js" style={{ width: 25, height: 25 }} />,
    title: "Vue.js",
    level: "advanced",
  },
  {
    icon: <img src="/images/skills/react.png" alt="React" style={{ width: 25, height: 25 }} />,
    title: "React JS",
    level: "intermediate",
  },
  {
    icon: <img src="/images/skills/tailwind.png" alt="Tailwind CSS" style={{ width: 25, height: 25 }} />,
    title: "Tailwind CSS",
    level: "intermediate",
  },
];

export const technicalSkillsBack: TechnicalSkill[] = [
  {
    icon: <img src="/images/skills/c.png" alt="C#" style={{ width: 25, height: 25 }} />,
    title: "C#",
    level: "intermediate",
  },
  {
    icon: <img src="/images/skills/java.png" alt="Java" style={{ width: 25, height: 25 }} />,
    title: "Java",
    level: "intermediate",
  },
  {
    icon: <img src="/images/skills/python.png" alt="Python" style={{ width: 25, height: 25 }} />,
    title: "Python",
    level: "basic",
  },
  {
    icon: <img src="/images/skills/sql.png" alt="SQL" style={{ width: 25, height: 25 }} />,
    title: "SQL Server / MySQL",
    level: "intermediate",
  },
];

export const technicalSkillsTools: TechnicalSkill[] = [
  {
    icon: <img src="/images/skills/git.png" alt="Git" style={{ width: 25, height: 25 }} />,
    title: "Git",
    level: "advanced",
  },
  {
    icon: <img src="/images/skills/aws.png" alt="AWS" style={{ width: 25, height: 25 }} />,
    title: "AWS CodeCommit",
    level: "intermediate",
  },
  {
    icon: <img src="/images/skills/jira.png" alt="JIRA" style={{ width: 25, height: 25 }} />,
    title: "JIRA",
    level: "intermediate",
  },
  {
    icon: <img src="/images/skills/scrum.png" alt="SCRUM" style={{ width: 25, height: 25 }} />,
    title: "SCRUM",
    level: "advanced",
  },
];

export const technicalSkillsTesting: TechnicalSkill[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width={25} height={25} fill="#6B3F9E">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93A8 8 0 0 1 4 12a8 8 0 0 1 7-7.93V17.93zm2 0V4.07A8 8 0 0 1 20 12a8 8 0 0 1-7 7.93z" />
      </svg>
    ),
    title: "Vitest",
    level: "intermediate",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={25} height={25} fill="#69D3A7">
        <path d="M11.998 2C6.47 2 2 6.477 2 12c0 5.523 4.471 10 9.998 10 3.818 0 7.144-2.148 8.772-5.294l-4.288-2.12c-.803 1.493-2.398 2.52-4.318 2.52-2.655 0-4.802-2.177-4.802-4.854 0-2.677 2.147-4.854 4.802-4.854 1.963 0 3.63 1.144 4.408 2.78l4.19-2.397C18.942 4.278 15.716 2 11.998 2z" />
      </svg>
    ),
    title: "Cypress",
    level: "intermediate",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={25} height={25} fill="#45BA4B">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-5.5l-4-4 1.41-1.41L11 12.67l4.59-4.58L17 9.5l-6 6z" />
      </svg>
    ),
    title: "Playwright",
    level: "basic",
  },
];

export const softSkills: SoftSkill[] = [
  {
    title: "Comunicación efectiva",
  },
  {
    title: "Trabajo en equipo",
  },
  {
    title: "Metodologías Ágiles",
  },
  {
    title: "Resolución de problemas",
  },
  {
    title: "Adaptabilidad",
  },
  {
    title: "Inglés técnico",
  },
];

