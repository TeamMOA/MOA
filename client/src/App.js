import {React} from 'react';
import "antd/dist/antd.css";
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login, Main, Profile, Write, setting, signup} from './routes';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Main}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/profile" component={Profile}/>
          <PrivateRoute path="/write" component={Write}/>
          <PrivateRoute path="/setting" component={setting}/>
          <Route path="/signup" component={signup}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;