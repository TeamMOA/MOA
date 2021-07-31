import React from 'react';
import { useHistory } from 'react-router';
import { Input, Button, Select } from 'antd';
import instance from '../module/instance';
const { Option } = Select;

class signup extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
        name: "",
        year: "",
        month: "",
        date: "",
        frontMail: "",
        backMail: "",
        pwd: "",
        checkPwd: ""
      }
    }


    postlogin = (value) => {
        alert(value);
    }

    componentDidmount= () =>{
        
    }

    confirm = () => {
        console.log(this.state);
    }

    confirmInfo = () => {
        if(this.state.pwd != this.state.checkPwd) {
            alert("비밀번호가 다릅니다.");        
        }
        else {
            if(this.state.name!="" && this.state.year!="" && 
            this.state.month!="" && this.state.date!="" && 
            this.state.frontMail!="" && this.state.backMail!="" &&
            this.state.pwd!="" && this.state.checkPwd!="") {
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
        var formData = new FormData();
        formData.append('nickname', this.state.name);
        formData.append('email', this.state.frontMail+"@"+this.state.backMail);
        formData.append('userID', "user1234");
        formData.append('userPw', this.state.pwd);

        await instance.post("/api/user/signUp", formData)
            .then((res)=>{
                console.log(res);
            }).catch((error)=>{
                console.log(error);
            })
    }


    render(){
        return (
            <div className="wrap" >
                <div className="inner-box login-background">
                    <div className="center" style={{height:'100vh'}}>                       
                        <div>
                        <Button type="primary" onClick={this.confirm}>확인</Button>
                        <div>이름</div>
                            <Input id="name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} className="inputBox1" placeholder="이름을 입력하세요" />
                        </div>
                        <div className="rowAlign" style={{marginTop:'40px', display:'flex'}}>
                            생년월일
                            <Select defaultValue="출생년도" onChange={this.yearChange} id="year">
                                <Option value="1960">1960</Option>
                                <Option value="1970">1970</Option>
                                <Option value="1980">1980</Option>
                                <Option value="1990">1990</Option>
                                <Option value="2000">2000</Option>
                                <Option value="2010">2010</Option>
                                <Option value="2020">2020</Option>
                            </Select>
                            <Select defaultValue="출생월" onChange={this.monthChange} id="month">
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                                <Option value="6">6</Option>
                                <Option value="7">7</Option>
                                <Option value="8">8</Option>
                                <Option value="9">9</Option>
                                <Option value="10">10</Option>
                                <Option value="11">11</Option>
                                <Option value="12">12</Option>
                            </Select>
                            <Select defaultValue="출생일" onChange={this.dateChange} id="date">
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                                <Option value="6">6</Option>
                                <Option value="7">7</Option>
                                <Option value="8">8</Option>
                                <Option value="9">9</Option>
                                <Option value="10">10</Option>
                                <Option value="11">11</Option>
                                <Option value="12">12</Option>
                                <Option value="13">13</Option>
                                <Option value="14">14</Option>
                                <Option value="15">15</Option>
                                <Option value="16">16</Option>
                                <Option value="17">17</Option>
                                <Option value="18">18</Option>
                                <Option value="19">19</Option>
                                <Option value="20">20</Option>
                                <Option value="21">21</Option>
                                <Option value="22">22</Option>
                                <Option value="23">23</Option>
                                <Option value="24">24</Option>
                                <Option value="25">25</Option>
                                <Option value="26">26</Option>
                                <Option value="27">27</Option>
                                <Option value="28">28</Option>
                                <Option value="29">29</Option>
                                <Option value="30">30</Option>
                                <Option value="31">31</Option>
                            </Select>
                        </div>
                        <div className="rowAlign" style={{marginTop:'40px', display:'flex'}}>
                            이메일
                            <Input value={this.state.frontMail} onChange={(e)=>{this.setState({frontMail:e.target.value})}} id="frontMail" placeholder="이메일을 입력하세요" />
                            <Input value={this.state.backMail} onChange={(e)=>{this.setState({backMail:e.target.value})}} id="backMail"placeholder="moa.com" />                           
                        </div>
                        <div>
                        <div>비밀번호</div>
                            <Input type={"password"} value={this.state.pwd} onChange={(e)=>{this.setState({pwd:e.target.value})}} id="pwd" className="inputBox1" placeholder="비밀번호를 입력하세요" />
                        </div>
                        <div>
                            <div>비밀번호 확인</div>
                            <Input type={"password"} value={this.state.checkPwd} onChange={(e)=>{this.setState({checkPwd:e.target.value})}} id="checkPwd" className="inputBox1" placeholder="비밀번호를 다시 입력하세요" />
                        </div>
                    </div>
                        <div onClick={this.postSignUp} className="btn btn-lg btn-white" style={{margin:'10px'}}>
                            회원가입
                        </div>
                </div>
            </div>
        );
    }  
};

export default signup;