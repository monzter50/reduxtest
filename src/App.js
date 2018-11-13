import React, { Component } from 'react';
import {createStore} from 'redux';
import logo from './logo.svg';
import './App.css';
// import { composeWithDevTools } from ‘redux-devtools-extension;
const person = ["Jose Antonio","Jesus Antonio","Maria Jose","Mariela Gonzalez"]
const store = createStore(()=>{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      person:[]
    }
    this.hanglePushPerson = this.hanglePushPerson.bind(this);
  }
  hanglePushPerson(){
    this.setState({
      person:person
    });
    const action = { type:'setCity', value:person}
    store.dispatch(action);
  }
  componentDidMount(){
    this.setState(prevState=>({
      person:prevState.person
    }))
  }
  // componentWillUpdate(nextState){
  //     this.setState(nextState=>({
  //       person:nextState.person
  //     }))
  //     console.log(`person: ${nextState.person}`)
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
           
            onClick={this.hanglePushPerson}
          >
           click
          </a>
          <ul>
              {this.state.person.map(name =>{
                  return <li>{name}</li>
              })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
