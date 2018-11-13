import React from 'react';
import PropTypes from 'prop-types';

const Person = ({className,name,...props}) =>{
    {console.log({...props})}
    return <div className={`${className}`}><h1>{name && props.name}</h1></div>
}
Person.propTypes  ={
    className: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
  }
export default  Person;