import React from 'react';
import {Menu, Navbar} from '../components';

class setting extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return (
      <div className="wrap" >
        <div className="inner-box setting-background">
          <div className="header" >
            <h1 style={{color:'black'}}>설정</h1>
          </div>
          <div className="content">
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
};

export default setting;