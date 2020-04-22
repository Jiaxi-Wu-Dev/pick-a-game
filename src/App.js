import React, { Component } from 'react';
import Navbar from './components/Navbar'
import './App.css';
import background from './assets/background.jpg'

class App extends Component {
  state = {}
  render() {
    return (<div className="App">
      <Navbar />
      <img className="background" src={background} alt=""></img>
    </div>);
  }
}

export default App;