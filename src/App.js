import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    word : ""
  }

  inputChange = (event) => {
    let word = event.target.value;
    this.setState({ word : word });
    console.log(event.target.value);
  }

  charClick = (event, index) => {
    let word = this.state.word;
    let newWord = `${this.state.word.slice(0, index)}${this.state.word.slice(index+1)}`;
    this.setState({ word : newWord});
  }

  render() {
    let validate = null;
    if (this.state.word.length < 5) {
      validate = 'Text too short';
    } else if (this.state.word.length > 8) {
      validate = 'Text too long';
    }

    const box = {
      display : "inline-block",
      padding : "16px",
      textAlign : "center",
      margin : "16px",
      border : "1px solid black"
    }

    let chars = [...this.state.word].map((char, index) => <CharComponent style={box} text={char} index={index} click={(event) => this.charClick(event, index)} />);

    return (
      <div className="App">
        <input type="text" onChange={this.inputChange} value={this.state.word}></input>
        <p>{this.state.word.length}</p>
        <ValidationComponent text={validate} />
        {chars}
      </div>
    );
  }
}

export default App;
