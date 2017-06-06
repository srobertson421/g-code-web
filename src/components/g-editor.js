import React, { Component } from 'react';
//import * as gcode from 'gcode';
import Interpreter from '../utils/g-interpreter';

class GEditor extends Component {
  componentDidMount() {
    this.interpreter = new Interpreter();
  }
  runCode(e) {
    const code = this.refs.codeArea.value;
    this.interpreter.interpretString(code);
    // gcode.parseString(code, (err, result) => {
    //   if(err) {
    //     return console.log(err);
    //   }
    //
    //   //console.log(JSON.stringify(result));
    //   console.log(new Interpreter());
    // });
  }

  render() {
    return (
      <div>
        <h1>Editor</h1>
        <textarea ref="codeArea" cols="40" rows="15"></textarea>
        <button onClick={(e) => {this.runCode(e)}}>Run Code</button>
      </div>
    )
  }
}

export default GEditor;
