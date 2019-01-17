const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    margin: 0;
    font-family: sans-serif;
  }
  #main {
    height: 100%;
  }
`;

/* Import Components */
import Explorer from './components/Explorer';
import About from './components/About';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Explorer}/>
      <Route path="/about" component={About}/>
      <GlobalStyle/>
    </div>
  </BrowserRouter>), document.getElementById('main'));