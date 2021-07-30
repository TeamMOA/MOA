import React from 'react';
import {Menu, Navbar} from '../components';
import instance from '../module/instance';
import { ImagePicker} from 'antd-mobile';
import {Input} from 'antd';
import 'antd-mobile/dist/antd-mobile.css';
import moment from 'moment';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const {TextArea} = Input;

const contentStyle = {
  height: '328px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#333333',
  borderRadius : '10px',
};

const categoriesList = [
  {
    Title : '지역을 선택해주세요',
    tags : ['없음', '서울', '경기', '인천', '충청', '강원' ,'전라', '경상', '제주'],
  },
  {
    Title : '대학을 선택해주세요',
    tags : ['서울대', '숭실대', '고려대', '홍익대','해양대', '한국대', '서강대', '건국대']
  },
  {
    Title : '관심사를 선택해주세요',
    tags : ['미술', '게임', '운동', '음악', '취업', '공부', '뜨개질', '여행']
  },
]

class Write extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content:'',
      region:[],
      univ:[],
      interest:[],
      categoryNum : 0,
      images:null,
      visible: false,
      showCloseButton: false,
    };
  }
  
  show=(value)=>{
    this.setState({ visible: true, categoryNum:value });
  }

  hide() {
    const {region, univ, interest} = this.state;
    this.setState({ visible: false });
    console.log(region);
    console.log(univ);
    console.log(interest);
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

  createPost = async() => {
    const formData = new FormData();
    formData.append('images', this.state.files);
  }

  addTags=(categoryNum, value)=>{
    if (categoryNum == 0) {
      this.setState({region:this.state.region.concat(value)});
    } else if (categoryNum == 1){
      this.setState({univ:this.state.univ.concat(value)});
    } else if (categoryNum == 2){
      this.setState({interest:this.state.interest.concat(value)});
    }
  }

  render(){
    // let profile_preview = null;
    // if(this.state.file !== ''){
    //   profile_preview = <img className='profile_preview' src={this.state.previewURL} style={{ position:"absolute", top:"160px", left:"45px", width:"324px", height:"324px", 'z-index':"2" }}></img>
    // }
    // let regionView = null;
    // regionView = <Button type="text" onClick={this.show.bind(this)} style={{ position:"absolute", top:"560px", left:"165px", width:"100px", color: "grey", 'z-index': "1" }}>{this.state.Selectregion}</Button>
    const {content, categoryNum, region, univ, interest} = this.state;
    return (
      <div className="wrap" >
        <div className="inner-box profile-background">
          <div className="header" >
            <h1>작성하기</h1>
          </div>
          <div className="content">
            <div className="write col-center" style={{height:'100%'}}>
              <input type="file" accept="image/*" id="input-file" onChange={(e) => {this.setState({images : e.target.files[0]}); console.log(e.target.files[0]);}} style={{display:'none'}}/>
              <div className="center imgArea" style={{marginBottom:'20px'}}>
                <label className="choose" htmlFor="input-file">파일선택</label>
                <TextArea value={content} onChange={(e)=>{this.setState({content:e.target.value})}} style={{textAlign:'center'}} rows={3} placeholder="텍스트를 입력하세요"/>
              </div>
              <div style={{flex:'1'}}>
                <h2 style={{marginBottom:'20px'}}>태그 붙이기</h2>
                <div className="row border-bottom write-category">
                  <h4 className="type">지역별</h4>
                  <div className="tags row" onClick={()=>{this.show(0);}}>{region.length==0?'눌러서 선택하세요':region.map((value, index)=>{
                    return(
                      <div key={index}>
                        {value}
                      </div>
                    );})}
                  </div>
                </div>
                <div className="row border-bottom write-category">
                  <h4 className="type">대학별</h4>
                  <div className="tags" onClick={()=>{this.show(1);}}>{univ.length==0?'눌러서 선택하세요':univ.map((value, index)=>{
                    return(
                      <div key={index}>
                        {value}
                      </div>
                    );})}
                  </div>
                </div>
                <div className="row write-category">
                  <h4 className="type">관심사별</h4>
                  <div className="tags" onClick={()=>{this.show(2);}}>{interest.length==0?'눌러서 선택하세요':interest.map((value, index)=>{
                    return(
                      <div key={index}>
                        {value}
                      </div>
                    );})}
                  </div>
                </div>
              </div>
              <div style={{textAlign:'right'}}onClick={()=>{this.createPost()}}>보내기</div>
            </div>
          </div>
          <Rodal customStyles={customStyles} visible={this.state.visible} onClose={()=>{this.hide()}}>
            <h1>{categoriesList[categoryNum].Title}</h1>
            {categoriesList[categoryNum].tags.map((value, index)=>{
              return (
                <div key={index} onClick={()=>{this.addTags(categoryNum, value)}}>
                  {value}
                </div>
              );
            })}
          </Rodal>
        </div>
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
  borderRadius: "35px",
  backgroundColor:"pink",

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
