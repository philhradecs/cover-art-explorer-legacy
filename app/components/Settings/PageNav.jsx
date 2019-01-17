const React = require('react');
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  margin-left: auto;
`

const NavButton = styled.div`
  color: ${ props => props.active ? 'black' : 'gray' }
  cursor: ${ props => props.active ? 'pointer' : 'default' }
  padding: 0 5px;
`

const PageNav = ({ requestPage, pageUrls }) => {
  return (
    <NavWrapper>
      <NavButton id='prev' active={!!pageUrls.prev} onClick={requestPage}>prev</NavButton>
      <NavButton id='next' active={!!pageUrls.next} onClick={requestPage}>next</NavButton>
    </NavWrapper>
  );
}

export default PageNav;