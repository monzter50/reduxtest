import React,{Component,Fragment} from 'react';
import { bindActionCreators, compose } from 'redux';
import {connect} from 'react-redux'
import {getDataPeople,setSeletedPerson} from "../actions";

import PropTypes from 'prop-types';
class listPersonContainer extends Component{
    constructor(props){
        super(props);
        this.state = { 
          people:[] 
        };
        this.hanglePushPerson = this.hanglePushPerson.bind(this);
      }
      hanglePushPerson(person){
        console.log(`Persona seleccionada ${person}`);
        this.props.setPerson(person);
       
      }
      componentDidMount(){
        this.setState(prevState=>({
          person:prevState.person
        }))
        this.props.getPeople();
      }
    

    render(){
       console.log(this.props.people);
        if(!this.props.people){
          return null
        }
        return(
            <ul>
                {this.props.people.map((name ,index) =>{
                    return <li key={index}
                               onClick={this.hanglePushPerson.bind(this , name)}>
                        {name}</li>
                })}
            </ul>
        )
    }
}
// listPersonContainer.propTypes  ={
//     getPeople: PropTypes.func,
//     people:PropTypes.array
//   };

const mapStateToProps = (state) => {
    return {people: state.people.data} 
};
  const mapDispatchToProps  = (dispatch) => {
    return bindActionCreators({getPeople:getDataPeople,setPerson:setSeletedPerson},dispatch)
  };

export default  connect(mapStateToProps,mapDispatchToProps)(listPersonContainer);