import React from 'react';
import {Navbar, Like} from '../components';
import instance from '../module/instance';
import {Popover, Button, Carousel, Image} from 'antd';
import feedDefault from '../assets/icons/feedDefault.png';
import feedRegion from '../assets/icons/feedRegion.png';
import feedUniv from '../assets/icons/feedUniv.png';
import feedInterest from '../assets/icons/feedInterest.png';
import 'react-slideshow-image/dist/styles.css'

const region = ["경기", "서울", "인천", "충청", "강원", "전라", "경상", "제주"];
const univ = ["서울대", "숭실대", "고려대", "홍익대", "해양대", "한국대", "서강대"];
const interest = ["미술", "게임", "운동", "여행", "공부", "음식", "쇼핑", "사진"];




class Main extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      initData: '',
      show: false,
      posts : [],
      headTitle : "최신 피드",
      postNum : 0,
      region : '',
      univ : '',
      interest : '',
      feedIcon : feedDefault,
      color: '#FA959B',
      backgroundColor: '#ffffff',
      upDown: '-52px',
      filteredPost: [],
      filterData : ''
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


  /*posts에 불러오기*/
  componentDidMount = async() => {
    await instance.get("/api/post")
      .then((res) => {
        if(res.data.success){
          this.setState({posts:res.data.posts});
        }
      }).catch((error)=>{
      })

  }

  getPostFilter = async() => {
    const data = {
      region : this.state.region,
      univ : this.state.univ,
      interest : this.state.interest
    }
    
    await instance.post("/api/post/filter", data)
    .then((res)=>{
      if(res.data.success){
        this.setState({posts:res.data.posts});
      }
    }).catch((err)=>{
    
    })
  }

  handleRegionFilterChange = async(value) => {
    await this.setState({region: value, univ: "", interest: ""});
    this.getPostFilter();
  }
  
  handleUnivFilterChange = async(value) => {
    await this.setState({region: "", univ: value, interest: ""});
    this.getPostFilter();
  }

  handleInterestFilterChange = async(value) => {
    await this.setState({region: "", univ: "", interest: value});
    this.getPostFilter();
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
      const result = region.map((value, index)=>{return (<Button key={index} onClick={()=>{this.handleRegionFilterChange(value)}}>{value}</Button>);})
      return <div style={{backgroundColor:'#FA959B',}}>{result}</div>
    };

    const univContent = () => {
      const result = univ.map((value, index)=>{return (<Button key={index} onClick={()=>{this.handleUnivFilterChange(value)}}>{value}</Button>);})
      return <div style={{backgroundColor:'#FA959B',}}>{result}</div>
    };

    const interestContent = () => {
      const result = interest.map((value, index)=>{return (<Button key={index} onClick={()=>{this.handleInterestFilterChange(value)}}>{value}</Button>);})
      return <div style={{backgroundColor:'#FA959B',}}>{result}</div>
    };
    
    
    return (
      <div className="wrap">
          <div className="inner-box main-background">
            <div className="header">
              <h1>모아보기</h1>
              <h4>카테고리를 선택하여 사람들과 만나봅시다!</h4>
              <div className="categoryButtonWrap">
                <Popover placement="bottom" content={regionContent} trigger="click">
                {/*  */}
                  <Button className="categoryButton" onClick={()=>{this.setRegion(); this.feedRegionIcon(); this.upDown();}}>지역별</Button>
                </Popover>
                <Popover placement="bottom" content={univContent} trigger="click">
                  <Button className="categoryButton" onClick={()=>{this.setUniv(); this.feedUnivIcon(); this.upDown();}}>학교별</Button>
                </Popover>
                <Popover placement="bottom" content={interestContent} trigger="click">
                  <Button className="categoryButton" onClick={()=>{this.setInterest(); this.feedInterestIcon(); this.upDown();}}>관심사별</Button>
                </Popover>
              </div>
            </div>
              
              <div className="content" style={{marginTop:"20px"}}>
                <div className="feedTitle">
                  <img className="feedLogo" src={this.state.feedIcon} width="18px" height="16px" alt="FeedLogo"></img>
                  <h2 className="recentFeed">{this.state.headTitle}</h2>
                  <h3 className="postNum">{this.state.posts.length}개</h3>
                </div>
                <Carousel autoplay autoplaySpeed={5000}>
                  {/* {this.state.posts.map((value, index)=>{ */}
                  {this.state.posts.map((value, index)=>{

                    var splitedRegion = ''
                    var splitedUniv = ''
                    var splitedInterest = ''

                    const slideUserInfo = []
                    
                    if (value.region){
                      splitedRegion = value.region.split(',')
                      slideUserInfo.push(splitedRegion[0])
                    }
                    
                    if (value.univ){
                      splitedUniv = value.univ.split(',')
                      slideUserInfo.push(splitedUniv[0])
                    }

                    if (value.interest){
                      splitedInterest = value.interest.split(',')
                      slideUserInfo.push(splitedInterest[0])
                    }
                    
                    // sliderUserResult = slideUserInfo.join(' · ')

                    return (
                      <div width="328px" key={index}>
                        <img className="slideImage" src={value.img} width="328px" height="328px" alt="slideImage"></img>
                        <div className="feedContent">{value.content}</div>
                        <h3 className="slideUser">{slideUserInfo.join(" · ")}</h3>
                        <div className="feedProfileWrap">
                          <div className="nameProfile">
                            <Image style={{flex:1, borderRadius:"50%", objectFit:'cover'}} width={50} height={50} src={value.profileImg} alt="profileImg"/>
                            <div className="name">{value.nickname}</div>
                          </div>
                          <Like />
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
                
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