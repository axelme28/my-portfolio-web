import gif from "./assets/proyect-images/gif.jpeg";
import second from "./assets/proyect-images/hero-home.jpeg";
import third from "./assets/proyect-images/hero-info.jpeg";
import fourth from "./assets/proyect-images/hero-search.jpeg";
import fifth from "./assets/proyect-images/huero-register.jpeg";
import sixth from "./assets/proyect-images/huerto-admin.jpeg";
import seventh from "./assets/proyect-images/maleteando-food.jpeg";
import eighth from "./assets/proyect-images/maleteando-login.jpeg";
import ninth from "./assets/proyect-images/maletenado-home.jpeg";
import tenth from "./assets/proyect-images/meleteando-admin.jpeg";

export const DataPryects = [
    {
        title: "Maleteando por Mexico",
        text: "Proyecto de desarrollo de tesis de la Universidad, el cual consiste en una aplicación web orintada al turismo en México.El cual cuenta con una pagina web y un CMS para administrar los datos de la aplicación.",
        img: [
            {
                src: seventh,
                alt: "Maleteando por Mexico",
            },
            {
                src: eighth,
                alt: "Maleteando por Mexico",
            },
            {
                src: ninth,
                alt: "Maleteando por Mexico",
            },
            {
                src: tenth,
                alt: "Maleteando por Mexico",
            },
        ],
        link: "https://maleteando-por-mexico.herokuapp.com/maleteando/home",
        tags: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS", "Express", "Mysql"],
    },
    {
        title: "Huerto",
        text: "Proyecto de aplicaion web que almacena y gestiona los datos de las plantas de un huerto. La aplicación cuenta con una interfaz de usuario y una base de datos relacional para almacenar los datos de las plantas.",
        img: [
            {
                src: fourth,
                alt: "Huerto",
            },
            {
                src: fifth,
                alt: "Huerto",
            },
            {
                src: sixth,
                alt: "Huerto",
            },
        ],
        link: "https://huertoapp.netlify.app/",
        tags: ["HTML", "CSS", "JavaScript", "React", "java Spring Boot", "Mysql"],
    },
    {
        title: "Plataforma educativa",
        text: "Proyecto de una plataforma educativa tipo Microsoft Teams con equipos, tareas , alumnos y profesores. La aplicación cuenta con una interfaz de usuario para la plataforma y adicionalmete un CMS  para dar de alta alumnos, profesores y equipos.",
        img: "https://via.placeholder.com/300x200",
        link: "https://via.placeholder.com/300x200",
        tags: ["HTML", "CSS", "JavaScript", "React", "NodeJS", "Express", "Mysql"],
    },
    {
        title: "Hospital",
        text: "Proyecto de aplicacion web que almacena y gestiona los datos de los pacientes de un hospital asi como historial medico, medicamentos y enfermedaes y ademas poder agendar citas. La aplicación cuenta con una interfaz de usuario y una base de datos relacional para almacenar los datos.",
        img: "https://via.placeholder.com/300x200",
        link: "https://via.placeholder.com/300x200",
        tags: ["HTML", "CSS", "JavaScript", "Node js", "Express", "Mysql"],
    },
    {
        title: "Heroes",
        text: "Proyecto de aplicacion web que permite visualizar los datos de los heroes de Marvel y DC ademas de un buscador de heroes. La aplicación cuenta con una interfaz de usuario.",
        img: [
            {
                src: second,
                alt: "Heroes",
            },
            {
                src: third,
                alt: "Heroes",
            },
        ],
        link: "https://via.placeholder.com/300x200",
        tags: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
        title: "Gifs",
        text: "Aplicaion web  de gifs en la que el usuario puede agregar una nueva categoría de gifs o buscar el gif que quiera, que puede buscar gifs que consume una API",
        img: [
            {
                src: gif,
                alt: "Gifs",
            },
        ],
        link: "https://via.placeholder.com/300x200",
        tags: ["HTML", "CSS", "JavaScript", "React"],
    },
];
