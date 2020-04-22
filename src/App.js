import React, { Component } from 'react';
import Navbar from './components/Navbar'
import './App.css';
import background from './assets/background.jpg'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {}

  componentDidMount() {
    fetch('https://api.rawg.io/api/games', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      /* get data and console it  */
      .then(res => res.json())
      .then(text => console.log(text))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <img className="background" src={background} alt=""></img>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>);
  }
}

export default App;


