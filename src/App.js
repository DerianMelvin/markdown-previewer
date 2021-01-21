import React, { Component } from "react";

import Toolbar from "./components/Toolbar.jsx";
import Editor from "./components/Editor.jsx";
import Preview from "./components/Preview.jsx";

import "./App.css";

let placeholder = `
# Hello There!

you are currently reading this text in a markup language called [Markdown](https://www.markdownguide.org/). This is simply a small introduction of its features.

## This is a sub-heading

This is a **bold** word.
While this is an *italic* word.
both of these can be ***combined*** as well.

1. This is the ordered list.
2. The list will display items in numeric order
3. That increments for every list item.
    1. It can display indented items
    2. That also displays item numerically.

- You can use unordered list as well.
- It functions the same as ordered list
- But without the numbers
    - It can also indent items
    - which is displayed with a different bullet style.

> This is a text inside a blockquote.
> 
> You can also add multiple texts or paragraphs inside it.
>> Additionally, you can add nested blockquotes as well.

This is how you display an inline \`<p>code</p>\`.

It can also display code blocks like this:

\`\`\`
const someVariable = "some string";

function someFunction(var) {
  console.log(var);
}
\`\`\`

You can also display an image as such: ![image](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

`;
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
        <header>
          <h1>Markdown Previewer</h1>
        </header>

        <div id="container">
          <div id="container-editor">
            <Toolbar header="Editor" />
            <Editor markdown={this.state.markdown} handleChange={this.handleChange} />
          </div>
          
          <div id="container-preview">
            <Toolbar header="Preview" />
            <Preview markdown={this.state.markdown} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
