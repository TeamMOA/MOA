import React from 'react';
import {Navbar} from '../components';
import instance from '../module/instance';
import '../style/Profile.css';

class Profile extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      nickname : '',
      introduce : '',
      profile_img : '',
    }
  }

  componentDidMount = async() => {
    await instance.get("/api/profile/detail/"+window.localStorage.getItem('uid'))
      .then((res) => {
        if (res.data.success){
          const userInfo = res.data.userInfo[0];
          this.setState({nickname:userInfo.nickname, introduce:userInfo.introduce, profile_img:userInfo.profile_img});
        }
      }).catch((error)=>{
        console.log(error);
      })
  }

  render(){
    const {nickname, introduce, profile_img} = this.state;
    return (
      <div className="wrap" style={{backgroundImage:'require("../assets/images/ProfileScreen.png")', backgroundColor:'orange'}}>
        <div className="inner-box">
          <div className="header" >
            <h1>프로필</h1>
            <h4>당신의 프로필 화면입니다.</h4>
          </div>
            <div className="profileWrap">
              <h1>{nickname}</h1>
              <h2>{introduce}</h2>
            </div>
        </div>
        <Navbar />
      </div>
    );
  }
};

export default Profile;