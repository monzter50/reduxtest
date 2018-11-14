import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux'
import {setPerson} from "../actions";
import PropTypes from 'prop-types';
class listPersonContainer extends Component{
    constructor(props){
        super(props);
        this.state = { 
          person:[]
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
      }
    

    render(){
       console.log(this.props.people);
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
listPersonContainer.propTypes  ={
    setPerson: PropTypes.func.isRequired,
  };
const mapStateToProps = ({person}) => ({person});
  const mapDispatchToProps  = (dispatch) => ({
      setPerson: payload => dispatch(setPerson(payload))
  });
export default  connect(mapStateToProps,mapDispatchToProps)(listPersonContainer);