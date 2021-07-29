import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () =>{
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/main">Main</Link></li>
                <li><Link to="/mypage">mypage</Link></li>
                <li><Link to="/write">Write</Link></li>
            </ul>
            <hr/>
        </div>
    );
}

export default Menu;