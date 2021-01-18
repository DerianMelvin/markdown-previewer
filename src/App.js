import React, { Component } from 'react';

import Toolbar from './components/Toolbar.jsx'
import Editor from './components/Editor.jsx'
import Preview from './components/Preview.jsx'

import './App.css';

class App extends Component {
  state = {

  }

  render() { 
    return (
      <div className="App">
        <div id="container-editor">
          <Toolbar />
          <Editor />
        </div>
        <div className="container-preview">
          <Toolbar />
          <Preview />
        </div>
      </div>
    );
  }
}
 
export default App;
