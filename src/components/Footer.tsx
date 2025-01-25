import { Container, Facebook, Linkedin } from "lucide-react";

const Footer = () => {  
    return (
        <div>
            <footer className="footer footer-center bg-neutral text-white p-10">
                <aside>
                
                    <p className="font-bold">
                        <Container className="w-10 h-10 text-white" />
                            John <br />
                        <span className="text-accent">GBLOZI</span>
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - Tous les droits réservés</p>
                </aside>


                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="" target="blanck" rel="noopner noreferrer">
                            <Facebook className="w-6 h-6 text-current"/>
                        </a>
                        <a href="" target="blanck" rel="noopner noreferrer">
                            <Linkedin className="w-6 h-6 text-current"/>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
    }
export default Footer;


