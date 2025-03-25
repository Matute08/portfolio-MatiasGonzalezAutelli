import {
    BookText,
    CodeSquare,
    HomeIcon,
    UserRound,
    Linkedin,
    Twitter,
    Rss,
    Twitch,
    Youtube,
    Crop,
    Pencil,
    Computer,
    Book,
    Rocket,
    Speech,
    Mail,
    X,
    MessageCircle,
} from "lucide-react";
import { AiFillHtml5, AiOutlineJavaScript } from "react-icons/ai";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={25} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/matiasgonzalezautelli",
    },
    {
        id: 2,
        logo: <Mail size={25} strokeWidth={1} />,
        src: "https://mailto:matutegon97@gmail.com",
    },
    {
        id: 3,
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
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // {
    //     id: 5,
    //     title: "Home",
    //     icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    //     link: "/testimonials",
    // },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Ingenieria en Sistemas de Información", 
        subtitle: "UTN - Facultad Regional Córdoba",
        description:
            "Estudiante de Ingeniería en Sistemas de Información con 4 finales restantes y un promedio de 8,42.",
        date: "02/2017 - En curso",
    },
    {
        id: 2,
        title: "Desarrollador Front-end",
        subtitle: "CoderHouse",
        description:
            "Finalice con éxito los cursos de: Desarrollo Web, JavaScript y React JS",
        date: "08/22 - 03/23",
    },
    {
        id: 3,
        title: "Bachillerato en Ciencias Sociales",
        subtitle: "Colegio Clemente Jose Andrada - Santa Rosa La Pampa",
        description:
            "Estudios secundarios completos con orientación en Ciencias Sociales.",
        date: "03/10 - 12/15",
    },
    // {
    //     id: 4,
    //     title: "Prácticas Grado",
    //     subtitle: "WebWizards Inc.",
    //     description:
    //         "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
    //     date: "Mar 2018",
    // },
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <img src="/tailwind.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title: "Branding",
        description:
            "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description:
            "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description:
            "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description:
            "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description:
            "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
];


export const technicalSkillsFront = [
    {
        icon: <img src="/html.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title: "HTML",
        description: "Descripcion del uso de HTML",
        number: 5,
    },
    {
        icon: <img src="/css.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title: "CSS",
        number: 5,
    },
    {
        icon:<img src="/js.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title: "JavaScript",
        number: 3,
    },
    {
        icon: <img src="/react.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title: "React JS",
        number: 3,
    },
    {
        icon: <img src="/bootstrap.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title: "Bootstrap",
        number: 3,
    },
    {
        icon: <img src="/tailwind.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title: "Tailwind CSS",
        number: 3,
    },
];
export const technicalSkillsBack = [
    {
        icon: <img src="/c.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title: "C#",
        number: 3,

        
    },
    {
        icon: <img src="/sql.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title: "SQL",
        number: 3,

        
    },
    {
        icon: <img src="/java.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title:"Java",
        number: 2,

        
    },  
];
export const technicalSkillsProductivity = [
    {
        icon: <img src="/git.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title: "Git",
        number: 4,

    },
    {
        icon: <img src="/excel.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title: "Excel",
        number: 4,

    },
    {
        icon: <img src="/word.png" alt="HTML Icon" style={{ width: 25, height: 25 }} />,
        title: "Word",
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
        title: "Metodologias Agiles",
    },
    {
        title: "SCRUM",
    },
    {
        title: "Adaptabilidad",
    },
];

// export const dataTestimonials = [
//     {
//         id: 1,
//         name: "George Snow",
//         description:
//             "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
//         imageUrl: "/profile1.png",
//     },
//     {
//         id: 2,
//         name: "Juan Pérez",
//         description:
//             "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
//         imageUrl: "/profile2.png",
//     },
//     {
//         id: 3,
//         name: "María García",
//         description:
//             "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
//         imageUrl: "/profile3.png",
//     },
//     {
//         id: 4,
//         name: "Laura Snow",
//         description:
//             "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
//         imageUrl: "/profile4.png",
//     },
//     {
//         id: 5,
//         name: "Carlos Sánchez",
//         description:
//             "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
//         imageUrl: "/profile5.png",
//     },
//     {
//         id: 6,
//         name: "Antonio Martínez",
//         description:
//             "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
//         imageUrl: "/profile6.png",
//     },
// ];
