import React from 'react';
import './styles.css';

const Input = ({
    type,
    classInput,
    placeholder,
    id,
    classLabel,
    children
}) => {
    return (
        <div className="field">
            <label htmlFor={id} className={`label-field ${classLabel}`}>{children}</label>
            <input type={type} className={`input-field ${classInput}`} placeholder={placeholder} id={id} /*required*/ />
        </div>  
    );
}

export default Input;