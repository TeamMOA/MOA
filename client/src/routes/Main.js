import React from 'react';
import {Menu, Navbar, Category} from '../components';
import {Comment, Tooltip, Avatar} from 'antd';
import moment from 'moment';
import '../style/Main.css';
import logo from '../assets/images/logo.png';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Slideshow from '../components/slide';

class Main extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      region : ['서울', '부산', '대전'],
      univ : [],
      interest : [],
      posts : [],
    }
  }

  componentDidMount= async() =>{
    
  }

  render(){
    const {region, univ, interest} = this.state;
    return (
      <div class="wrap">
        <div id="test">
        {/* 내용이 있는 부분*/}
          <div class="inner-box">
            <div class="backgroundShape">
              {/*배경 이미지 위에 올라가는 헤더 부분*/}
              <div class="header">
                <h1>모아보기</h1>
                <div class="logo">
                  <img src={logo} alt="logo"></img>
                </div>
                <h4>카테고리를 선택해주세요</h4>
                {/* 클릭되면 폰트 색 바뀌게  */}
                <input type="button" value="지역별" className="categoryButton region" style={{backgroundColor:region.length?'red':'green'}}></input>
                <input type="button" value="대학별" className="categoryButton university" onClick={() => {alert('지역별')}}></input>
                <input type="button" value="관심사별" className="categoryButton interest" onClick={() => {alert('지역별')}}></input>
              </div>
            </div>
            
            {/*파드*/}
            <div class="feedWrap">
              <h2>최신 피드</h2> {/*카테고리마다 바뀜, js로 받아서 수정해야함*/}
              <h3>384건의 새로운 피드</h3> {/*숫자는 js로 받아서 수정*/}
              <div class="feedImage">
                {region.map((value, index)=>{
                  return (
                    <Category name={value}/>
                  );
                })}
                {/* <div class="feedText">같이 게임 할 사람</div> 이거는 div로 할지 텍스트로 할지 추후 해보고 수정! (아마 텍스트로 해야할듯?) */}
                {/* <Slideshow /> */}
              </div>
            </div>
          </div>

          {/*bottom navigation*/}
        <Navbar />
        </div>
      </div>
    );
  }
};

export default Main;