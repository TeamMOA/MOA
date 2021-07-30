import React from 'react';
import {Navbar, Category} from '../components';
import {Comment, Tooltip, Avatar, Layout, Breadcrumb} from 'antd';
import moment from 'moment';
import '../style/Main.css';
import feedIcon from '../assets/icons/feedIcon.png';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Slideshow from '../components/slide';
import styled from "styled-components";
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import { ReactDOM } from 'react';

// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

const data = [
  {
    value: '1',
    label: '경기',
  }, {
    value: '2',
    label: '서울',
  },
  {
    value: '3',
    label: '대전',
    isLeaf: true,
  },
  {
    value: '4',
    label: '대전',
    isLeaf: true,
  },
  {
    value: '5',
    label: '대전',
    isLeaf: true,
  },
];

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


  onChange = (value) => {
    console.log(value);
  }
  onOk = (value) => {
    console.log(value);
    this.onCancel();
  }
  onCancel = () => {
    this.setState({ show: false });
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }


  

  render(){

    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );

    return (
      <div class="wrap">
          <div class="inner-box">
            <div class="header">
              <div className="textHeader">
                <h1>모아보기</h1>
                <h4>카테고리를 선택하여 사람들과 만나봅시다!</h4>
              </div>
              {/* 클릭되면 폰트 색 바뀌게  */}
              <div className="categoryButtonWrap">
                {/* <input type="button" value="지역별" className="categoryButton region"></input>
                <input type="button" value="대학별" className="categoryButton university" onClick={() => {
                  this.state.region = ['서울', '부산', '대전'];
                }}></input>
                <input type="button" value="관심사별" className="categoryButton interest" onClick={() => {alert('지역별')}}></input> */}

                <div className={show ? 'single-menu-active' : ''}>
                  <div>
                  <NavBar
                    leftContent="Menu"
                    mode="light"
                    onLeftClick={this.handleClick}
                    className="single-top-nav-bar"
                  >
                    OneLevel menu
                  </NavBar>
                </div>
                {show ? initData ? menuEl : loadingEl : null}
                {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
                </div>

              </div>
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