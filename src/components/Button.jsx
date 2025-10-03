import { Link } from "react-router-dom";

const Button = ({link, text, className, onClick}) => {
    return (
        <Link to={`/${link}`} onClick={onClick} className={`font-georama font-600 text-14 text-upper letter-spacing-15 text-color-primary-800 button${className ? ` ${className}` : ''}`}>
            {text}
        </Link>
    )
};

export default Button;