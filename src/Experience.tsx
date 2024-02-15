import ShadcnIcon from "./assets/icons/shadcn.svg";
import ReactIcon from "./assets/icons/react.svg";
import AzureIcon from "./assets/icons/azure.svg";
import BunIcon from "./assets/icons/bun.svg";
import CSharpIcon from "./assets/icons/csharp.svg";
import CSSIcon from "./assets/icons/css.svg";
import DockerIcon from "./assets/icons/docker.svg";
import GithubIcon from "./assets/icons/github.svg";
import HTMLIcon from "./assets/icons/html.svg";
import Javascript from "./assets/icons/javascript.svg";
import MongoDBIcon from "./assets/icons/mongodb.svg";
import MUIIcon from "./assets/icons/mui.svg";
import MySQLIcon from "./assets/icons/mysql.svg";
import NetlifyIcon from "./assets/icons/netlify.svg";
import NodeJSIcon from "./assets/icons/nodejs.svg";
import PostgresqlIcon from "./assets/icons/postgresql.svg";
import PythonIcon from "./assets/icons/python.svg";
import ReduxIcon from "./assets/icons/redux.svg";
import SocketIoIcon from "./assets/icons/socketio.svg";
import TailwindCSSIcon from "./assets/icons/tailwind.svg";
import TypescriptIcon from "./assets/icons/typescript.svg";
import ViteIcon from "./assets/icons/vite.svg";
import MSSQLIcon from "./assets/icons/sql.svg";
import OpenAIIcon from "./assets/icons/openai.svg";
import CustomCard from './CustomCard';
import { Badge } from './components/ui/badge';


type TExperienceStack = {
    name: string;
    icon: string;
}

export type TExperience = {
    position: string;
    positionDetails: {
        company: string;
        year: string;
        location: string;
    },
    summary: {
        description: string;
        keyAchievements: string[];
    },
    stacks: TExperienceStack[]
}

export const technologies = {
    shadcn: {
        name: "Shadcn UI",
        icon: ShadcnIcon
    },
    react: {
        name: "React JS",
        icon: ReactIcon
    },
    azure: {
        name: "Azure",
        icon: AzureIcon
    },
    bunJs: {
        name: "Bun JS",
        icon: BunIcon
    },
    csharp: {
        name: "C#",
        icon: CSharpIcon
    },
    css: {
        name: "CSS",
        icon: CSSIcon
    },
    docker: {
        name: "Docker",
        icon: DockerIcon
    },
    github: {
        name: "Github",
        icon: GithubIcon
    },
    html: {
        name: "HTML",
        icon: HTMLIcon
    },
    javascript: {
        name: "Javascript",
        icon: Javascript
    },
    mongodb: {
        name: "MongoDB",
        icon: MongoDBIcon
    },
    mui: {
        name: "Material UI",
        icon: MUIIcon
    },
    mysql: {
        name: "MySQL",
        icon: MySQLIcon
    },
    sql: {
        name: "MSSQL",
        icon: MSSQLIcon
    },
    netlify: {
        name: "Netlify",
        icon: NetlifyIcon
    },
    nodeJs: {
        name: "Node JS",
        icon: NodeJSIcon
    },
    postgresql: {
        name: "Postgresql",
        icon: PostgresqlIcon
    },
    python: {
        name: "Python",
        icon: PythonIcon
    },
    redux: {
        name: "Redux",
        icon: ReduxIcon
    },
    socketio: {
        name: "Socket IO",
        icon: SocketIoIcon
    },
    tailwind: {
        name: "Tailwind CSS",
        icon: TailwindCSSIcon
    },
    typescript: {
        name: "Typescript",
        icon: TypescriptIcon
    },
    vite: {
        name: "Vite",
        icon: ViteIcon
    },
    openai: {
        name: "OpenAI",
        icon: OpenAIIcon
    },
}



