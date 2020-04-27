import React from 'react';
import { FaCamera } from "react-icons/fa";
import Input from '../Input';

import './styles.css';

const InputFile = (props) => {
    return (
        <div className={`wrapper-input ${props.inputClass}` } style={{ backgroundImage: `url(${props.value.file})`, borderRadius: props.borderRadius || 0 }}>
            <Input
                name={props.name}
                id={props.id}
                style={{ display: 'none' }}
                onChange={props.onChange}
                accept="image/*"
                type="file"
            />
            <label htmlFor={props.id}>
                <FaCamera className={props.value.file ? 'iconcameraopacity': 'iconcamera' } />
            </label>
        </div>
    );

};

InputFile.defaultProps =  {
    value: {
        file: ''
    }
}
export default InputFile;