import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import Card from '../components/Card';
// import {setPerson} from "../actions";
import PropTypes from 'prop-types';
import Person from '../components/Person';
class selectPersonContainer extends Component {
    constructor(props){
        super(props);
        console.log(this.props.person);
    }
    render(){
        console.log(`persona renderiada:    ${this.props.person}`);
        return(
            <section className={"card-container"}>
                <Card>
                    {
                         <Person className="person" name={this.props.person}/>
                    }
                </Card>

            </section>
        )
    }
}
selectPersonContainer.propTypes  ={
    person: PropTypes.string,
};
const mapStateToProps = ({person}) => ({person});
export default connect(mapStateToProps,null)(selectPersonContainer);