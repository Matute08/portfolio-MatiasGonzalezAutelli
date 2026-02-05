"use client";

import {
  Code,
  Layers,
  Smartphone,
  GitBranch,
} from "lucide-react";
import type { Service } from "@/types";

export const serviceData: Service[] = [
  {
    icon: <Code />,
    title: "Desarrollo Front-end",
    description:
      "Construcción de interfaces de usuario modernas utilizando Vue.js y React. Código limpio, componentes reutilizables y arquitectura escalable para proyectos de cualquier tamaño.",
  },
  {
    icon: <Layers />,
    title: "Integración con Back-end",
    description:
      "Conexión fluida entre el front-end y servicios REST/GraphQL. Experiencia integrando APIs complejas, manejo de estados y optimización de llamadas al servidor.",
  },
  {
    icon: <Smartphone />,
    title: "Mobile-First Design",
    description:
      "Desarrollo con enfoque mobile-first garantizando experiencias perfectas en cualquier dispositivo. Performance optimizado y accesibilidad incluida.",
  },
  {
    icon: <GitBranch />,
    title: "DevOps & Deployment",
    description:
      "Gestión profesional con Git, CI/CD pipelines y despliegues automatizados. Experiencia real en entornos de desarrollo, QA y producción.",
  },
];

