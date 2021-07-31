import React from 'react';
import {Navbar} from '../components';

class setting extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return (
      <div className="wrap" >
        <div className="inner-box setting-background">
          <div className="header" style={{marginTop:"20px"}}>
            <h1 style={{color:'black'}}>설정</h1>
          </div>
          <div className="content">
            <div className="profile" style={{marginTop:"-10px"}}>
                  <h1 style={{fontSize:"22px"}}>계정</h1>      
                  <hr width="320px" style={{marginTop:"-5px", borderTop:"solid 2px gray"}}></hr>
                  <h2 className="settingText">회원 정보 수정하기</h2>
                  <input type="button" class="img-button"></input>
                  <hr width="320px" style={{marginTop:"5px", borderTop:"solid 1px lightgray"}}></hr>
                  <h2 className="settingText">SNS 연동하기</h2>    
                  <input type="button" class="img-button"></input>          
            </div>
            <div className="profile">
                  <h1 style={{fontSize:"22px"}}>시스템</h1>      
                  <hr width="320px" style={{marginTop:"-5px", borderTop:"solid 2px gray"}}></hr>
                  <h2 className="settingText">공지사항</h2> 
                  <input type="button" class="img-button"></input>
                  <hr width="320px" style={{marginTop:"5px", borderTop:"solid 1px lightgray"}}></hr>
                  <h2 className="settingText">버전정보</h2> 
                  <input type="button" class="img-button"></input>
                  <hr width="320px" style={{marginTop:"5px", borderTop:"solid 1px lightgray"}}></hr>
                  <h2 className="settingText">업데이트 사항</h2> 
                  <input type="button" class="img-button"></input>
                  <hr width="320px" style={{marginTop:"5px", borderTop:"solid 1px lightgray"}}></hr>
                  <h2 className="settingText">문의하기</h2> 
                  <input type="button" class="img-button"></input>
                  <hr width="320px" style={{marginTop:"5px", borderTop:"solid 1px lightgray"}}></hr>
                  <h2 className="settingText">이용약관</h2>   
                  <input type="button" class="img-button"></input>           
            </div>
            <div className="profile" style={{marginTop:"40px"}}>
                  <h1 style={{fontSize:"15px", fontWeight:"500"}}>1조 소글소글</h1>      
                  <hr width="320px" style={{marginTop:"-5px", borderTop:"solid 1px gray"}}></hr>
                  <h2 className="settingText" style={{fontSize:"13px"}}>팀원: 강효근, 이수민, 이은경, 장환곤</h2> 
                  <hr width="320px" style={{marginTop:"5px", borderTop:"solid 1px lightgray"}}></hr>
                  <h2 className="settingText" style={{display:"flex", fontSize:"12px", color:"lightgray"}}>2021.07.29~2021.07.31</h2>
                  <h2 className="settingText"style={{fontSize:"12px", color:"lightgray"}}>Notion | GitHub | Figma</h2>                
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
};

export default setting;