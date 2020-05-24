import React from 'react';
import './style.css';

const TextArea = ({
  value, onChange, error,
  name, placeholder, maxLength
}) => {
  return (
    <div className="text-area-container">
      <textarea
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        className="text-area"
        value={value}
        onChange={onChange}
      ></textarea>
      <span className="text-area-counter">{`${value.length}/${maxLength}`}</span>
      {error ? <span className="error">{error}.</span> : null}
    </div>
  )
};

export default TextArea;