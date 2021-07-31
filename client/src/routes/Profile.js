import React from 'react';
import {Navbar} from '../components';
import {Image, Carousel} from 'antd';
import {Input, Button} from 'antd';
import instance from '../module/instance';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const {TextArea} = Input;

class Profile extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      uid : window.localStorage.getItem('uid'),
      nickname : '',
      introduce : '',
      profile_img : '',
      posts : [],
      visible : false,
    }
  }

  componentDidMount = async() => {
    await instance.get("/api/profile/detail/"+this.state.uid)
      .then((res) => {
        if (res.data.success){
          console.log(res.data);
          const userInfo = res.data.userInfo[0];
          const posts = res.data.userPost;
          this.setState({nickname:userInfo.nickname, introduce:userInfo.introduce, profile_img:userInfo.profileImg, posts:posts});
        }
      }).catch((error)=>{
        console.log(error);
      })
  }

  configIntroduction = () => {
    console.log("1");
    this.setState({ visible: true });
  }

  show=()=>{
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
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
                <Image style={{flex:1, borderRadius:"50%", objectFit:'cover'}} width={80} height={80} src={profile_img} alt="profileImg"/>
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
              <h2 className="settingTextProfile">자기소개</h2>
              <input type="button" class="img-buttonProfile" onClick={this.configIntroduction}></input>
              <h4 style={IntoduceStyle}>{introduce}</h4>
            </div>
            <div className="profile">
              <h2>최근 올린 피드</h2>
              <div style={{borderRadius:'10px'}}>
                <Carousel autoplay dotPosition={"Top"} autoplaySpeed={5000}>
                  {this.state.posts.map((value, index)=>{
                    return (
                      <div width="328px" height="328px" key={index}>
                        <img className="slideImage" src={value.img} width="328px" height="328px" alt="contentImg"></img>
                        <div style={contentStyle}>{value.content}</div>
                        {/* 지역 여러개 있는 것 짤림 (어떻게 할지 얘기해보기) */}
                        <h3 className="slideUser">{value.nickname} · {value.region} · {value.univ}</h3>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
          <Rodal customStyles={customStyles} visible={this.state.visible} onClose={()=>{this.hide()}}>
            <div style={{flex:'1', marginTop:"0px", padding:"20px 10px 10px 20px" }}>
              <h2 className="settingTextProfile">자기소개</h2>
              <TextArea value={introduce} onChange={(e)=>{this.setState({introduce:e.target.value})}} style={{width:"350px", height:"50px", textAlign:'left', borderRadius:"10px", border:"solid 1px pink"}} rows={3} placeholder="자기소개를 수정하세요"/>
              <Button style={{marginLeft:"270px"}} onClick={()=>{this.hide()}}>수정하기</Button>
            </div>
          </Rodal>
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

const contentStyle = {
  width:'328px',
  height:'328px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#333333',
  borderRadius : '10px',
};

const customStyles = {
  height: '300px',
  width: '100vw',
  bottom: '0%',
  top: '70%',
  borderRadius: "35px",
  backgroundColor:"#fdd5d7",

};