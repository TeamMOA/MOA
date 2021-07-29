import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home, Login, Main, MyPage, Write, setting} from './routes';
import "antd/dist/antd.css";
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isAuthorized : false,
    }
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/main" component={Main}/>
            <Route path="/mypage" component={MyPage}/>
            <Route path="/write" component={Write}/>
            <Route path="/setting" component={setting}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
