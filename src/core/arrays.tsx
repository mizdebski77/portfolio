import { FolderOpenDot, Mail } from "lucide-react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { SiMui } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiSass } from "react-icons/si";

export const socialLinks = [
    { name: "GitHub", href: "https://github.com/mizdebski77", bg: "#242551" },
    {
        name: "Facebook",
        href: "https://www.facebook.com/marcin.izdebski.7528",
        bg: "#1476ff",
    },
    { name: "Email", href: "mailto:mizdebski123@gmail.com", bg: "#164a4a" },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/marcin-izdebski-63b7a026a/",
        bg: "#14adff",
    },
];

export const heroButtons = [
    { name: "Contact", type: "Frontend", icon: Mail },
    { name: "Projects", type: "Frontend", icon: FolderOpenDot },
];

export const projectsLinks = [
    { title: "Web Applications", type: "Web Applications" },
    { title: "Mobile Applications", type: "Mobile Applications" },
    { title: "Landing Pages", type: "Landing Pages" },
];

export const techLinks = [
    { title: "Frontend Technologies", type: "Frontend" },
    { title: "Backend Technologies", type: "Backend" },
    { title: "Teamwork", type: "Teamwork" },
    { title: "UI / UX", type: "UI" },
];

export const projects = [
    {
        id: 1,
        name: "Tatry Razem",
        description: "(Application under construction).",
        type: "Web Applications",
        tags: [
            "Next.js",
            "Redux",
            "Typescript",
            "Supabase",
            "Git",
            "Tanstack-query",
        ],
        thumbnaill:
            "https://jeiqdktodpczzgzkiocp.supabase.co/storage/v1/object/public/Portfolio/YCM.png",
        liveUrl: "https://ycm-orcin.vercel.app/",
        codeUrl: "",
    },

    {
        id: 2,
        name: "Trek-Shop",
        type: "Web Applications",
        description:
            "Trek Shop is an online store that relies on its own API written in Node.js and hosted online, making it accessible to users. This project was created with outdoor enthusiasts in mind, offering a rich variety of products, including climbing equipment, outdoor clothing, and more.",
        tags: [
            "React",
            "Redux",
            "Typescript",
            "Styled-components",
            "Git",
            "Tanstack-query",
        ],
        image: "https://jeiqdktodpczzgzkiocp.supabase.co/storage/v1/object/public/Portfolio/TrekShop.png",
        liveUrl: "https://mizdebski77.github.io/Trek-Shop/",
        codeUrl: "https://github.com/mizdebski77/Trek-Shop",
    },

    {
        id: 3,
        name: "Easy-Employ",
        type: "Web Applications",
        description:
            "Easy Employ is a portal dedicated to employers and those looking for a job. Application under construction.",
        tags: [
            "React",
            "Typescript",
            "Redux",
            "Styled-components",
            "Git",
            "Tanstack-query",
        ],
        image: "https://jeiqdktodpczzgzkiocp.supabase.co/storage/v1/object/public/Portfolio/EasyEmploy.png",
        liveUrl: "https://mizdebski77.github.io/Easy-Employ/",
        codeUrl: "https://github.com/mizdebski77/Easy-Employ",
    },

    {
        id: 4,
        name: "Movie Browser",
        type: "Web Applications",
        description:
            "The Movies Browser is a platform you can easily search for your favorite movies, popular actors and actresses. Also you can find more information about the cast.",
        tags: [
            "React",
            "Redux",
            "Redux-saga",
            "Javascript",
            "Styled-components",
            "Git",
        ],
        image: "https://jeiqdktodpczzgzkiocp.supabase.co/storage/v1/object/public/Portfolio/MovieBorwser.png",
        liveUrl: "https://mizdebski77.github.io/Movie-Browser/",
        codeUrl: "https://github.com/mizdebski77/Movie-Browser",
    },

    {
        id: 7,
        name: "Wheather App",
        type: "Web Applications",
        description:
            'The weather app is a one-page application that allows you to check the current weather in any city on earth. The app fetches data from "https://www.weatherapi.com/".',
        tags: [
            "React",
            "Redux",
            "Javascript",
            "Styled-components",
            "Git",
            "Redux-saga",
        ],
        image: "https://jeiqdktodpczzgzkiocp.supabase.co/storage/v1/object/public/Portfolio/WeatherApp.png",
        liveUrl: "https://mizdebski77.github.io/Weather-React-Redux-App/",
        codeUrl: "https://github.com/mizdebski77/Weather-React-Redux-App",
    },

    {
        id: 8,
        name: "Crud App",
        type: "Web Applications",
        description:
            "The application was developed as per the directive from Futurum Technology. Throughout the project, I collaborated with a seasoned Figma designer and a proficient backend developer. The link provided showcases the basic version of the application, as the complete version was exclusively delivered to the company. The purpose of the app is to demonstrate the ability to develop a CRUD (Create, Read, Update, Delete) application for campaign management.",
        tags: ["Angular", "Scss", "Javascript", "Html", "Git"],
        image: "https://jeiqdktodpczzgzkiocp.supabase.co/storage/v1/object/public/Portfolio/Crud.png",
        liveUrl: "https://crudaplication.netlify.app/",
        codeUrl: "",
    },

    {
        id: 9,
        name: "To do app",
        type: "Web Applications",
        description:
            '"To do list" is a web application which allows you to create a list of tasks that need to be done in the near future. At the top of application you can see a navigation toolbar which can take you to tasks page or to an author page.',
        tags: ["React", "Styled-components", "Redux", "Redux saga", "Git"],
        image: "https://jeiqdktodpczzgzkiocp.supabase.co/storage/v1/object/public/Portfolio/tasksList.png",
        liveUrl: "https://mizdebski77.github.io/Tasks-List-ReactJS/",
        codeUrl: "https://github.com/mizdebski77/Tasks-List-ReactJS",
    },

    // {
    //     id: 10,
    //     name: 'Dish Form',
    //     type: "Web Applications",
    //     description: 'Dish Form is a simple project that enables users to upload information about specific dishes to a website. The form includes fields such as dish name, preparation time, dish type (pizza, soup, or sandwich to choose from), as well as details depending on the selected type, such as the number of slices, diameter, spiciness , or number of bread slices',
    //     tags: [
    //         'React',
    //         'Styled-components',
    //         'Redux',
    //         'Html & Css',
    //         'Git',
    //     ],
    //     image: 'https://jeiqdktodpczzgzkiocp.supabase.co/storage/v1/object/public/Portfolio/Dish%20form.png',
    //     liveUrl: 'https://mizdebski77.github.io/Dish-Form/',
    //     codeUrl: 'https://github.com/mizdebski77/Dish-Form?tab=readme-ov-file',
    // },

    {
        id: 12,
        name: "Think1st training app",
        type: "Web Applications",
        description:
            "The training application was developed exclusively for Think1st, with this being a demo version as the full version was tailored specifically for the company`s needs. Throughout the project, I collaborated closely with a seasoned Figma designer and an expert backend developer. This project is a web application designed to facilitate sign-ups for training sessions. Users can provide necessary information such as their name, surname, email address, and photo, and select a training day and time. The application also fetches holiday data from the Ninja API to exclude Sundays and public holidays as training days, marking them as unavailable for selection and providing information about the holidays next to their names.",
        tags: ["React", "Tailwind css", "Tanstack query", "Api", "Git"],
        image: "https://jeiqdktodpczzgzkiocp.supabase.co/storage/v1/object/public/Portfolio/ta.png",
        liveUrl: "https://mizdebski77.github.io/Training-App/",
        codeUrl: "",
    },
];

