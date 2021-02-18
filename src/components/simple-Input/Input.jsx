import React from 'react';
import { Input } from './input.style';

const SimpleInput = ({
  name, value, onChange,
  type, placeholder, id,
  autofocus, maxlength,
  onBlur, customStyle,
}) => {
    return(
      <Input
        name={name} 
        value={value} 
        onChange={onChange} 
        type={type} 
        placeholder={placeholder} 
        id={id} 
        autoFocus={autofocus}
        maxLength={maxlength}
        onBlur={onBlur}
        customStyle={customStyle}
      />
    );
}

export default SimpleInput;