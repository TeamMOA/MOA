import React from 'react';
import {Navbar, Category} from '../components';
import instance from '../module/instance';
import {Popover, Button, Carousel} from 'antd';
import feedIcon from '../assets/icons/feedIcon.png';
import 'react-slideshow-image/dist/styles.css'
import gwanghwamun from '../assets/images/gwanghwamun.png'
import travel1 from '../assets/images/travel1.png'
import travel2 from '../assets/images/travel2.png'
import travel3 from '../assets/images/travel3.png'

let clickORnot = '';

const clickedStyle = {
  background : clickORnot.length === 1 ? 'red' : 'white'
}

const region = ["경기", "서울", "충청", "강원", "전라", "경상", "제주"]
const univ = ["서울대", "숭실대", "고려대", "홍익대", "해양대", "한국대", "서강대", "+",]
const interest = ["미술", "게암", "운동", "취업", "공부", "뜨개질", "+"]


// const regionContent = (
//   <div>
    
//     <button>경기</button>
//     <button>서울</button>
//     <button>충청</button>
//     <button>강원</button>
//     <button>전라</button>
//     <button>경상</button>
//     <button>제주</button>
//   </div>
// );

// const univContent = (
//   <div>
//     <button>서울대</button>
//     <button>숭실대</button>
//     <button>고려대</button>
//     <button>홍익대</button>
//     <button>해양대</button>
//     <button>한국대</button>
//     <button>서강대</button>
//     <button>+</button>
//   </div>
// );

// const interestContent = (
//   <div>
//     <button>미술</button>
//     <button>게임</button>
//     <button>운동</button>
//     <button>음악</button>
//     <button>취업</button>
//     <button>공부</button>
//     <button>뜨개질</button>
//     <button>+</button>
//   </div>
// );

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const buttonWidth = 70;

class Main extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      initData: '',
      show: false,
      posts : [],
      headTitle : "최신 피드",
      postNum : 0,
      region : ["경기", "서울", "충청", "강원", "전라", "경상", "제주"],
      univ : ["서울대", "숭실대", "고려대", "홍익대", "해양대", "한국대", "서강대", "+",],
      interest : ["미술", "게암", "운동", "취업", "공부", "뜨개질", "+"],
    }
    this.setRegion = this.setRegion.bind(this);
    this.setUniv = this.setUniv.bind(this);
    this.setInterest = this.setInterest.bind(this);
  }

  

  componentDidMount = async() => {
    await instance.get("/api/post/3")
      .then((res) => {
        console.log(res.data);
        if(res.data.success){
          this.setState({posts:res.data.posts});
        }
      }).catch((error)=>{
        console.log(error);
      })

    console.log(this.state.posts);
  }

  setRegion() {
    this.setState({
      headTitle: "지역별 피드"
    })
  }

  setUniv() {
    this.setState({
      headTitle: "학교별 피드"
    })
  }

  setInterest() {
    this.setState({
      headTitle: "관심사별 피드"
    })
  }

  render(){
    
    const regionContent = () => {
      const result = this.state.region.map((value, index)=>{return (<button key="value">{value}</button>);})
      return <div>{result}</div>
    };

    const univContent = () => {
      const result = this.state.univ.map((value, index)=>{return (<button key="value">{value}</button>);})
      return <div>{result}</div>
    };

    const interestContent = () => {
      const result = this.state.interest.map((value, index)=>{return (<button key="value">{value}</button>);})
      return <div>{result}</div>
    };
    
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
              <Popover placement="bottom" content={regionContent} trigger="click">
                <Button className="categoryButton" onClick={this.setRegion}>지역별</Button>
              </Popover>
              <Popover placement="bottom" content={univContent} trigger="click">
                <Button className="categoryButton" onClick={this.setUniv}>학교별</Button>
              </Popover>
              <Popover placement="bottom" content={interestContent} trigger="click">
                <Button className="categoryButton" onClick={this.setInterest}>관심사별</Button>
              </Popover>
            </div>
            <div className="feedWrap">
              <div className="feedTitle">
                <img className="feedLogo" src={feedIcon} width="18px" height="16px"></img>
                <h2 className="recentFeed">{this.state.headTitle}</h2>
                <h3 className="postNum">{this.state.postNum}개</h3>
              </div>
              <Carousel afterChange={onChange}>
                {this.state.posts.map((value, index)=>{
                  return (
                    <div width="328px" height="328px" key={index}>
                      <img className="slideImage" src={value.img} width="328px" height="328px"></img>
                      <h3 style={contentStyle}>{value.content}</h3>
                    </div>
                  );
                })}
              </Carousel>
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