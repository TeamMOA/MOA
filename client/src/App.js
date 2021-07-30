import {React} from 'react';
import "antd/dist/antd.css";
import './App.css';
import {Link} from 'react-router-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home, Login, Main, Profile, Write, setting, signup} from './routes';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Main}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/write" component={Write}/>
          <Route path="/setting" component={setting}/>
          <Route path="/signup" component={signup}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;