import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
    return (
        <footer>
            <div className="bg-primary-800 flex justify-center items-center flex-col g-20 p-96">
                <img src="/svg/alternative-text-2.svg" alt="Texte typo Golden Dream" />
                <Button link="contact" text="Démarrez votre projet" className="py-12 px-32"/>
            </div>

            <div className="bg-essential-050 py-64">
                <div className="max-w-laptop flex justify-between g-64">
                    <div className="flex flex-col g-64 maxw-33-100">
                        <div className="flex flex-col g-16">
                            <p className="color-secondary-600 text-upper font-600 font-georama letter-spacing-10 text-18">Inscrivez-vous à la newsletter</p>
                            <p className="color-essential-300">Des conseils concrets pour s’installer, s’intégrer et mieux comprendre la Suisse.</p>
                            <form className="flex justify-between p-2 radius-12 border-color-primary-100">
                                <input type="email" placeholder="Email" className="pl-16" />
                                <Button link="contact" text="S'abonner" className="font-opensans text-16 radius-10 text-none letter-spacing-normal py-8 px-24"/>
                            </form>
                        </div>
                        <div className="flex radius-64 bg-secondary-050 maxw-max">
                            <Link to="https://www.linkedin.com/company/lodge-services-relocation/">
                                <img src="/svg/linkedin.svg" alt="SVG LinkedIn" className="p-20"/>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col g-16">
                        <p className="color-secondary-600 text-upper font-georama letter-spacing-10">infos légales</p>
                        <p className="color-essential-300">Mentions légales</p>
                        <p className="color-essential-300">CGU</p>
                        <p className="color-essential-300">Politique de confidentialité</p>
                    </div>
                    <div className="flex flex-col g-16">
                        <p className="color-secondary-600 text-upper font-georama letter-spacing-10">menu</p>
                        <Link to="/"><p className="color-essential-300">Accueil</p></Link>
                        <Link to="/relocation"><p className="color-essential-300">Service de relocation</p></Link>
                        <Link to="/contact"><p className="color-essential-300">Contact</p></Link>
                    </div>
                </div>
            </div>

            <div className="bg-primary-800">
                <div className="max-w-laptop flex g-64 p-32">
                    <p className="text-upper text-16 color-secondary-100">Genève</p>
                    <p className="text-upper text-16 color-secondary-100">Lausanne</p>
                    <p className="text-upper text-16 color-secondary-100">Zug</p>
                    <p className="text-upper text-16 color-secondary-100">Zurich</p>
                </div>
                <div className="max-w-laptop flex justify-end p-16">
                    <p className="color-essential-200">©2025 Réalisé par <Link to="https://annagiraud.fr/" target="_blank" className="font-700 color-essential-200">Anna Giraud</Link></p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;