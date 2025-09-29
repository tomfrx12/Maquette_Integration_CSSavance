import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    return (
        <header>
            <div className='max-w-laptop flex justify-between'>
                <Link to="/">
                    <img src="../../public/img/logo_lodge_relocation.png" alt="Logo Lodge Relocation" />
                </Link>
                <nav className='flex items-center g-20'>
                    <Link to="/relocation" className='font-semibold text-sm text-upper buttonNav'>Service de relocation</Link>
                    <Button text="démarrer votre projet"/>
                </nav>
            </div>
        </header>
    )
};

export default Header;