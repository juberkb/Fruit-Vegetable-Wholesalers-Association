import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import "../../comman/styles/commanStyles.css"

const Button = ({ onClick, text = "Inquiry Now", icon = <FiArrowRight />,  className = '' }) => {
    return (
        <button
         
            onClick={onClick}
           
        >
            <span className="Button-item">
                {text} {icon}
            </span>
        </button>
    );
}

export default Button;