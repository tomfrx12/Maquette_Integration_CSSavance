import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
    return (
        <footer>
            <div className="bg-primary-800 flex justify-center items-center flex-col g-20">
                <img src="/svg/alternative-text-2.svg" alt="Texte typo Golden Dream" />
                <Button link="contact" text="Démarrez votre projet" className="buttonFooter"/>
            </div>

            <div className="footerMainSection">
                <div className="max-w-laptop flex justify-between g-64">
                    <div className="flex flex-col g-64">
                        <div className="flex flex-col g-16">
                            <p className="firstTextFooter text-upper font-600 font-georama letter-spacing-10 text-18">Inscrivez-vous à la newsletter</p>
                            <p className="textIntoFooter">Des conseils concrets pour s’installer, s’intégrer et mieux comprendre la Suisse.</p>
                            <form className="flex justify-between">
                                <input type="email" placeholder="Email" />
                                <Button link="contact" text="S'abonner" className="buttonForm font-opensans text-16"/>
                            </form>
                        </div>
                        <div className="linkedin flex">
                            <Link to="https://www.linkedin.com/company/lodge-services-relocation/">
                                <img src="/svg/linkedin.svg" alt="SVG LinkedIn"/>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col g-16">
                        <p className="firstTextFooter text-upper font-georama letter-spacing-10">infos légales</p>
                        <p className="textIntoFooter">Mentions légales</p>
                        <p className="textIntoFooter">CGU</p>
                        <p className="textIntoFooter">Politique de confidentialité</p>
                    </div>
                    <div className="flex flex-col g-16">
                        <p className="firstTextFooter text-upper font-georama letter-spacing-10">menu</p>
                        <Link to="/"><p className="textIntoFooter">Accueil</p></Link>
                        <Link to="/relocation"><p className="textIntoFooter">Service de relocation</p></Link>
                        <Link to="/contact"><p className="textIntoFooter">Contact</p></Link>
                    </div>
                </div>
            </div>

            <div className="bg-primary-800">
                <div className="max-w-laptop flex g-64">
                    <p className="text-upper text-16">Genève</p>
                    <p className="text-upper text-16">Lausanne</p>
                    <p className="text-upper text-16">Zug</p>
                    <p className="text-upper text-16">Zurich</p>
                </div>
                <div className="max-w-laptop flex justify-end">
                    <p>©2025 Réalisé par <Link to="https://annagiraud.fr/" target="_blank" className="font-700 Link">Anna Giraud</Link></p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;