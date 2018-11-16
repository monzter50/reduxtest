import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

const Person = ({name,description}) =>{
    {console.log(name)}
    return (
        <Fragment>
            {
                !name?<h1> Not found</h1> : <h1>{name}</h1>
            }
            {!description?(<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad animi autem dolor eligendi, impedit in quae quia quis,
                    recusandae rem similique soluta tempore temporibus.
                    Doloremque exercitationem minus officia optio sequi!</p>) :(<p>{description}</p>) }


        </Fragment>
    )
};
Person.propTypes  ={
    className: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
};
export default  Person;