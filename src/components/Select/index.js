import React from 'react';

const Select = ({
    options,
    name,
    value,
    onChange,
    selectClass,
    optionClass,
    labelClass,
    labelName,
    multiple,
    defaultName,
    style
}) => {
    return (
        <div className="field">
            <label htmlFor={name} className={`label-field ${labelClass}`}>{labelName}</label>
            <select id={name} className={`input-field ${selectClass}`} name={name} value={value} onChange={onChange} multiple={false} style={style}>
                <option className={optionClass} defaultValue={value}>{defaultName}</option>
                {options.map((item, index) =>
                    <option key={index} className={optionClass} value={item}>{item}</option>
                )}
            </select>
        </div>
    );
}

export default Select;