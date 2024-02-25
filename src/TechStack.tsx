import { motion } from 'framer-motion';
import CustomCard from './CustomCard'
import TechCardWithPopover, { TCustomCardWithPopoverProps } from './TechCardWithPopover'
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

const TechStack = () => {

    const techStacks: TCustomCardWithPopoverProps[] = [
        {
            name: "React JS",
            title: "React",
            experience: 2,
            miniProjects: 8,
            professionalExperience: 2,
            icon: ReactIcon
        },
        {
            name: "Redux JS",
            title: "Redux",
            experience: 1,
            miniProjects: 3,
            professionalExperience: 1,
            icon: ReduxIcon
        },
        {
            name: "Netlify",
            title: "Netlify",
            experience: 2,
            miniProjects: 6,
            professionalExperience: 2,
            icon: NetlifyIcon
        },
        {
            name: "Javascript",
            title: "Javascript",
            experience: 2,
            miniProjects: 8,
            professionalExperience: 2,
            icon: Javascript
        },
        {
            name: "Node JS",
            title: "NodeJS",
            experience: 2,
            miniProjects: 4,
            professionalExperience: 1,
            icon: NodeJSIcon
        },
        {
            name: "CSS",
            title: "CSS",
            experience: 2,
            miniProjects: 8,
            professionalExperience: 2,
            icon: CSSIcon
        },
        {
            name: "HTML",
            title: "HTML",
            experience: 2,
            miniProjects: 8,
            professionalExperience: 2,
            icon: HTMLIcon
        },
        {
            name: "MySQL",
            title: "MySQL",
            experience: 2,
            miniProjects: 2,
            professionalExperience: 2,
            icon: MySQLIcon
        },
        {
            name: "MSSQL",
            title: "MSSQL",
            experience: 0.7,
            miniProjects: 0,
            professionalExperience: 0.7,
            icon: MSSQLIcon
        },
        {
            name: "Mongo DB",
            title: "Mongo DB",
            experience: 2,
            miniProjects: 4,
            professionalExperience: 0,
            icon: MongoDBIcon
        },
        {
            name: "Postgresql",
            title: "Postgresql",
            experience: 0.5,
            miniProjects: 1,
            professionalExperience: 0,
            icon: PostgresqlIcon
        },
        {
            name: "Github",
            title: "Github",
            experience: 2,
            miniProjects: 8,
            professionalExperience: 2,
            icon: GithubIcon
        },
        {
            name: "Azure",
            title: "Azure",
            experience: 1,
            miniProjects: 0,
            professionalExperience: 1,
            icon: AzureIcon
        },
        {
            name: "C#",
            title: "C#",
            experience: 1,
            miniProjects: 0,
            professionalExperience: 1,
            icon: CSharpIcon
        },
        {
            name: "Bun JS",
            title: "Bun",
            experience: 0.5,
            miniProjects: 0,
            professionalExperience: 0,
            icon: BunIcon
        },
        {
            name: "Material UI",
            title: "MUI",
            experience: 1,
            miniProjects: 3,
            professionalExperience: 0,
            icon: MUIIcon
        },
        {
            name: "Shadcn UI",
            title: "Shadcn UI",
            experience: 0.4,
            miniProjects: 3,
            professionalExperience: 0,
            icon: ShadcnIcon
        },
        {
            name: "Docker",
            title: "Docker",
            experience: 0.3,
            miniProjects: 0,
            professionalExperience: 0,
            icon: DockerIcon
        },
        {
            name: "Python",
            title: "Python",
            experience: 0.5,
            miniProjects: 0,
            professionalExperience: 0.5,
            icon: PythonIcon
        },
        {
            name: "Open AI",
            title: "Open AI",
            experience: 0.5,
            miniProjects: 0,
            professionalExperience: 0.5,
            icon: OpenAIIcon
        },
        {
            name: "Socket IO",
            title: "Socket IO",
            experience: 1,
            miniProjects: 2,
            professionalExperience: 0,
            icon: SocketIoIcon
        },
        {
            name: "Tailwind CSS",
            title: "Tailwind",
            experience: 0.5,
            miniProjects: 2,
            professionalExperience: 0,
            icon: TailwindCSSIcon
        },
        {
            name: "Typescript",
            title: "Typescript",
            experience: 1,
            miniProjects: 2,
            professionalExperience: 1,
            icon: TypescriptIcon
        },
        {
            name: "Vite",
            title: "Vite",
            experience: 0.5,
            miniProjects: 2,
            professionalExperience: 0,
            icon: ViteIcon
        },
    ]

    const getDragAfterElement = (container: any, y: any, x: any) => {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            const offsetXLeft = x - box.left - box.height / 2;

            if (((offset < 0 && offset > closest.offset) && (offsetXLeft < 0 && offsetXLeft > closest.offset))) {
                return { offset: offset, element: child }
            } else {
                return closest
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    }

    const handleDragOver = (e: any) => {
        e.preventDefault();
        const container = document.querySelector(".stack-container");
        if (container) {
            const afterElement = getDragAfterElement(container, e.clientY, e.clientX)
            const draggable = document.querySelector('.dragging')
            if (draggable) {
                if (afterElement == null) {
                    container.appendChild(draggable)
                } else {
                    container.insertBefore(draggable, afterElement)
                }
            }
        }
    }

    return (
        <section className="flex flex-row gap-7">
            <CustomCard className="flex flex-col gap-7">
                <div className="flex gap-12 flex-wrap justify-center lg:justify-center xl:justify-evenly stack-container" onDragOver={handleDragOver}>
                    {
                        techStacks.map(item => (
                            <motion.div
                                layout
                                draggable="true"
                                layoutId={item.name}
                                key={item.name}
                                dragElastic={1}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                dragConstraints={{ left: 0, right: 500, top: 0, bottom: 300 }}
                                onDragStart={(e: any) => { e.currentTarget.classList.add('dragging');}}
                                onDragEnd={(e: any) => { e.currentTarget.classList.remove('dragging');}}
                                className="draggable cursor-grabbing"
                            >
                                <TechCardWithPopover
                                    key={item.name + item.title}
                                    name={item.name}
                                    title={item.title}
                                    experience={item.experience}
                                    miniProjects={item.miniProjects}
                                    professionalExperience={item.professionalExperience}
                                    icon={item.icon}
                                />
                            </motion.div>
                        ))
                    }
                </div>
            </CustomCard>
        </section>
    )
}

export default TechStack