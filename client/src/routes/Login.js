import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Input} from 'antd';
import { useHistory } from 'react-router';
import instance from '../module/instance';

const Login = () => {
  const [email, setEmail] = useState('');
  const [userPw, setPassword] = useState('');
  const history = useHistory();

  const postlogin = async() => {
    await instance.post("/api/user/login", {
      email : email,
      userPw: userPw
    }).then((res)=>{
      console.log(res.data);
      if (res.data.success){
        window.localStorage.setItem('uid', res.data.uid);
        window.localStorage.setItem('userId', res.data.userId);
        window.localStorage.setItem('nickname', res.data.nickname);
        history.push('/');
      }
    }).catch((err)=>{
      console.log(err);
    });
  }

  const soglelogin = async() => {
    window.localStorage.setItem('uid', 5);
    window.localStorage.setItem('nickname', '김소글');
    history.push('/');
  }

  return (
    <div>
      <div className="wrap" >
        <div className="inner-box login-background">
          <div className="center" style={{marginTop:"40vh"}}>
            <div className="logincontent">
              <h3>이메일</h3>
              <Input className="input input-lg" style={{marginTop:'5px'}} value={email} onChange={(e)=>{setEmail(e.target.value)}} id="mail" placeholder="이메일을 입력하세요" />
            </div>
            <div className="logincontent">
              <h3>비밀번호</h3>
              <Input type={"password"} className="input input-lg" style={{marginTop:'5px'}} value={userPw} onChange={(e)=>{setPassword(e.target.value)}} id="pwd" placeholder="비밀번호를 입력하세요" />
            </div>
            <div className="btn btn-lg btn-pink" style={{marginTop:'5vh', marginBottom:'10px'}} onClick={()=>{soglelogin()}}>
              소글이로 로그인 하기
            </div>
            <div className="btn btn-lg btn-white" style={{marginBottom:'10px'}} onClick={()=>{postlogin()}}>
              로그인 하기
            </div>
            <Link to="/signup">회원가입 하러가기</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;