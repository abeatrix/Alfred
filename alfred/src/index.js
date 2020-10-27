import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignInPage from './pages/singin'
import SignupPage from './pages/signup'
import ActivatePage from './pages/activate'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
          <Route path='/' component={App} exact />
          <Route path='/signin' component={SignInPage} exact />
          <Route path='/signup' component={SignupPage} exact />
          <Route path='/users/activate/:token' component={ActivatePage} exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
