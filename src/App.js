import React, { Component } from 'react';
import ListContainer from './container/listPersonContainer';
import PersonContainer from './container/selectPersonContainer';
import logo from './logo.svg';
// import {store} from "./store";
import './App.css';

const people = ["Jose Antonio","Jesus Antonio","Maria Jose","Mariela Gonzalez"];

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        
          <ListContainer people={people}/>
          <PersonContainer/>
        </header>
      </div>
    );
  }
}


export default App;
// export default App