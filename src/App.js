import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {}
  render() {
    return (<div className="App">
      <Navbar />
    </div>);
  }
}

export default App;