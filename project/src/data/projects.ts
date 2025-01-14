import { Project } from "@/types";

const projects: Project[] = [
    {
        id: 0,
        title: "STIB Path Finder",
        desc: "Calculates the fastest routes in the Brussels metro system STIB.",
        image: "/image/projects/STIB.png",
        github: "https://github.com/KBluelvl/STIB",
        tags: ["Java", "JavaFX", "SQL", "Dijkstra algorithm"],
    },
    {
        id: 1,
        title: "StartReview",
        desc: "Use the Start.GG API.",
        image: "/image/projects/StartReview.png",
        github: "https://github.com/KBluelvl/StartReview",
        tags: ["Mobile", "API", "GraphQL"],
    },
    {
        id: 2,
        title: "Chess",
        desc: "A chess game in java.",
        github: "https://github.com/KBluelvl/Chess",
        tags: ["Java", "JavaFX"],
    },
    {
        id: 3,
        title: "Sokoban",
        desc: "Sokoban the puzzle game.",
        image: "/image/projects/Sokoban.png",
        github: "https://github.com/KBluelvl/Sokoban",
        website: "https://kbluelvl.github.io/Sokoban",
        tags: ["JavaScript", "HTML", "CSS"],
    },
    {
        id: 4,
        title: "BMR",
        desc: "BMR calculator made in JavaFX",
        image: "/image/projects/BMR.png",
        github: "https://github.com/KBluelvl/Bmr",
        tags: ["Java", "Javafx"],
    }
]

export default projects;