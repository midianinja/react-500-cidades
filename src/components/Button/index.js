import React from 'react';
import './styles.css';

const Button = ({
    children,
    type,
    onClick,
    className
}) => {
    return (
        <button type={type} className={`btn3D ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;