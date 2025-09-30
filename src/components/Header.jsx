import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    return (
        <header>
            <div className='max-w-laptop flex justify-between'>
                <Link to="/">
                    <img src="/img/logo_lodge_relocation.png" alt="Logo Lodge Relocation" />
                </Link>
                <nav className='flex items-center g-20'>
                    <Link to="/relocation" className='font-600 text-16 text-upper buttonNav'>Service de relocation</Link>
                    <Button link="contact" text="démarrez votre projet"/>
                </nav>
            </div>
        </header>
    )
};

export default Header;