const Experience = () => {

    const experiences: TExperience[] = [
        {
            position: "MS Tech Solutions Developer",
            positionDetails: {
                company: "GECO Asia Pte Ltd",
                year: "2022 - 2024",
                location: "BGC, Taguig, Philippines"
            },
            summary: {
                description: "Dedicated software engineer with a strong background in frontend and backend development, specializing in React, TypeScript, C#, and ASP.NET. Proficient in crafting efficient, maintainable code to meet project objectives and deliver high-quality software solutions. Experienced in leveraging Python and OpenAI for advanced data processing and natural language interactions. Skilled in collaborating with cross-functional teams to design, implement, and test features that align with project needs. Proven ability to offer constructive feedback and drive code quality improvements within the development process.",
                keyAchievements: [
                    "Collaborated on feature design, implementation, and testing within the development team. Wrote efficient, maintainable code using React, TypeScript, C#, and ASP.NET.",
                    "Offered constructive feedback to elevate code quality and collaborated closely with cross-functional teams.",
                    "Identified and resolved software defects in tandem with the team.",
                    "Proficiently managed code repositories and work items using Azure DevOps.",
                    "Ensured system reliability through thorough testing and seamless integration.",
                    "Streamlined data management using Power Automate, reducing operational time.",
                    "Customized Microsoft Canvas App for intuitive data visualization.",
                    "Engineered Python scripts for precise data processing, ensuring accuracy and integrity.",
                    "Successfully integrated OpenAI's GPT-3 for user-friendly natural language interactions.",
                    "Employed OpenAI for contextual data summarization, extracting insights from extensive datasets."
                ]
            },
            stacks: [
                technologies.react, technologies.sql, technologies.html, technologies.css, technologies.javascript, technologies.typescript, technologies.csharp, technologies.azure, technologies.python, technologies.openai
            ]
        },
        {
            position: "Junior Software Engineer",
            positionDetails: {
                company: "Village88",
                year: "2021 - 2022",
                location: "San Fernando, La Union"
            },
            summary: {
                description: "Energetic and detail-oriented Junior Software Engineer with a passion for crafting efficient code and optimizing software functionality. Proficient in testing, maintaining, and enhancing software systems to ensure robust performance and user satisfaction. Collaborative team player with strong communication skills, adept at working closely with cross-functional teams to deliver high-quality solutions that meet project objectives.",
                keyAchievements: [
                    "Successfully tested, maintained, and proposed enhancements to optimize software functionality, contributing to improved system performance and user experience.",
                    "Identified areas for program enhancements and executed necessary changes, actively participating in the continuous improvement of software systems.",
                    "Crafted and deployed efficient code to meet project objectives, demonstrating proficiency in coding practices and contributing to the timely delivery of high-quality software products.",
                    "Assisted in upgrading and maintaining existing systems to ensure seamless operation, gaining valuable experience in software maintenance and troubleshooting.",
                    "Collaborated closely with developers, UX designers, and business analysts to ensure cohesive project execution and alignment with project goals, fostering strong teamwork and communication skills.",
                    "Engaged with senior team members to analyze issues, review code, and conduct unit tests for quality assurance, actively participating in the software development lifecycle.",
                    "Proposed innovative strategies to enhance system performance and bolster availability, showcasing problem-solving skills and creative thinking abilities.",
                    "Made sound technical decisions that effectively addressed business challenges and drove solutions, gaining valuable experience in technical decision-making and problem-solving."
                ]
            },
            stacks: [
                technologies.react, technologies.mysql, technologies.html, technologies.css, technologies.javascript, technologies.nodeJs, technologies.github, technologies.redux
            ]
        }
    ]
    // 
    return (
        <section className="flex flex-wrap gap-7 lg:justify-between xl:justify-between">
            {
                experiences.map((item, index) => (
                    <CustomCard key={item.position} className="flex flex-col gap-4 md:w-full lg:w-[48.2%] xl:w-[48.5%] 2xl:w-[49.2%]" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                        <div>
                            <h4 className="text-2xl text-white font-semibold">{item.position}</h4>
                            <div className="flex gap-5 my-3 flex-wrap">
                                <Badge className="bg-customAccentHoverCard">{item.positionDetails.company}</Badge>
                                <Badge className="bg-customAccentHoverCard">{item.positionDetails.location}</Badge>
                                <Badge className="bg-customAccentHoverCard">{item.positionDetails.year}</Badge>
                            </div>
                            <div className="text-white my-3">
                                <p className="leading-7 font-semibold">Professional Summary</p>
                                <p className="text-justify">
                                    {item.summary.description}
                                </p>
                            </div>
                            <div className="text-white">
                                <p className="leading-7 font-semibold">Key Achievements</p>
                                <ul className="list-disc pl-4">
                                    {
                                        item.summary.keyAchievements.map(detail => (
                                            <li key={detail} data-aos="fade-up" className="text-sm text-gray-300">{detail}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {
                                item.stacks.map((stack, index) => (
                                    <Badge key={index} className="bg-customAccentHoverCard flex gap-2 items-center">{stack.name} <img src={stack.icon} className="w-5 object-contain" /></Badge>
                                ))
                            }
                        </div>
                    </CustomCard>
                ))
            }
        </section>
    )
}

export default Experience