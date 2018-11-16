import React, { Component } from 'react';
import ListContainer from './container/listPersonContainer';
import PersonContainer from './container/selectPersonContainer';
// import {store} from "./store";
import './scss/styles.scss';
// import './App.css';

const people = ["Jose Antonio","Jesus Antonio","Maria Jose","Mariela Gonzalez"];

class App extends Component {

  render() {
    return (
      <main className="layout-grid">
            <ListContainer />
            <PersonContainer/>
      </main>
    );
  }
}


export default App;
// export default App