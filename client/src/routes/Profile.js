import React from 'react';
import {Navbar} from '../components';
import {Image, Carousel} from 'antd';
import instance from '../module/instance';

const contentStyle = {
  height: '328px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#333333',
  borderRadius : '10px',
};

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
      <div className="wrap" >
        <div className="inner-box profile-background">
          <div className="header" >
            <h1>프로필</h1>
          </div>
          <div className="content">
            <div className="profile" style={{display:'flex', paddingTop:'20px', borderWidth:'0.5px', borderBottom:'solid #CCCCCC'}}>
              <div className="center">
                <Image style={{flex:1, borderRadius:"50%"}} width={80} height={80} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
              </div>
              <div className="center" style={{flex:3}}>
                <h2 >{nickname}</h2>
                <div className="row space-between" style={{width:'70%'}}>
                  <div className="center">
                    팔로우
                    <br/>
                    <br/>
                    65
                  </div>
                  <div className="center">
                    팔로워
                    <br/>
                    <br/>
                    65
                  </div>
                </div>
              </div>
            </div>
            <div className="profile">
              <h2>자기소개</h2>
              <h4 style={IntoduceStyle}>{introduce}</h4>
            </div>
            <div className="profile">
              <h2>최근 올린 피드</h2>
              <div style={{borderRadius:'10px'}}>
                <Carousel autoplay dotPosition={"Top"} autoplaySpeed={5000}>
                  <div>
                    <h3 style={contentStyle}>1</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>2</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>3</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>4</h3>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
};

export default Profile;

const IntoduceStyle = {
  width:'100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
}