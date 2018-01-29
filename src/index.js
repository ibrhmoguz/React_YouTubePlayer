import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC3cfOmxRy4sn9GyLlgLmPDBt9bq0Hr9SY';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".container"));