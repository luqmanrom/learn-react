import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Card user="luqmanrom" />
        <Card user="uluyol" />
      </div>     
    );
  }
}

export default App;
