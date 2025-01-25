import { Mail } from "lucide-react"
import img from "../assets/imggb.png"

 
const Home = () => {
return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 " id="Home">

        <div className="flex flex-col ">
            <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                Bonjour, <br />
                <span className="text-info">JohnGblozi</span>
            </h1>
            <p className="my-4 text-md text-center md:text-left">
            je suis un développeur web fullstack<br />
            </p>
            <a href="mailto:gbloaijean@gmail.com" className="btn btn-info text-white md:w-fit">
            <Mail className="w-5 h-5" />
            Contactez-moi
            </a>
        </div> 

        <div className="md:ml-60 ">
            <div  className="border border-blue-700 bg-accent shadow-xl"  style={{
                    borderRadius: "54% 46% 35% 65% / 55% 77% 23% 45%  "  }}>
                <img src={img} alt="" className="w-75 h-60 p-2 objet-cover " />
            </div>
        </div> 
    </div>
)
}
export default Home