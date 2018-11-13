import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux'
import {setPerson} from "../actions";
import PropTypes from 'prop-types';
import Person from '../components/Person';
class selectPersonContainer extends Component {
    constructor(props){
        super(props);
        console.log(this.props.person);
    }
    render(){
        console.log(this.props.person);
        return(
                    this.props.person && <Person className="person" name={this.props.name}/>
        )
    }
}
selectPersonContainer.propTypes  ={
    person: PropTypes.string.isRequired,
  }
const mapStateToProps  =  ({ person}) =>({ person  });
export default   connect(mapStateToProps,null)(selectPersonContainer);;