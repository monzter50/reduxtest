import React, { Component } from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import {setPerson} from "./actions";
// import {store} from "./store";
import './App.css';
const person = ["Jose Antonio","Jesus Antonio","Maria Jose","Mariela Gonzalez"];

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      person:[]
    };
    this.hanglePushPerson = this.hanglePushPerson.bind(this);
  }
  hanglePushPerson(){
    this.setState({
      person:person
    });
    this.props.setPerson(person);
  }
  componentDidMount(){
    this.setState(prevState=>({
      person:prevState.person
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button

            onClick={this.hanglePushPerson}
          >
           click
          </button>
          <ul>
              {this.state.person.map((name ,index) =>{
                  return <li key={index}>{name}</li>
              })}
          </ul>
        </header>
      </div>
    );
  }
}
const mapDispatchToProps  = (dispatch) => ({
    setPerson:value => dispatch(setPerson(value))
});
const appConnect = connect(null,mapDispatchToProps)(App);
export default appConnect;
