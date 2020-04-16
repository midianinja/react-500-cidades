import React from 'react';
import { FaCamera } from "react-icons/fa";
import Input from '../Input';

import './styles.css';

const InputFile = (props) => {

    const getBase64 = (file) => {
        const reader = new FileReader();
        const promise = new Promise((resolve, reject) => {
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = (error) => {
                reject(error);
            };
        });
        return promise;
    };

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
                <FaCamera className={!props.value.file ? 'iconcamera' : 'iconcameraopacity'} />
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