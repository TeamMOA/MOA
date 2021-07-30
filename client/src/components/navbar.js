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
              <img src="/images/Feedmoa.png" width='24' alt="피드모아"/>
              <span>피드모아</span>
            </Link>
            <Link className="item" to="/write">
              <img src="/images/Write.png" width='24' alt="작성하기"/>
              <span>작성하기</span>
            </Link>
            <Link className="item" to="/profile">
              <img src="/images/Profile.png" width='24' alt="프로필"/>
              <span>프로필</span>
            </Link>
            <Link className="item" to="/setting">
              <img src="/images/Setting.png" width='24' alt="설정"/>
              <span>설정</span>
            </Link>
          </div>
        </Mobile>
    );
}

export default Navbar;