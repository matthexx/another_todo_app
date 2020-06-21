import React from 'react';
import './style.css'

function Button(props) {
    const { onClick, label, disabled } = props
    return (
        <button 
            className={ disabled ? 'btn-diabled' : 'btn-default'}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button