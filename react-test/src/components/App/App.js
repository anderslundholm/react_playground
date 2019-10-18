import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import Header from '../Header/Header'
import Content from '../Content/Content'
import Home from '../routes/Home'
import About from '../routes/About'
import Users from '../routes/Users'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/" render={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/users" component={Users}/>
      <Content />
    </div>
    </Router>
  );
}

export default App;
