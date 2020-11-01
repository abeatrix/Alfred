
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'


import LandingPage from "../pages/index";
import ChatroomPage from '../pages/chatroom';
import Portfolio from "../pages/portfolio";
import SignInPage from "../pages/singin";
import SignupPage from "../pages/signup";
import ActivatePage from "../pages/activate";
import MyPortfolio from '../Components/Portfolio/Dashboard/MyPortfolio'



const Routes = (props) => {

    return (
        <Switch>
                <Route path='/' component={LandingPage} exact />
                <Route path='/portfolio' component={Portfolio} exact />
                <Route path='/signin' component={SignInPage} exact />
                <Route path='/signup' component={SignupPage} exact />
                <Route path='/chatroom' component={ChatroomPage} exact />
                <Route path='/users/activate/:token' component={ActivatePage} exact />
                <Route path='/users/portfolio' component={MyPortfolio} exact />
        </Switch>
    );
};

export default Routes;
