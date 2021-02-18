import React from 'react';
import { Input } from './input.style';

const SimpleInput = ({
  name, value, onChange,
  type, placeholder, id,
  autofocus, maxlength,
  onBlur, customStyle, error,
}) => {
    return(
      <Input
        name={name} 
        error={error} 
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