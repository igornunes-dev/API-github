import React from 'react'
import {InputContainer} from './styles';
 const Input = ({valor, onChange, alt}) => {
  return(
    <InputContainer>
      <input value={valor} onChange={onChange} alt={alt}/>
    </InputContainer>
  );
}

export default Input;