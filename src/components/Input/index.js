import React from 'react';
import './styles.css';

const Input = ({
    type,
    classInput,
    placeholder,
    id,
    classLabel,
}) => {
    return (
        <>
        <input type={type} className={`field ${classInput}`} placeholder={placeholder} id={id} /*required*/ />
        <label for={id} className={`label-field ${classLabel}`}></label>
        </>  
    );
}

export default Input;