import React from 'react';
import { Navbar} from '../components';
import instance from '../module/instance';
import {Input, Tag} from 'antd';
import 'antd-mobile/dist/antd-mobile.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import axios from 'axios';

import addPhoto from '../assets/icons/addPhoto.png';
import Center from '../assets/icons/Center.png';
import right from '../assets/icons/right.png';
import left from '../assets/icons/left.png';
import sendBtn from '../assets/icons/sendBtn.png';
import noImage from '../assets/images/noImage.png';

const {TextArea} = Input;
const { CheckableTag } = Tag;

const contentStyle = {
  height: '328px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#333333',
  borderRadius : '10px',
};

const data = []

const categoriesList = [
  {
    Title : '지역을 선택해주세요',
    tags : ['서울', '경기', '인천', '충청', '강원' ,'전라', '경상', '제주'],
  },
  {
    Title : '대학을 선택해주세요',
    tags : ['서울대', '숭실대', '고려대', '홍익대','해양대', '한국대', '서강대']
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
      uid : window.localStorage.getItem('uid'),
      nickname : window.localStorage.getItem('nickname'),
      content:'',
      region:[],
      region2:[],
      univ:[],
      univ2:[],
      interest:[],
      interest2:[],
      categoryNum : 0,
      visible: false,
      selectedTags: ['Books'],
      file:null,
      previewURL : null,
      imgValue:0,
    };
  }
  
  show=(value)=>{
    this.setState({ visible: true, categoryNum:value });
    if(value === 0) {
      this.setState({ region: [] });
      this.setState({ region2: [] });
    } else if(value === 1) {
      this.setState({ univ: [] });
      this.setState({ univ2: [] });
    } else if(value === 2) {
      this.setState({ interest: [] });
      this.setState({ interest2: [] });
    }
  }

  hide() {
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

    console.log(file);
  }

  createPost = async() => {
    const {uid, nickname, region2, univ2, interest2, content, file} = this.state;

    console.log(region2);
    console.log(univ2);
    console.log(interest2);
    console.log(content);
    console.log()
    let formData = new FormData();
    formData.append('uid', uid);
    formData.append('content', content);
    formData.append('nickname', nickname);
    formData.append('region', region2.join('|'));
    formData.append('univ', univ2.join('|'));
    formData.append('interest', interest2.join('|'));
    formData.append('images', file);

    await instance.post("/api/post", formData, {
      headers:{"Content-Type":"multipart/form-data"}
    }).then((res)=>{
      console.log(res.data)
      if (res.data.success){
        alert('업로드에 성공했습니다.');
      }
    }).catch((error)=>{
      console.log("axios error"+error);
    });

    // await axios({
    //   method : 'post',
    //   url : 'http://localhost:5000/api/post',
    //   data: formData,
    //   headers:{"Content-Type":"multipart/form-data"},
    // }).then((res)=>{
    //   console.log(res.data)
    //   if (res.data.success){
    //     alert('업로드에 성공했습니다.');
    //   }
    // }).catch((error)=>{
    //   console.log("axios error"+error);
    // });

    // console.log(this.state.file);
    // console.log(this.state.previewURL);
  }

  // addTags=(categoryNum, value)=>{
  //   if (categoryNum == 0) {
  //     this.setState({region:this.state.region.concat(value)});
  //   } else if (categoryNum == 1){
  //     this.setState({univ:this.state.univ.concat(value)});
  //   } else if (categoryNum == 2){
  //     this.setState({interest:this.state.interest.concat(value)});
  //   }
  // }

  handleChange(value, checked) {
    const { region, region2, univ, univ2, interest, interest2, categoryNum } = this.state;
    console.log(checked);   
    if (categoryNum == 0) {
      const nextSelectedTags = checked ? [...region, value] : region.filter(t => t !== value);
      this.setState({ region: nextSelectedTags });
      this.setState({ region2: nextSelectedTags });
    } else if (categoryNum === 1){
      const nextSelectedTags = checked ? [...univ, value] : univ.filter(t => t !== value);
      this.setState({ univ: nextSelectedTags });
      this.setState({ univ2: nextSelectedTags });
    } else if (categoryNum == 2){
      const nextSelectedTags = checked ? [...interest, value] : interest.filter(t => t !== value);
      this.setState({ interest: nextSelectedTags });
      this.setState({ interest2: nextSelectedTags });
    }
  }

  removeArray(value, index) {
    const { region2, univ, univ2, interest, interest2, categoryNum } = this.state;
    if(index === 0) {
      const changedArray = region2.filter(t => t !== value);
      this.setState({region2: changedArray});
    } else if(index === 1) {
      const changedArray = univ2.filter(t => t !== value);
      this.setState({univ2: changedArray});
    } else if(index === 2) {
      const changedArray = interest2.filter(t => t !== value);
      this.setState({interest2: changedArray});
    }
  }

  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }

  imgChange = () => {
    const { imgValue } = this.state;
    if(imgValue==2) {
      this.setState({imgValue:0});
    } else if(imgValue==1){   
      this.setState({imgValue:2});
    } else if(imgValue==0) {   
      this.setState({imgValue:1});
    }
  }

  render(){
    // let profile_preview = null;
    // if(this.state.file !== ''){
    //   profile_preview = <img className='profile_preview' src={this.state.previewURL} style={{ position:"absolute", top:"160px", left:"45px", width:"324px", height:"324px", 'z-index':"2" }}></img>
    // }
    // let regionView = null;
    // regionView = <Button type="text" onClick={this.show.bind(this)} style={{ position:"absolute", top:"560px", left:"165px", width:"100px", color: "grey", 'z-index': "1" }}>{this.state.Selectregion}</Button>
    const {content, categoryNum, region, univ, interest, previewURL, imgValue} = this.state;
    const type = [region, univ, interest];
    return (
      <div className="wrap" >
        <div className="inner-box profile-background">
          <div className="header" >
            <h1>작성하기</h1>
          </div>
          <div className="content">
            <div className="write col-center" style={{height:'100%'}}>
              <input type="file" accept="image/*" id="input-file" onChange={this.handleFileOnChange} style={{display:'none'}}/>    
              <div className="imgArea" style={{backgroundImage: `url(${previewURL?previewURL:noImage})`, backgroundSize:'cover', backgroundPosition:'center center'}}>
                <div className="choose">
                  <label htmlFor="input-file">
                    <img src={addPhoto} width={18} height={18} style={{margin:'5px'}}></img>
                  </label>
                  <img src={(imgValue==0)?(Center):(imgValue==1)?(left):(right)} width={18} height={18} style={{margin:'5px'}} onClick={this.imgChange}></img>
                </div>
                <div className="text" style={(imgValue==0)?({justifyContent:"center", textAlign:"center", fontSize:"30px"}):(imgValue==1)?({justifyContent:"flex-start", textAlign:"left", fontSize:"30px"}):({justifyContent:"flex-end", textAlign:"right", fontSize:"30px"})}>
                  <div style={{alignSelf:"center"}}>
                    {this.state.content.split('\n').map((line) => {
                      return (
                        <span>
                          {line}
                          <br />
                        </span>
                      );                 
                    })}
                  </div>
                </div>
              </div>
              <div style={{flex:'1'}}>
                <TextArea value={content} onChange={(e)=>{this.setState({content:e.target.value})}} style={{width:"300px", height:"50px", textAlign:'left', borderRadius:"10px", border:"solid 1px black"}} rows={3} placeholder="텍스트를 입력하세요"/>
                <h2 style={{marginBottom:'20px'}}>태그 붙이기</h2>
                <div className="row border-bottom write-category">
                  <h4 className="type">지역별</h4>
                  <div className="tags row" onClick={()=>{this.show(0);}}>{region.length==0?'눌러서 선택하세요':region.map((value, index)=>{
                    return(
                      <Tag key={index} closable onClose={()=>{this.removeArray(value, 0);}}>
                        {value}
                      </Tag>
                    );})}
                  </div>
                </div>
                <div className="row border-bottom write-category">
                  <h4 className="type">대학별</h4>
                  <div className="tags row" onClick={()=>{this.show(1);}}>{univ.length==0?'눌러서 선택하세요':univ.map((value, index)=>{
                    return(
                      <Tag key={index} closable onClose={()=>{this.removeArray(value, 1);}}>
                        {value}
                      </Tag>
                    );})}
                  </div>
                </div>
                <div className="row write-category">
                  <h4 className="type">관심사별</h4>
                  <div className="tags row" onClick={()=>{this.show(2);}}>{interest.length==0?'눌러서 선택하세요':interest.map((value, index)=>{
                    return(
                      <Tag key={index} closable onClose={()=>{this.removeArray(value, 2);}}>
                        {value}
                      </Tag>
                    );})}
                  </div>
                </div>
              </div>
              <div style={{textAlign:'right'}} >
                <img src={sendBtn} onClick={()=>{this.createPost()}}></img>
              </div>
            </div>
          </div>
          <Rodal customStyles={customStyles} visible={this.state.visible} onClose={()=>{this.hide()}}>
            <h1 style={{textAlign:"center", color:"white"}}>{categoriesList[categoryNum].Title}</h1>
            {categoriesList[categoryNum].tags.map((value, index)=>{
              return (
                <CheckableTag
                  key={value}
                  checked={(type[categoryNum].indexOf(value) > -1)} 
                  onChange={checked => this.handleChange(value, checked)}
                  style={{color:"white", fontSize:"20px", marginTop:"15px", borderRadius:"10px"}}
                >
                  {value}
                </CheckableTag>

                // <div key={index} onClick={()=>{this.addTags(categoryNum, value)}}>
                //   {value}
                // </div>
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
  width: '100vw',
  bottom: '0%',
  top: '70%',
  borderRadius: "35px",
  backgroundColor:"#fcbfc3",

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
