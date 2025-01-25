import { Mail } from "lucide-react";
import img from "../assets/img.jpg";

const Home = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 "
      id="Home"
    >
      <div className="flex flex-col ">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour
          <br />
          <span className="text-info">JohnGblozi</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          je suis un développeur web fullstack
          <br />
        </p>
        <a
          href="mailto:gbloaijean@gmail.com"
          className="btn btn-info text-white md:w-fit"
        >
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
      </div>

      <div className="md:ml-60">
        <div
          className="cercle"
          style={{
            width: "300px",
            height: "250px",
            borderRadius: "50%", 
            backgroundColor: "#3498db", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", // 
          }}
        >
          <div
            className="border border-blue-700 bg-accent shadow-xl"
            style={{
              width: "200px", 
              height: "150px",
              borderRadius: "50%", 
              overflow: "hidden",
            }}
          >
            <img
              src={img} 
              alt="Image"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
