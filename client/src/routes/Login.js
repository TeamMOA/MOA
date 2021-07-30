import React from 'react';
import {Button} from 'antd';
import { useHistory } from 'react-router';

const Login = () => {
  
  const history = useHistory();

  const postlogin = (value) => {
    alert('소글 로그인'+value);
    window.localStorage.setItem('uid', value);
    history.push('/main');
  }


  return (
    <div>
      <h1>로그인</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      <div style={{display:'flex', flexDirection:'column'}}>
        <Button type="primary" onClick={()=>{postlogin(1)}}>소글(User1) 로그인</Button>
        <Button type="primary" onClick={()=>{postlogin(2)}}>글소(User2) 로그인</Button>
      </div>
    </div>
  );
};

export default Login;