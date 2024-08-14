import projectPhoto from '../assets/project.jpg'

export const skills: {name: string, content: string}[] = [
    {
        name: "Languages",
        content: "JavaScript TypeScript Python"
    },
    {
        name: "Databases",
        content: "PostgreSQL MongoDB",
    },
    {
        name: "Tools",
        content: "Git Vim Doker Linux Insomnia"
    },
    {
        name: "Frameworks",
        content: "React Express NestJs"
    },
    {
        name:"Other",
        content: "Tailwindcss ChakraUI Scss Redux Zoostand"
    }
]
interface BaseProject {
    tags: string;
    name: string;
    description: string;
    cached: string;
}

interface DetailedProject extends BaseProject {
    img: string;
    live?: string;
}

export const projects: DetailedProject[] = [
    {
        img: projectPhoto,
        tags: "HTML SCSS TS",
        name: "Cool site",
        description: "Description for cool site",
        live: "https://google.com",
        cached: "https://google.com"
    },

]
export const smallProjects: BaseProject[] = [
    {
        tags: "Discord.js TS JS Flask",
        name: "Bot boilerplate",
        description: "Start creating scalable discord.js bot with typescript in seconds",
        cached: "https://google.com"
    }
]