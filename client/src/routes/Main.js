import React from 'react';
import {Navbar, Like} from '../components';
import instance from '../module/instance';
import {Popover, Button, Carousel} from 'antd';
import feedDefault from '../assets/icons/feedDefault.png';
import feedRegion from '../assets/icons/feedRegion.png';
import feedUniv from '../assets/icons/feedUniv.png';
import feedInterest from '../assets/icons/feedInterest.png';
import 'react-slideshow-image/dist/styles.css'


function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  
  fontSize: '20px',
  fontWeight: 'bold',
  width: '328px',
  height: '328px',
  color: '#fff',
  textAlign: 'center',
  float: 'left',
  position: 'relative',
  top: '-328px',
  left: '23px',
  overflow: 'hidden',
  wordBreak: 'break-all',
  verticalAlign: 'middle',
  paddingTop: '150px',
  paddingLeft: "20px",
  paddingRight: "20px",
}

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
      feedIcon : feedDefault,
      color: '#FA959B',
      backgroundColor: '#ffffff',
      upDown: '-52px',
    }
    this.setRegion = this.setRegion.bind(this);
    this.setUniv = this.setUniv.bind(this);
    this.setInterest = this.setInterest.bind(this);

    this.feedRegionIcon = this.feedRegionIcon.bind(this);
    this.feedUnivIcon = this.feedUnivIcon.bind(this);
    this.feedInterestIcon = this.feedInterestIcon.bind(this);

    this.upDown = this.upDown.bind(this);

    this.setColor = this.setColor.bind(this);
  }
  

  componentDidMount = async() => {
    await instance.get("/api/post")
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

  feedRegionIcon() {
    this.setState({
      feedIcon: feedRegion
    })
  }

  feedUnivIcon() {
    this.setState({
      feedIcon: feedUniv
    })
  }

  feedInterestIcon() {
    this.setState({
      feedIcon: feedInterest
    })
  }

  upDown() {
    this.setState({
      upDown: '-122px'
    })
  }

  // test용!!!

  setColor() {
    this.setState({
      color: 'white',
      backgroundColor: '#FA959B'
    })
  }

  

  render(){
    
    // style={{color: this.state.color, backgroundColor: this.state.backgroundColor}} onClick={this.setColor}

    const regionContent = () => {
      const result = this.state.region.map((value, index)=>{return (<Button key="index">{value}</Button>);})
      return <div>{result}</div>
    };

    const univContent = () => {
      const result = this.state.univ.map((value, index)=>{return (<Button key="index">{value}</Button>);})
      return <div>{result}</div>
    };

    const interestContent = () => {
      const result = this.state.interest.map((value, index)=>{return (<Button key="index" >{value}</Button>);})
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
                <Button className="categoryButton" onClick={this.setRegion, this.feedRegionIcon, this.upDown}>지역별</Button>
              </Popover>
              <Popover placement="bottom" content={univContent} trigger="click">
                <Button className="categoryButton" onClick={this.setUniv, this.feedUnivIcon, this.upDown}>학교별</Button>
              </Popover>
              <Popover placement="bottom" content={interestContent} trigger="click">
                <Button className="categoryButton" onClick={this.setInterest, this.feedInterestIcon, this.upDown}>관심사별</Button>
              </Popover>
            </div>
            <div className="feedWrap" style={{bottom: this.state.upDown}}>
              <div className="feedTitle">
                <img className="feedLogo" src={this.state.feedIcon} width="18px" height="16px"></img>
                <h2 className="recentFeed">{this.state.headTitle}</h2>
                <h3 className="postNum">{this.state.posts.length}개</h3>
              </div>
              <Carousel afterChange={onChange}>
                {this.state.posts.map((value, index)=>{
                  var splitedRegion = value.region.split(',')
                  var splitedUniv = value.univ.split(',')

                  return (
                    <div key={index}>
                      <img className="slideImage" src={value.img} width="328px" height="328px"></img>
                      <div style={contentStyle}>{value.content}</div>
                      {/* 지역 여러개 있는 것 짤림 (어떻게 할지 얘기해보기) */}
                      <h3 className="slideUser">{splitedRegion[0]} · {splitedUniv[0]}</h3>
                      
                      </div>
                  );
                })}
              </Carousel>
              <div className="feedProfileWrap">
                <div className="nameProfile">
                  {/* <img src={value.profileImg}></img> */}
                </div>
                <Like />
              </div>
            </div>
            
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