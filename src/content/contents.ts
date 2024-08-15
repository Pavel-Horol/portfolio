import gamePhoto from '../assets/Screenshot 2024-08-15 154547.png'
import registerPhoto from '../assets/Screenshot 2024-08-15 153853.png'
import pizzaPhoto from '../assets/Screenshot 2024-08-15 153104.png'
import budgetPhoto from '../assets/Screenshot 2024-08-15 122823.png'
import chessPhoto from '../assets/Screenshot 2024-08-15 132232.png'
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
        img: budgetPhoto,
        tags: "React NestJs PostgreSQL TS",
        name: "Budget control",
        description: "This is budget control app with accounts. U can add ",
        cached: "https://github.com/Pavel-Horol/budget_app_server.git"
    },
    {
        img: chessPhoto,
        tags: "React TS",
        name: "Chess game",
        description: "This is chess game.",
        live: "https://chess-game-iota-five.vercel.app/",
        cached: "https://github.com/Pavel-Horol/chess-game.git"
    },
    {
        img: pizzaPhoto,
        tags: "React Redux TS MockAPI",
        name: "React pizza app",
        description: "This is pizza store for ordering pizza",
        live: "https://pavel-horol.github.io/pizza-react-app/",
        cached: "https://github.com/Pavel-Horol/pizza-react-app.git"
    },
    {
        img: registerPhoto,
        tags: "React TS Tailwindcss TelegramAPI",
        name: "React pizza app",
        description: "This is visit card for registration on course, form data sending to telegram",
        live: "https://test-task-murex-one.vercel.app/",
        cached: "https://github.com/Pavel-Horol/test_task.git"
    },
    {
        img: gamePhoto,
        tags: "React TS Canvas",
        name: "Ray casting game",
        description: "This is visit card for registration on course, form data sending to telegram",
        live: "https://ray-cast-game-lemon.vercel.app/",
        cached: "https://github.com/Pavel-Horol/ray_cast_game.git"
    },

]
export const smallProjects: BaseProject[] = [
    {
        tags: "TypeScript React Redux OOP",
        name: "Chess game",
        description: "This is simple chess created using typescript using oop style",
        cached: "https://github.com/Pavel-Horol/chess.git"
    }
]