import React from 'react';
import './style.css';
import PropTypes from 'prop-types';


function TextInput(props) {
    const { name, value, placeholder, width, onChange } = props;
    return (
        <>
         <input 
            name={name} 
            type='text' 
            style={{width: width || '100%'}} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} /> 
        </>
    )
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    width: PropTypes.string
}




export default TextInput
