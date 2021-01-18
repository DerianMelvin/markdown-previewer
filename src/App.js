import React, { Component } from "react";

import Toolbar from "./components/Toolbar.jsx";
import Editor from "./components/Editor.jsx";
import Preview from "./components/Preview.jsx";

import "./App.css";

class App extends Component {
  state = {
    markdown: placeholder,
  };

  handleChange = (e) => {
    this.setState({
      markdown: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>

        <div id="container-editor">
          <Toolbar header="Editor" />
          <Editor markdown={this.state.markdown} handleChange={this.handleChange} />
        </div>

        <div id="container-preview">
          <Toolbar header="Preview" />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

let placeholder = "This is a sample sentence for placeholder";

export default App;
