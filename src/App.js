import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import background from './assets/background.jpg';
import Home from './components/Home';
import About from './components/About';
import Oneplayer from './components/Oneplayer';
import Twoplayer from './components/Twoplayer';
import Free from './components/Free';
import GameDetails from './components/GameDetails'
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
            <Route path="/oneplayer" exact component={Oneplayer} />
            <Route path="/oneplayer/:id" component={GameDetails} />
            <Route path="/twoplayer" exact component={Twoplayer} />
            <Route path="/twoplayer/:id" component={GameDetails} />
            <Route path="/free" component={Free} />
          </Switch>
        </div>
      </Router>);
  }
}

export default App;


