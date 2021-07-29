import React from 'react';
import {Menu} from '../components';

class Login extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return (
      <div>
        <Menu />
        <h1>마이페이지</h1>
        <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      </div>
    );
  }
};

export default Login;