export const skills = [
    {
        type: "Frontend",
        icon: <FaReact style={{ margin: "0 auto", color: "#61DAFB" }} />,
        text: <span style={{ margin: "0 auto", color: "#61DAFB" }}>React</span>,
    },
    {
        type: "Frontend",
        icon: <SiRedux style={{ margin: "0 auto", color: "#764ABC" }} />,
        text: <span style={{ margin: "0 auto", color: "#764ABC" }}>Redux</span>,
    },
    {
        type: "Frontend",
        icon: <SiNextdotjs style={{ margin: "0 auto", color: "#FFFFFF" }} />,
        text: (
            <span style={{ margin: "0 auto", color: "#FFFFFF" }}>Next.js</span>
        ),
    },
    {
        type: "Frontend",
        icon: (
            <TbBrandReactNative
                style={{ margin: "0 auto", color: "#61DAFB" }}
            />
        ),
        text: (
            <span style={{ margin: "0 auto", color: "#61DAFB" }}>
                React Native
            </span>
        ),
    },
    {
        type: "Frontend",
        icon: <FaHtml5 style={{ margin: "0 auto", color: "#E34F26" }} />,
        text: <span style={{ margin: "0 auto", color: "#E34F26" }}>HTML5</span>,
    },
    {
        type: "Frontend",
        icon: <FaCss3 style={{ margin: "0 auto", color: "#1572B6" }} />,
        text: <span style={{ margin: "0 auto", color: "#1572B6" }}>CSS3</span>,
    },
    {
        type: "Frontend",
        icon: <SiTypescript style={{ margin: "0 auto", color: "#3178C6" }} />,
        text: (
            <span style={{ margin: "0 auto", color: "#3178C6" }}>
                TypeScript
            </span>
        ),
    },
    {
        type: "Frontend",
        icon: (
            <IoLogoJavascript style={{ margin: "0 auto", color: "#F7DF1E" }} />
        ),
        text: (
            <span style={{ margin: "0 auto", color: "#F7DF1E" }}>
                JavaScript
            </span>
        ),
    },
    {
        type: "Frontend",
        icon: <SiTailwindcss style={{ margin: "0 auto", color: "#06B6D4" }} />,
        text: (
            <span style={{ margin: "0 auto", color: "#06B6D4" }}>
                Tailwind CSS
            </span>
        ),
    },
    {
        type: "Frontend",
        icon: (
            <SiStyledcomponents
                style={{ margin: "0 auto", color: "#DB7093" }}
            />
        ),
        text: (
            <span style={{ margin: "0 auto", color: "#DB7093" }}>
                Styled Components
            </span>
        ),
    },
    {
        type: "Frontend",
        icon: <SiMui style={{ margin: "0 auto", color: "#007FFF" }} />,
        text: (
            <span style={{ margin: "0 auto", color: "#007FFF" }}>
                Material-UI
            </span>
        ),
    },
    {
        type: "Frontend",
        icon: <SiSass style={{ margin: "0 auto", color: "#CC6699" }} />,
        text: <span style={{ margin: "0 auto", color: "#CC6699" }}>Sass</span>,
    },

    {
        type: "Backend",
        icon: <FaNodeJs style={{ margin: "0 auto", color: "#339933" }} />,
        text: (
            <span style={{ margin: "0 auto", color: "#339933" }}>Node.js</span>
        ),
    },
    {
        type: "Backend",
        icon: <IoLogoFirebase style={{ margin: "0 auto", color: "#FFCA28" }} />,
        text: (
            <span style={{ margin: "0 auto", color: "#FFCA28" }}>Firebase</span>
        ),
    },
    {
        type: "Backend",
        icon: <SiSupabase style={{ margin: "0 auto", color: "#3ECF8E" }} />,
        text: (
            <span style={{ margin: "0 auto", color: "#3ECF8E" }}>Supabase</span>
        ),
    },

    {
        type: "UI",
        icon: <FaFigma style={{ margin: "0 auto", color: "#F24E1E" }} />,
        text: <span style={{ margin: "0 auto", color: "#F24E1E" }}>Figma</span>,
    },
    {
        type: "UI",
        icon: (
            <SiAdobephotoshop style={{ margin: "0 auto", color: "#31A8FF" }} />
        ),
        text: (
            <span style={{ margin: "0 auto", color: "#31A8FF" }}>
                Adobe Photoshop
            </span>
        ),
    },
    {
        type: "UI",
        icon: (
            <SiAdobepremierepro
                style={{ margin: "0 auto", color: "#9999FF" }}
            />
        ),
        text: (
            <span style={{ margin: "0 auto", color: "#9999FF" }}>
                Premiere Pro
            </span>
        ),
    },
    {
        type: "UI",
        icon: (
            <SiAdobeaftereffects
                style={{ margin: "0 auto", color: "#9999FF" }}
            />
        ),
        text: (
            <span style={{ margin: "0 auto", color: "#9999FF" }}>
                After Effects
            </span>
        ),
    },

    {
        type: "Teamwork",
        icon: <FaGithub style={{ margin: "0 auto", color: "#FFFFFF" }} />,
        text: (
            <span style={{ margin: "0 auto", color: "#FFFFFF" }}>GitHub</span>
        ),
    },
    {
        type: "Teamwork",
        icon: <FaJira style={{ margin: "0 auto", color: "#0052CC" }} />,
        text: <span style={{ margin: "0 auto", color: "#0052CC" }}>Jira</span>,
    },
    {
        type: "Teamwork",
        icon: <DiScrum style={{ margin: "0 auto", color: "#6A1B9A" }} />,
        text: <span style={{ margin: "0 auto", color: "#6A1B9A" }}>Scrum</span>,
    },
];
