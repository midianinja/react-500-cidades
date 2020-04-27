import React from 'react';
import './styles.css';

const ToggleButton = ({
    children,
    type,
    onClick,
    className,
    disabled,
}) => {
    return (
        <button disabled={disabled} type={type} className={className} onClick={onClick}>
            {children}
        </button>
    );
}

export default ToggleButton;
