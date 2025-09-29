import { Link } from "react-router-dom";

const Button = ({link, text}) => {
    return (
        <Link to={link} className="py-8 font-semibold text-sm text-upper button">
            {text}
        </Link>
    )
};

export default Button;