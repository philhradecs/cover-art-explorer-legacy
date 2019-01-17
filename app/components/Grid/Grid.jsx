const React = require('react');
import styled from 'styled-components';
import MediaTile from './MediaTile';

const StyledGrid = styled.div`
  display: grid;
  min-height: 100%;
  padding: 10px;
  background: slategray;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: repeat(auto-fill, auto);
  grid-gap: 5px;
`;

const Grid = ({ discogsData, gridConfig }) => {
  return (
    <StyledGrid>
      { discogsData.map((entry, i) => <MediaTile data={entry} key={i}/>) }
    </StyledGrid>
  );
}

export default Grid;