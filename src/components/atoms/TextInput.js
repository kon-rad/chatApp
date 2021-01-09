import React from 'react';
import classnames from 'classnames';
import './TextInput.css';

const TextInput = ({
  className = '',
  onChange,
  name,
  value,
  placeholder,
  onKeyDown,
}) => {
  return (
    <input
      className={classnames('TextInput', className)}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
      onKeyDown={onKeyDown}
    />
  );
};

export default TextInput;
