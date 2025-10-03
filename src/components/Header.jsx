import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    const location = useLocation();

    return (
        <header className='bg-secondary-000 border-b-color-secondary-050 py-12 sticky t-0 z-2'>
            <div className='max-w-laptop flex justify-between'>
                <Link to="/">
                    <img src="/img/logo_lodge_relocation.png" alt="Logo Lodge Relocation" />
                </Link>
                <nav className='flex items-center g-20'>
                    <Link to="/relocation" className={`font-600 text-16 text-upper color-primary-800 transition-03-ease-in ${location.pathname === "/relocation" ? "decoration-underline text-color-secondary-100 text-underline-offset-6 text-decoration-thickness-2" : "" }`}>Service de relocation</Link>
                    <Button link="contact" text="démarrez votre projet"/>
                </nav>
            </div>
        </header>
    )
};

export default Header;