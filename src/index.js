import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import video_list from './components/video_list';

const API_KEY = 'AIzaSyC3cfOmxRy4sn9GyLlgLmPDBt9bq0Hr9SY';

class App extends Component {

  constructor(props) {
    super(props);

    YTSearch({key:API_KEY, term:'grup abdal'}, function(data) {
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector(".container"));