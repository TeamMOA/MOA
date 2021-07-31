import React from 'react';
import {Link} from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

import Feedmoa from '../assets/icons/Feedmoa.png';
import Write from '../assets/icons/Write.png';
import Profile from '../assets/icons/Profile.png';
import Setting from '../assets/icons/Setting.png';

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

const Navbar = () =>{
    return(
      <>
        <Mobile>
          <div className="nav">
            <Link className="item" to="/">
              <img src={Feedmoa} height='18' alt="피드모아"/>
              피드모아
            </Link>
            <Link className="item" to="/write">
              <img src={Write} height='18' alt="작성하기"/>
              작성하기
            </Link>
            <Link className="item" to="/profile">
              <img src={Profile} height='18' alt="프로필"/>
              프로필
            </Link>
            <Link className="item" to="/setting">
              <img src={Setting} height='18' alt="설정"/>
              설정
            </Link>
          </div>
        </Mobile>
        <Tablet>
          <div className="nav">
            <Link className="item" to="/">
              <img src={Feedmoa} height='18' alt="피드모아"/>
              피드모아
            </Link>
            <Link className="item" to="/write">
              <img src={Write} height='18' alt="작성하기"/>
              작성하기
            </Link>
            <Link className="item" to="/profile">
              <img src={Profile} height='18' alt="프로필"/>
              프로필
            </Link>
            <Link className="item" to="/setting">
              <img src={Setting} height='18' alt="설정"/>
              설정
            </Link>
          </div>
        </Tablet>
      </>
    );
}

export default Navbar;