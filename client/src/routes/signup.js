import React from 'react';
import { useHistory } from 'react-router';

class signup extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
        
      }
    }


    postlogin = (value) => {
        alert(value);
    }

    componentDidmount= () =>{
        
    }

    render(){
        return (
            <div className="wrap" >
                <div className="inner-box login-background">
                    <div className="center" style={{height:'100vh'}}>
                        <div className="btn btn-lg btn-pink" style={{margin:'10px'}} onClick={()=>{this.postlogin(1)}}>
                            소글이로 로그인 하기
                        </div>
                        <div className="btn btn-lg btn-white" style={{margin:'10px'}} onClick={()=>{this.postlogin(2)}}>
                            글소로 로그인 하기
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
};

export default signup;