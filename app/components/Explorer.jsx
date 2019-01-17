import React, {Component} from 'react';
import { socketSearch, socketListenForData, socketRequestPage } from '../socket';
const Link = require('react-router-dom').Link;
import styled from 'styled-components';

import Settings from './Settings/Settings';
import Grid from './Grid/Grid';

class Explorer extends Component {
  
  constructor () {
    super()
    this.state = {
      gridConfig: {},
      discogsData: [],
      pageUrls: {}
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.requestPage = this.requestPage.bind(this);
  }
  
  componentDidMount () {
    socketListenForData(this.handleResponse)
  }
  
  validateResults (res) {
    // remove discogs entries with gif file as `cover_image`
    return res.filter(entry => {
      const re = /\.gif$/;
      return !re.test(entry.cover_image);
    });
  }
  
  handleResponse (data) {
    this.setState({
      discogsData: this.validateResults(data.results),
      gridConfig: {},
      pageUrls: data.pagination.urls
    });
    console.log('urls: ', this.state.pageUrls);
  }
  
  handleSearch (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    var dataObj = { type: 'master' };
    formData.forEach((value, key) => {
      dataObj[key] = value;
    });
    
    socketSearch(dataObj);
  }
  
  requestPage (e) {
    const destination = e.target.id;
    socketRequestPage(this.state.pageUrls[destination]);
  }
  
  render () {
    return (
      <div>
        <Settings handleSearch={this.handleSearch} 
                  requestPage={this.requestPage} 
                  pageUrls={this.state.pageUrls}/>
        <Grid discogsData={this.state.discogsData}
              gridConfig={this.state.gridConfig}/>
      </div>
    );
  }
}

export default Explorer;