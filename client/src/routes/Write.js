import React from 'react';
import {Menu, Navbar} from '../components';
import instance from '../module/instance';
import { Button, Input, Carousel } from 'antd';
import moment from 'moment';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const { TextArea } = Input;
const contentStyle = {
  height: '328px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#333333',
  borderRadius : '10px',
};


const region = ['없음', '서울', '경기', '인천', '충청', '강원' ,'전라', '경상', '제주'];
const univ = ['없음', '숭실대', '서울대', '연세대', '고려대', '중앙대', '하버드'];
const interest = ['없음', '게임', '운동', '공부', '취미'];

class Write extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: "지역별",
      visible: false,
      showCloseButton: false,
      Selectregion : [],
      Selectuniversity: [],
      Selectinterest: [],
      regionText: "눌러서 선택해주세요",
      regionInput: "",
      universityText: "눌러서 선택해주세요",
      universityInput: "",
      title: "음",
      file : '',
      previewURL : '',
      isSelectedRegion0: false,
      isSelectedRegion1: false,
      isSelectedRegion2: false,
      isSelectedRegion3: false,
      isSelectedRegion4: false,
      isSelectedRegion5: false,
      isSelectedRegion6: false,
      isSelectedRegion7: false,
      isSelectedRegion8: false
    };

    this.getRegion = this.getRegion.bind(this);
  }
  
  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
    
  }

  getUniversity = (universityNum) => {
    this.setState({ universityText: "" });
    this.setState({ visible: false });
    this.setState({ universityInput: this.state.university[universityNum] });
    console.log(this.state.universityInput);
  }

  getRegion = (regionNum) => {
    this.setState({ regionText: "s"});
    if(this.state.isSelectedRegion0) {
      this.setState({ Selectregion:this.state.Selectregion.concat(region[0]) });
      console.log("0");
    }
    else {
      if(this.state.isSelectedRegion1) {
        this.setState({ Selectregion:this.state.Selectregion.concat(region[1]) });
        console.log("1");
      } 
      else if(this.state.isSelectedRegion2) {
        this.setState({ Selectregion:this.state.Selectregion.concat(region[2]) });
        console.log("2");
      }
    }
    console.log(this.state.Selectregion);
    this.setState({ visible: false });
  }
    
  

  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file : file,
        previewURL : reader.result
      })
    }
    reader.readAsDataURL(file);
  }
  

  render(){
    let profile_preview = null;
    if(this.state.file !== ''){
      profile_preview = <img className='profile_preview' src={this.state.previewURL} style={{ position:"absolute", top:"160px", left:"45px", width:"324px", height:"324px", 'z-index':"2" }}></img>
    }
    let regionView = null;
    regionView = <Button type="text" onClick={this.show.bind(this)} style={{ position:"absolute", top:"560px", left:"165px", width:"100px", color: "grey", 'z-index': "1" }}>{this.state.Selectregion}</Button>
    
    return (

      <div className="wrap" >
        <div className="inner-box profile-background">
          <div className="header" >
            <h1>작성하기</h1>
          </div>
          <div className="content">
            <div className="write">
              <div style={{width:'328px', height:'328px', backgroundColor:'black'}}>
                
              </div>
            </div>
          </div>
        </div>

        {/* <h1 style={{ position:"absolute", top:"50px", left:"150px", color: "black" }}>작성하기</h1>
        <Square />
        <ImageBox />
        <div class="TextForm">
          <TextArea id="titleid" placeholder="제목을 입력해주세요" value={this.state.title} onChange={(e)=>{this.setState({title:e.target.value})}} bordered={false} style={{ textAlign: "center", verticalAlign:"middle", position:"absolute", top:"160px", left:"45px", width:"324px", height:"324px", color: "black", 'z-index': "2" }} />
        </div>
        <h2 style={{ position:"absolute", top:"500px", left:"45px", color: "black", 'z-index': "1"}}>태그 붙이기</h2>
        <h3 style={{ position:"absolute", top:"560px", left:"55px", color: "grey", 'z-index': "1"}}>지역별</h3>
        <Button type="text" onClick={()=>{this.setState({ visible: true});}} style={{ position:"absolute", top:"560px", left:"165px", color: "grey", opacity: "0.5", 'z-index': "1" }}>{this.state.regionText}</Button>
        <hr style={{ position:"absolute", top:"595px", left:"35px", color: "grey", width: "344px", 'z-index': "1" }}></hr>
        <h3 style={{ position:"absolute", top:"630px", left:"55px", color: "grey", 'z-index': "1" }}>대학별</h3>
        <Button type="text" style={{ position:"absolute", top:"630px", left:"165px", color: "grey", opacity: "0.5", 'z-index': "1" }}>눌러서 선택해주세요</Button>
        <hr style={{ position:"absolute", top:"665px", left:"35px", color: "grey", width: "344px", 'z-index': "1" }}></hr>
        <h3 style={{ position:"absolute", top:"700px", left:"55px", color: "grey", 'z-index': "1" }}>관심사별</h3>
        <Button type="text" style={{ position:"absolute", top:"700px", left:"165px", color: "grey", opacity: "0.5", 'z-index': "1" }}>눌러서 선택해주세요</Button>
        {regionView}
        <div>
          <input type='file' 
            accept='image/jpg,impge/png,image/jpeg,image/gif' 
            name='profile_img' 
            onChange={this.handleFileOnChange}
            style={{ position:"absolute", top:"120px", left:"45px", 'z-index': "3" }}>
          </input>
          {profile_preview}
        </div>

        <Rodal customStyles={customStyles} visible={this.state.visible} onClose={this.hide.bind(this)}>
          <div>       
            
          </div>
        </Rodal> */}

        <Navbar />
      </div>
    );
  }
};


const customStyles = {
  height: '300px',
  width: '414px',
  bottom: '0%',
  top: '70%',
  'border-radius': "35px",
  'background-color':"pink",
};

class Square extends React.Component{
  constructor(props){
  super(props);
  }
  render(){
    const style ={
      position:"absolute",
      top:"110px",
      left:"20px",
      width:"374px",
      height:"818px",
      'background-color':"white",
      display:"inline-block",
      'box-shadow': "0px 0px 5px #000",
      'border-radius': "20px",
      'z-index': "1"
    };
  
    return(
        <div style ={style}>
      </div>
    )
  }  
}

class ImageBox extends React.Component{
  constructor(props){
  super(props);
}
render(){
  const style ={
    position:"absolute",
    top:"160px",
    left:"45px",
    width:"324px",
    height:"324px",
    'background-color':"grey",
    display:"inline-block",
    'border-radius': "8px",
    'z-index': "2",
    opacity: "0.5"
  };
  
  return(
      <div style ={style}>
     </div>
  )
}  
}

export default Write;
