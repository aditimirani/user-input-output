import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : 'Aditi'
    }
  }
  userNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput name={this.state.name} changed={this.userNameChange}/>
        <UserOutput name={this.state.name} />
      </div>
    );
  }
}

export default App;
