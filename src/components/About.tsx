import { Activity, CalendarSync, LetterText, Paintbrush } from "lucide-react";
import img from "../assets/img3.jpg"
import Title from "./Title";

const aboutSelections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur Frontend avec une bonne expérience en React et Tailwindcss",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maitrise les bases en developpement backend avec Symfony et Python",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Webdesigner",
        description: "Conception des designs modernes et responsives",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
    {
        id: 4,
        title: "Evolutivité et performance",
        description: "Evolutivité et performance sont mes priorités dans mes projets",
        icon: <Activity  className="text-accent scale-150" />,
    },
];

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
        <Title title ="A propos  "/>
        <div className="md:h-screen flex justify-center items-center">
            <div className="hidden md:block">
                <img src={img} alt="" className="w-96 max-h-full objet-cover  rounded-xl  " />
            </div>
            <div className="md:ml-4 space-y4 ">
                {aboutSelections.map((selection) => (
                    <div key={selection.id} className="flex flex-col md:flex-row items-center md:w-96 shadow-xl p-5 rounded-xl">
                        
                        <div className=" mb-2 md:mb-0 text-accent"> 
                            {selection.icon} 
                        </div>
                        <div className="md:ml-4 text-center md:text-left">
                            <h3 className="text-xl font-bold mb-1">
                                {selection.title}
                            </h3>
                            <p className="text-sm text-white">
                                {selection.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>

    </div>
  );
}
export default About;