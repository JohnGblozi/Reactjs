import Title from "./Title";

import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgTAILWIND from "../assets/techno/symfony.png";
import imgBootstrap from "../assets/techno/Bootstrap_.svg";

import meta from "../assets/companies/meta.png";
import google from "../assets/companies/google.png";



const logo = [
    { id:1, name: "HTML", image:imgHTML },
    { id:2, name: "CSS", image:imgCSS },
    { id:3, name: "JavScript", image:imgJS },
    { id:4, name: "React", image:imgREACT },
    { id:5, name: "Bootstrap", image:imgBootstrap },
    { id:6, name: "Tailwind CSS", image:imgTAILWIND },
];

const parcoursExperiences = () => [
  {
    id: 1,
    role: "Développeur Front-End",
    company: "Société X",
    period:"Mai-Octobre 2024",
    description:[
      "Développement de l'interface utilisateur",
      "Intégration des maquettes",
      "Optimisation du site web"
    ],
    image:meta,
  },
  {
    id: 2,
    role: "En Formation Développeur Backend",
    company: "Société X",
    period:"Décembre 2024",
    description:[
      "Connexion Base de donné",
      "Introduction sur API",
      "Mise sur place d'une application Symfony"
    ],
    image:google,
  }
]


// Code Jsx


const Experiences = () => {
  return (
    <div id="Experiences" className="pt-[80px]" >
      <Title title ="Expériences" />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4">
        <div className=" flex  flex-wrap justify-center items-center gap-4 mt-4 md:w-1/3 md:mt-4 " >
              {logo.map((exp) => (
                <div key = { exp.id}  className="flex justify-center items-center flex-col " >
                      <div className="h-24 w-24 rounded-full border-2 border-accent ">
                          <img src={exp.image} alt={ exp.name } className="objet-cover rounded-full h-full w-full " />
                      </div>
                      <span className="mt-2 text-sm"> { exp.name } </span>
                </div>     
              ))
              }


        </div>

        <div className="md:ml-4 flex flex-col space-y-4 ">
            { parcoursExperiences().map((experince) => (
                <div
                key = {experince.id}
                className="flex flex-col bg-base-200 p-5 rounded-xl shadox-lg"
                >
                  <div className="flex items-center">
                    <img 
                      src={ experince.image } 
                      alt= {experince.company}
                      className="objet-cover h-10 w-10"
                    />
                    <div className="ml-4">
                      <h2 className="text-xl text-accent font-bold">
                        { experince.role } chez { experince.company } <br />
                        <span className="text-sm">{experince.period} </span>
                      </h2>
                    </div>
                  </div>    
                  <ul className="list-disc ml-16 mt-2">
                      {experince.description.map((desc , index) => (  
                          <li key = {index} className="text-sm">
                              {desc}
                          </li>
                      ))}
                  </ul>             
                </div>
              ))
            }
        </div>
      </div>
      
    </div>
  )
}

export default Experiences;