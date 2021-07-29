import {React, useState} from 'react';
import "antd/dist/antd.css";
import './App.css';
import {Link} from 'react-router-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home, Login, Main, MyPage, Write, setting} from './routes';
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

const App = () => {
  
  const [isAuthorized, setisAuthorized] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={Home}/>
          <Route path="/main" component={Main}/>
          <Route path="/mypage" component={MyPage}/>
          <Route path="/write" component={Write}/>
          <Route path="/setting" component={setting}/>
        </Switch>
        <Mobile>
          <div className="nav">
            <Link className="item" to="/main">
              <img src="/images/Feedmoa.png" width='24' alt="피드모아"/>
              <span>피드모아</span>
            </Link>
            <Link className="item" to="/write">
              <img src="/images/Write.png" width='24' alt="작성하기"/>
              <span>작성하기</span>
            </Link>
            <Link className="item" to="/mypage">
              <img src="/images/Profile.png" width='24' alt="프로필"/>
              <span>프로필</span>
            </Link>
            <Link className="item" to="/setting">
              <img src="/images/Setting.png" width='24' alt="설정"/>
              <span>설정</span>
            </Link>
          </div>
        </Mobile>
      </BrowserRouter>
    </>
  );
}

export default App;