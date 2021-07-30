import React from 'react';
import {Link} from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
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
        <Mobile>
          <div className="nav">
            <Link className="item" to="/">
              <img src='/icons/Feedmoa.png' height='18' alt="피드모아"/>
              피드모아
            </Link>
            <Link className="item" to="/write">
              <img src="/icons/Write.png" height='18' alt="작성하기"/>
              작성하기
            </Link>
            <Link className="item" to="/profile">
              <img src="/icons/Profile.png" height='18' alt="프로필"/>
              프로필
            </Link>
            <Link className="item" to="/setting">
              <img src="/icons/Setting.png" height='18' alt="설정"/>
              설정
            </Link>
          </div>
        </Mobile>
    );
}

export default Navbar;