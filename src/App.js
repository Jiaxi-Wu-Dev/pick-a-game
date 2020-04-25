import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import background from './assets/background.jpg';
import Home from './components/Home';
import About from './components/About';
import Oneplayer from './components/Oneplayer';
import Twoplayer from './components/Twoplayer';
import Free from './components/Free'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

class App extends Component {
  state = {}



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
          <Sidebar />
          <Switch>
            <Route path="/oneplayer" component={Oneplayer} />
            <Route path="/twoplayer" component={Twoplayer} />
            <Route path="/free" component={Free} />
            <Route path="/oneplayer/:id" />
          </Switch>
        </div>
      </Router>);
  }
}

export default App;


