import React from 'react';
import {Navbar, Category, Button} from '../components';
import {Comment, Tooltip, Avatar, Layout, Breadcrumb} from 'antd';
import moment from 'moment';
// import '../style/Main.css';
import feedIcon from '../assets/icons/feedIcon.png';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Slideshow from '../components/slide';
import styled from "styled-components";
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';


// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;



class Main extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      region : [],
      univ : [],
      interest : [],
      initData: '',
      show: false,
      posts : [],
      headTitle : "최신 피드",
      postNum : 0,
      
    }
  }

  render(){

    

    return (
      <div className="wrap">
          <div className="inner-box main-background">
            <div className="header">
              <div className="textHeader">
                <h1>모아보기</h1>
                <h4>카테고리를 선택하여 사람들과 만나봅시다!</h4>
              </div>
              {/* 클릭되면 폰트 색 바뀌게  */}
              </div>
              <div className="categoryButtonWrap">
                {/* <input type="button" value="지역별" className="categoryButton region"></input>
                <input type="button" value="대학별" className="categoryButton university" onClick={() => {
                  this.state.region = ['서울', '부산', '대전'];
                }}></input>
                <input type="button" value="관심사별" className="categoryButton interest" onClick={() => {alert('지역별')}}></input> */}
              <Button categoryName="지역별"/>
              <Button categoryName="학교별"/>
              <Button categoryName="관심사별"/>
            </div>
            <div className="feedWrap">
              <div className="feedTitle">
                <img className="feedLogo" src={feedIcon} width="18px" height="16px"></img>
                <h2 className="recentFeed">{this.state.headTitle}</h2>
                <h3 className="postNum">{this.state.postNum}개</h3>
              </div>
            </div>
            
            {/*파드*/}
            
          </div>

          {/*bottom navigation*/}
        <Navbar />
      </div>
    );
  }
  
};



export default Main;



// const SubMenu = styled(Menu) `
//       background-color: red;
//     `; 