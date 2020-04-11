import React from 'react';
import './styles.css';

const Input = ({
    name,
    value,
    onChange,
    type,
    placeholder,
    inputClass,
    labelClass,
    labelName,
    autofocus,
    style,
    maxlength
}) => {
    return (
        <div className="field">
            <label htmlFor={name} className={`label-field ${labelClass}`}>{labelName}</label>
            <input 
                name={name} 
                value={value} 
                onChange={onChange} 
                type={type} 
                placeholder={placeholder} 
                id={name} 
                className={`input-field ${inputClass}`} 
                autoFocus={autofocus}
                style={style} 
                maxLength={maxlength}
            />
        </div>  
    );
}

export default Input;