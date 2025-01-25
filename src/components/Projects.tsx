import Title from "./Title";

import img2 from "../assets/projects/img.jpg";
import img3 from "../assets/projects/img1.jpg";
import { Github, Video } from "lucide-react";

const projects = [
    {
        id:1,
        title: "Projet 1",
        description: "Mon Portfolio",
        technologies: ["React", "Tailwind"],
        demolink: "",
        reposlink: "",
        image: img2,
    },
    {
        id:2,
        title: "Projet 2",
        description: "Mon Portfolio Version 1",
        technologies: ["HTML", "CSS", "JS"],
        demolink: "https://lecurejohn.github.io/Portfolio/",
        reposlink: "",
        image: img3,
    },
]


const Projects = () => {    
    return (
        <div className="mt-10" id="Projects"> 
            <Title title ="Projects" />
            <div className="grid  md:grid-cols-2 gap-4  mt-10">
                {
                    projects.map((project) => (

                   <div key={ project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg max-w-xl"> 
                        <img 
                            src= { project.image }
                            alt={ project.title}
                            className="object-cover h-56 w-full rounded-xl p-4"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                { project.title }
                            </h1>
                            <p className="text-sm"> { project.description} </p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            { project.technologies.map((tech) => (
                                <span key={ tech } className=" badge badge-accent badge-sm ">
                                    { tech }
                                </span>
                            ))}
                        </div>

                        <div className="flex">
                            <a href= {project.demolink} className="btn btn-accent w-2/3">
                                Voir le projet Demo
                                <Video className="w-4" />
                            </a>
                            <a href= {project.reposlink} className="btn btn-neutral w-1/3 ml-2 ">
                                <Github className="w-4" />
                            </a>
                        </div>
                   </div>                   
                ))}
            </div>
        </div>
    )
}
export default Projects;
