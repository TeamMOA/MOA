import {React} from 'react';
import "antd/dist/antd.css";
import './App.css';
import {Link} from 'react-router-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home, Login, Main, MyPage, Write, setting} from './routes';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/main" component={Main}/>
          <Route path="/mypage" component={MyPage}/>
          <Route path="/write" component={Write}/>
          <Route path="/setting" component={setting}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;