import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experiences";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[8%]">
        <Navbar/>
        <Home/>
      </div>

      <About/>

      <div className="p-5 md:px-[8%]">
        <Experience />
      </div>
    <div className="p-5 md:px-[8%]">
        <Projects />
    </div>
      
    <Footer />


    </div>
  )
}