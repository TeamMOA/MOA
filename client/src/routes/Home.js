import React from 'react';
import {Menu} from '../components';
import "antd/dist/antd.css";
class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      lists : [],
      len : 0
    }
  }

  componentDidMount(){
    const lists = [
        {
            id : 1,
            text : "프로젝트 생성하기",
            done : true,
        },
        {
            id : 2,
            text : "컴포넌트 스타일링 하기",
            done : true,
        },
        {
            id : 3,
            text : "API 적용하기",
            done : false,
        },
        {
            id : 4,
            text : "기능 구현하기",
            done : false,
        },
    ]
    this.setState({lists:lists});
    this.setState({len : lists.filter(list => list.done === false).length})
  }

  render(){
    return (
      <div>
        <div>
          <h1>Hello World!</h1>
          <h2>Hello World!</h2>
          <h3>Hello World!</h3>
          <h4>Hello World!</h4>
          <h5>Hello World!</h5>
          <h6>Hello World!</h6>
        </div>
      </div>
    );
  }
};

export default Home;


const nav = {
  
}