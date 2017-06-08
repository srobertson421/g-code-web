import React, { Component } from 'react';
import Interpreter from '../utils/g-interpreter';
import Renderer from './renderer';

class GEditor extends Component {
  componentDidMount() {
    this.interpreter = new Interpreter();
  }
  runCode(e) {
    const code = this.refs.codeArea.value;
    this.interpreter.interpretString(code);
  }

  render() {
    return (
      <div>
        <h1>Editor</h1>
        <textarea ref="codeArea" cols="40" rows="15"></textarea>
        <button onClick={(e) => {this.runCode(e)}}>Run Code</button>
        <Renderer />
      </div>
    )
  }
}

export default GEditor;
