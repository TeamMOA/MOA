import React from 'react';
import {Menu, Navbar} from '../components';

class Write extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  

  render(){
    return (
      <div>
        <h1>Write</h1>
        <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
        <Navbar />
      </div>
    );
  }
};

export default Write;