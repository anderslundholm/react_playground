import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Home from '../routes/Home'
import About from '../routes/About'
import Puppies from '../routes/Puppies'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="container">
      <Header />
      <div className="col-xs-8">
        <Route exact path="/" render={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/puppies" component={Puppies}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
