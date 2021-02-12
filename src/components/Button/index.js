import React from 'react';
import './styles.css';

const Button = ({
    children,
    type,
    onClick,
    className,
    disabled,
}) => {
    return (
        <button
            disabled={disabled}
            type={type}
            className={`btn3D ${className}`}
            onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
