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
        // this.setState({
        //   person:this.props.person
        // });
        console.log(`Persona seleccionada ${person}`);
        this.props.setPerson(person);
      }
    //   componentDidMount(){
    //     this.setState(prevState=>({
    //       person:prevState.person
    //     }))
    //   }
    

    render(){
       
        return(
        <Fragment>

            <button

onClick={this.hanglePushPerson}
>
click
</button>
            <ul>
            {this.props.person.map((name ,index) =>{
                return <li key={index} onClick={this.hanglePushPerson.bind(this , name)}>{name}</li>
            })}
        </ul>
        </Fragment>
        )
    }
}
listPersonContainer.propTypes  ={
    setPerson: PropTypes.func.isRequired,
  }
  const mapDispatchToProps  = (dispatch) => ({
      setPerson: value => dispatch(setPerson(value))
  });
export default  connect(null,mapDispatchToProps)(listPersonContainer);