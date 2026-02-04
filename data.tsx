import {
    BookText,
    CodeSquare,
    HomeIcon,
    UserRound,
    Briefcase,
    Code,
    Layers,
    Smartphone,
    GitBranch,
    Mail,
    MessageCircle,
    Linkedin,
    Github
} from "lucide-react";


export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={25} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/matiasgonzalezautelli",
    },
    {
        id: 2,
        logo: <Github size={25} strokeWidth={1} />,
        src: "https://github.com/Matute08",
    },
    {
        id: 3,
        logo: <Mail size={25} strokeWidth={1} />,
        src: "mailto:matutegon97@gmail.com",
    },
    {
        id: 4,
        logo: <MessageCircle size={25} strokeWidth={1} />,
        src: "https://wa.me/542954545062",
    },

];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Sobre mí",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Servicios",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Portfolio",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataWorkExperience = [
    {
        id: 1,
        title: "Pasante Software Engineer Front-end",
        company: "Bitlogic S.A.",
        description: "Desarrollo de interfaces para Teclab, plataforma educativa líder con +500.000 estudiantes en Argentina, Chile y México. Responsable de migrar componentes legacy de Vue 2 a Vue 3, implementar nuevas funcionalidades y gestionar despliegues en ambientes Dev, QA y Producción utilizando AWS CodeCommit.",
        date: "Junio 2025 - Actualidad",
        technologies: ["Vue.js 2 & 3", "JavaScript", "SCSS", "Git", "AWS CodeCommit", "JIRA"],
    },
];

export const dataAboutPage = [
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

export const serviceData = [
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

export const dataPortfolio = [
    {
        id: 1,
        title: "Amigos Peludos",
        image: "/images/projects/amigos-peludos/amigosPeludos.jpg",
        description: "Proyecto Final de Ingeniería en Sistemas. Plataforma para adopción y búsqueda de mascotas perdidas con modelo de Visión Artificial (Hugging Face) para reconocimiento mediante imágenes.",
        urlGithub: "https://github.com/Matute08/ProyectoFinal_ISI_UTN_FRC_AmigosPeludos",
        urlDemo: "https://amigos-peludos.vercel.app/",
        tags: ["Vue.js", "Python", "IA", "Hugging Face"],
        featured: true,
    },
    {
        id: 2,
        title: "MisGastos",
        image: "/images/projects/mis-gastos/mis-gastos.jpg",
        description: "Aplicación personal de gestión financiera con dashboard interactivo, control de gastos mensuales, categorización y visualización de datos.",
        urlGithub: "https://github.com/Matute08/MisGastos",
        urlDemo: "https://mis-gastos-phi.vercel.app/",
        tags: ["React", "Next.js", "Dashboard"],
        featured: true,
    },
    {
        id: 3,
        title: "Rifas Zapataye",
        image: "/images/projects/rifas-zapataye/rifas-zapataye.jpg",
        description: "Sistema de sorteos para mi equipo de fútbol. Gestión de rifas semestrales con interfaz intuitiva para carga de participantes y sorteo animado.",
        urlGithub: "https://github.com/Matute08/rifas-zapataye",
        urlDemo: "https://rifas-zapataye.vercel.app/",
        tags: ["React", "Vercel"],
        featured: false,
    },
    {
        id: 4,
        title: "BeFit",
        image: "/images/projects/befit/befit.jpg",
        description: "Mi primer proyecto real para un cliente. Sitio web para centro de entrenamiento funcional de amigos profesores de educación física.",
        urlGithub: "https://github.com/Matute08/BeFit",
        urlDemo: "https://matute08.github.io/BeFit/index.html",
        tags: ["HTML", "CSS", "JavaScript"],
        featured: false,
    },
    {
        id: 5,
        title: "BusCatDog",
        image: "/images/projects/buscatdog/buscatdog.jpg",
        description: "El origen de Amigos Peludos. Plataforma para publicar mascotas perdidas creada en CoderHouse que evolucionó en mi proyecto de tesis.",
        urlGithub: "https://github.com/Matute08/ProyectoFinal-DesarrolloWeb-CoderHouse",
        urlDemo: "https://matute08.github.io/ProyectoFinal-DesarrolloWeb-CoderHouse/index.html",
        tags: ["HTML", "CSS", "JavaScript"],
        featured: false,
    },
];


export const technicalSkillsFront = [
    {
        icon: <img src="/images/skills/html.png" alt="HTML" style={{ width: 25, height: 25 }} />,
        title: "HTML",
        number: 5,
    },
    {
        icon: <img src="/images/skills/css.png" alt="CSS" style={{ width: 25, height: 25 }} />,
        title: "CSS / SCSS",
        number: 5,
    },
    {
        icon: <img src="/images/skills/js.png" alt="JavaScript" style={{ width: 25, height: 25 }} />,
        title: "JavaScript",
        number: 4,
    },
    {
        icon: <img src="/images/skills/vue.png" alt="Vue.js" style={{ width: 25, height: 25 }} />,
        title: "Vue.js",
        number: 4,
    },
    {
        icon: <img src="/images/skills/react.png" alt="React" style={{ width: 25, height: 25 }} />,
        title: "React JS",
        number: 3,
    },
    {
        icon: <img src="/images/skills/tailwind.png" alt="Tailwind CSS" style={{ width: 25, height: 25 }} />,
        title: "Tailwind CSS",
        number: 3,
    },
];

export const technicalSkillsBack = [
    {
        icon: <img src="/images/skills/c.png" alt="C#" style={{ width: 25, height: 25 }} />,
        title: "C#",
        number: 3,
    },
    {
        icon: <img src="/images/skills/java.png" alt="Java" style={{ width: 25, height: 25 }} />,
        title: "Java",
        number: 2,
    },
    {
        icon: <img src="/images/skills/python.png" alt="Python" style={{ width: 25, height: 25 }} />,
        title: "Python",
        number: 2,
    },
    {
        icon: <img src="/images/skills/sql.png" alt="SQL" style={{ width: 25, height: 25 }} />,
        title: "SQL Server / MySQL",
        number: 3,
    },
];

export const technicalSkillsTools = [
    {
        icon: <img src="/images/skills/git.png" alt="Git" style={{ width: 25, height: 25 }} />,
        title: "Git",
        number: 4,
    },
    {
        icon: <img src="/images/skills/aws.png" alt="AWS" style={{ width: 25, height: 25 }} />,
        title: "AWS CodeCommit",
        number: 3,
    },
    {
        icon: <img src="/images/skills/jira.png" alt="JIRA" style={{ width: 25, height: 25 }} />,
        title: "JIRA",
        number: 3,
    },
    {
        icon: <img src="/images/skills/scrum.png" alt="SCRUM" style={{ width: 25, height: 25 }} />,
        title: "SCRUM",
        number: 4,
    },
];

export const softSkills = [
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
