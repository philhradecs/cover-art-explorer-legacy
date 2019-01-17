const React = require('react');
import styled from 'styled-components';

const FormLabel = styled.label`
  
`;

const FormInput = styled.input`
  margin: 0 20px 0 4px;
`;

const Option = ({ param }) => {
  return (
    <span>
      <FormLabel for={param}>{param}:</FormLabel>
      <FormInput type="text" id={param} name={param}/>
    </span>
  );
}

export default Option;