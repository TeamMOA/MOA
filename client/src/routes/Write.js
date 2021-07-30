import React from 'react';
import {Menu, Navbar} from '../components';
import instance from '../module/instance';
import { Button, Input } from 'antd';
import moment from 'moment';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const { TextArea } = Input;

const region = ['서울', '대전', '대구', '부산'];
const univ = [];
const interest = [];

class Write extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: "지역별",
      visible: false,
      showCloseButton: false,
      Selectregion : [],
      universityText: "눌러서 선택해주세요",
      university: ["없음", "숭실대", "서울대", "승강기대"],
      universityInput: "",
      title: "음",
      file : '',
      previewURL : '',
      isSelected : false,
    };

    this.getUniversity = this.getUniversity.bind(this);
  }
  
  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
    console.log(this.state.Selectregion);
  }

  getUniversity = (universityNum) => {
    this.setState({ universityText: "" });
    this.setState({ visible: false });
    this.setState({ universityInput: this.state.university[universityNum] });
    console.log(this.state.universityInput);
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
    let universityView = null;
    universityView = <Button onClick={this.show.bind(this)} style={{ position:"absolute", top:"560px", left:"165px", width:"100px", color: "grey", 'z-index': "1" }}>{this.state.universityInput}</Button>
    
    return (
      <div>
        <h1 style={{ position:"absolute", top:"50px", left:"150px", color: "black" }}>작성하기</h1>
        <Square />
        <ImageBox />
        <div class="TextForm">
          <TextArea id="titleid" placeholder="제목을 입력해주세요" value={this.state.title} onChange={(e)=>{this.setState({title:e.target.value})}} bordered={false} style={{ textAlign: "center", verticalAlign:"middle", position:"absolute", top:"160px", left:"45px", width:"324px", height:"324px", color: "black", 'z-index': "2" }} />
        </div>
        <h2 style={{ position:"absolute", top:"500px", left:"45px", color: "black", 'z-index': "1"}}>태그 붙이기</h2>
        <h3 style={{ position:"absolute", top:"560px", left:"55px", color: "grey", 'z-index': "1"}}>지역별</h3>
        <Button type="text" onClick={()=>{this.setState({ visible: true});}} style={{ position:"absolute", top:"560px", left:"165px", color: "grey", opacity: "0.5", 'z-index': "1" }}>{this.state.universityText}</Button>
        <hr style={{ position:"absolute", top:"595px", left:"35px", color: "grey", width: "344px", 'z-index': "1" }}></hr>
        <h3 style={{ position:"absolute", top:"630px", left:"55px", color: "grey", 'z-index': "1" }}>대학별</h3>
        <Button type="text" style={{ position:"absolute", top:"630px", left:"165px", color: "grey", opacity: "0.5", 'z-index': "1" }}>눌러서 선택해주세요</Button>
        <hr style={{ position:"absolute", top:"665px", left:"35px", color: "grey", width: "344px", 'z-index': "1" }}></hr>
        <h3 style={{ position:"absolute", top:"700px", left:"55px", color: "grey", 'z-index': "1" }}>관심사별</h3>
        <Button type="text" style={{ position:"absolute", top:"700px", left:"165px", color: "grey", opacity: "0.5", 'z-index': "1" }}>눌러서 선택해주세요</Button>
        {universityView}
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
            {region.map((value, index) =>{
              return (<Button key={index} onClick={() => {
                this.setState({Selectregion:this.state.Selectregion.concat(value), isSelected:!this.state.isSelected})
              }} style={{backgroundColor:this.state.isSelected?'red':'green'}}>{value}</Button>);
            })}
            
          <Button onClick={() => this.getUniversity(1)} style={{ position:"absolute", top:"60px", left:"55px", color: "grey" }}>숭실대</Button>
            <Button onClick={() => this.getUniversity(2)} style={{ position:"absolute", top:"60px", left:"165px", color: "grey" }}>서울대</Button>
            <Button onClick={() => this.getUniversity(3)} style={{ position:"absolute", top:"60px", left:"275px", color: "grey" }}>승강기대</Button>
            <Button onClick={() => this.getUniversity(0)} style={{ position:"absolute", top:"110px", left:"165px", color: "grey" }}>없음</Button>
          </div>
        </Rodal>
        {/*bottom navigation*/}
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
