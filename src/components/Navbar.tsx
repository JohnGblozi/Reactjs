import { useState, useEffect } from "react";
import { Container } from "lucide-react";
import { House } from "lucide-react";
import { ChartGantt } from "lucide-react";
import { BookImage } from "lucide-react";
import { Microscope } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Détecter le défilement de la page
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); // Ajoute la classe lorsque on a défilé de 50px
    } else {
      setScrolled(false); // Réinitialise la classe lorsque on revient en haut
    }

    // Ferme le menu si l'utilisateur défile
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`flex items-center justify-between p-4  sticky top-0 z-50 transition-all duration-400 ${
        scrolled ? "bg-info text-white" : "bg-transparent text-black"
      }`}
    >
      <a
        href="#"
        className="flex items-center p-2 text-3xl font-bold md:text-xl"
      >
        <Container className="mr-2 text-accent-content" />
        John
        <span className="text-accent">GBLOZI</span>
      </a>

      <button onClick={toggleMenu} className="md:hidden p-2 text-3xl">
        &#9776;
      </button>

      <div
        className={`fixed top-0 left-0 w-1/2 h-fit pb-12 bg-gray-100 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col  z-50`}
      >
        <a
          href="#"
          className="flex flex-col items-center p-2  text-3xl font-bold mb-5"
        >
          <Container className="mr-2 text-accent-content w-[90px] h-[90px] mb-6" />
          <div>
            <span className="text-black">John</span>
            <span className="text-accent">GBLOZI</span>
          </div>
        </a>
        <ul className="space-y-2 ">
          <li className=" hover:bg-neutral-900 hover:text-white p-2 ">
            <a href="#Home" className=" flex items-center space-x-2   ">
              <House />
              <span> Accueil</span>
            </a>
          </li>
          <li className=" hover:bg-neutral-900 hover:text-white p-2 ">
            <a href="#About" className="flex items-center space-x-2">
              <ChartGantt />
              <span>A propos</span>
            </a>
          </li>
          <li className=" hover:bg-neutral-900 hover:text-white p-2 ">
            <a href="#Experiences" className="flex items-center space-x-2">
              <BookImage />
              <span>Mes expériences</span>
            </a>
          </li>
          <li className=" hover:bg-neutral-900 hover:text-white p-2 ">
            <a href="#Projects" className="flex items-center space-x-2">
              <Microscope />
              <span>Mes projets</span>
            </a>
          </li>
        </ul>
      </div>

      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#Home" className="btn btn-sm btn-outline">
            Accueil
          </a>
        </li>
        <li>
          <a href="#About" className="btn btn-sm btn-outline">
            A propos
          </a>
        </li>
        <li>
          <a href="#Experiences" className="btn btn-sm btn-outline">
            Mes expériences
          </a>
        </li>
        <li>
          <a href="#Projects" className="btn btn-sm btn-outline">
            Mes projets
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
