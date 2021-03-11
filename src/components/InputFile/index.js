import React from 'react';
import { FaCamera } from "react-icons/fa";
import Input from '../Input';
import { Wrapper, Icon, Label } from './InputFile.style';

const InputFile = ({
    customStyle, value, borderRadius, name, id, onChange, label, title
}) => {
    return (
        <Wrapper title={title} customStyle={customStyle} bgImage={value.file} borderRadius={borderRadius}>
            <Input
                name={name}
                id={id}
                style={{ display: 'none' }}
                onChange={onChange}
                accept="image/*"
                type="file"
            />
            <Label htmlFor={id}>
                {label ? label : ''}
                <Icon src={'https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/cam-icon.svg'} />
            </Label>
        </Wrapper>
    );

};

InputFile.defaultProps =  {
    value: {
        file: ''
    }
}
export default InputFile;