import {React, Button} from 'react';
import { useHistory } from 'react-router';

const Login = () => {
  
  const history = useHistory();

  const postlogin = (value) => {
    alert('소글 로그인'+value);
    window.localStorage.setItem('uid', value);
    history.push('/');
  }

  return (
    <div>
      <div className="wrap" >
        <div className="inner-box login-background">
          <div className="center" style={{height:'100vh'}}>
            <div className="btn btn-lg btn-pink" style={{margin:'10px'}} onClick={()=>{postlogin(5)}}>
              김소글로 로그인 하기
            </div>
            <div className="btn btn-lg btn-white" style={{margin:'10px'}} onClick={()=>{postlogin(6)}}>
              하글소로 로그인 하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;