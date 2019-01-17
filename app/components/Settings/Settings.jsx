const React = require('react');
import styled from 'styled-components';

import Form from './Form/Form';
import PageNav from './PageNav';

const SettingsWrapper = styled.div`
  box-sizing: border-box;
  position: sticky;
  margin: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  padding: 15px 10px;
  background: #fafafa;
`;

const Settings = ({ handleSearch, requestPage, pageUrls }) => {
  return (
    <SettingsWrapper>
      <Form handleSearch={handleSearch}/>
      <PageNav requestPage={requestPage} pageUrls={pageUrls}/>
    </SettingsWrapper>
  );
}

export default Settings;