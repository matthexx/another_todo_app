import React from 'react';
import {
    Link
  } from "react-router-dom";
import './style.css';


function Header(props) {

    return (
        <div className="header">
            
            <h3>
                <Link to="/">Todoist</Link>
            </h3>
            {props.user ?<h5>
                welcome {props.user}
            </h5> : ''}
        </div>
    )
}

export default Header