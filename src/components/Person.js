import React from 'react';
import PropTypes from 'prop-types';

const Person = ({className,name,...props}) =>{
    {console.log(name)}
    return <div className={`${className}`} {...props}><h1>{name}</h1></div>
};
Person.propTypes  ={
    className: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
};
export default  Person;