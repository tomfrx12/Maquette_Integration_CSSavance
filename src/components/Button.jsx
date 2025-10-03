import { Link } from "react-router-dom";

const Button = ({link, text, className, onClick}) => {
    return (
        <Link to={`/${link}`} onClick={onClick} className={`font-georama font-600 text-14 text-upper letter-spacing-15 color-primary-800 bg-secondary-100 py-8 px-18 radius-round transition-03-ease-in line-h-24 bg-secondary-600-hover color-secondary-000-hover ${className ? ` ${className}` : ''}`}>
            {text}
        </Link>
    )
};

export default Button;