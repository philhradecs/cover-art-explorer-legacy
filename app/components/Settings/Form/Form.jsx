const React = require('react');
import styled from 'styled-components';

import Option from './Option';

const parameters = ['query', 'artist', 'year', 'style', 'country'];

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`;

const Form = ({ handleSearch }) => {
  return (
    <StyledForm onSubmit={handleSearch}>
      { parameters.map((param, i) => {
          return <Option param={param} key={i}/>;
        })
      }
      <input type="submit" value="search"/>
    </StyledForm>
  );
}

export default Form;