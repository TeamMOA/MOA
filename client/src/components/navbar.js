import React from 'react';
import {Link} from 'react-router-dom';
// import '../style/component.css';

const navbar = () =>{
    return(
        <div className="nav nav-bar">
            <ul>
                <li>Home</li>
                <li>Login</li>
                <li>Main</li>
                <li>Mypage</li>
                <li>Write</li>
                <li>Setting</li>
            </ul>
            <hr/>
        </div>
    );
}

export default navbar;