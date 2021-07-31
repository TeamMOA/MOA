import React from 'react';
import { Input} from 'antd';
import instance from '../module/instance';

class signup extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
        name: "",
        id:"",
        mail: "",
        pwd: "",
        checkPwd: ""
      }
    }

    componentDidmount= () =>{
        
    }

    confirm = () => {
        console.log(this.state.id);
    }

    confirmInfo = () => {
        if(this.state.pwd !== this.state.checkPwd) {
            alert("비밀번호가 다릅니다.");        
        }
        else {
            if(this.state.name!=="" && this.state.year!=="" && 
            this.state.month!=="" && this.state.date!=="" && 
            this.state.frontMail!=="" && this.state.backMail!=="" &&
            this.state.pwd!=="" && this.state.checkPwd!=="") {
                alert("good")
            } else {
                alert("빈칸을 모두 채워주세요");
            }
        }
    }

    yearChange = (value) => {
        this.setState({ year:value });
    }
    monthChange = (value) => {
        this.setState({ month:value });
    }
    dateChange = (value) => {
        this.setState({ date:value });
    }

    postSignUp = async() => {
        await instance.post("/api/user/signUp", {
            email : this.state.email,
            userID : this.state.id,
            userPw : this.state.pwd,
            nickname : this.state.nickname
        }).then((res)=>{
            console.log(res.data);
            alert('회원가입에 성공하였습니다!');
            
        }).catch((error)=>{
            console.log(error);
            alert('회원가입에 실패하였습니다!');
        });
    }


    render(){
        return (
            <div className="wrap" >
                <div className="inner-box signup-background">
                    <div className="center" style={{height:'100vh'}}>                       
                        <div className="signupContent">
                        <div className="signupText">
                            <h4>닉네임</h4>
                        </div>
                        <Input className="signupBoxContainer" id="name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} placeholder="닉네임을 입력하세요" /> 
                        <div style={{marginTop:'40px'}}>
                            <div className="signupText">
                                <h4>아이디</h4>
                            </div>
                                <Input className="signupBoxContainer" value={this.state.id} onChange={(e)=>{this.setState({id:e.target.value})}} id="id" placeholder="아이디를 입력하세요" />                               
                        
                        <div style={{marginTop:'40px'}}>
                            <div className="signupText">
                                <h4>이메일</h4>
                            </div>
                                <Input className="signupBoxContainer" value={this.state.mail} onChange={(e)=>{this.setState({mail:e.target.value})}} id="mail" placeholder="이메일을 입력하세요" />                               
                        </div>
                        <div>
                        <div style={{marginTop:'40px'}}>
                            <div className="signupText">
                                <h4>비밀번호</h4>
                            </div>
                                <Input type={"password"} className="signupBoxContainer" value={this.state.pwd} onChange={(e)=>{this.setState({pwd:e.target.value})}} id="pwd" placeholder="비밀번호를 입력하세요" />
                        </div>
                        </div>
                        <div>
                        <div style={{marginTop:'20px'}}>
                            <div className="signupText">
                                <h4>비밀번호 확인</h4>
                            </div>
                            <Input type={"password"} className="signupBoxContainer" value={this.state.checkPwd} onChange={(e)=>{this.setState({checkPwd:e.target.value})}} id="checkPwd" placeholder="확인을 위해 비밀번호를 다시 입력하세요" />
                        </div>
                        </div>
                    </div>
                    </div>
                        <div onClick={this.postSignUp} className="btn btn-lg btn-white" style={{marginBottom:'50px'}}>
                            회원가입
                        </div>
                </div>
            </div>
            </div>
        );
    }  
};

export default signup;