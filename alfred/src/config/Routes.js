import { BrowserRouter as Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

import LandingPage from "../pages/index";
import Portfolio from "../pages/portfolio";
import SignInPage from "../pages/singin";
import SignupPage from "../pages/signup";
import ActivatePage from "../pages/activate";

import { isAuth } from './auth';

const Routes = (props) => {

    const user = isAuth()

    return (
        <Switch>
                <Route path='/' component={LandingPage} exact />
                <Route path='/signin' component={SignInPage} exact />
                <Route path='/signup' component={SignupPage} exact />
                <Route path='/users/activate/:token' component={ActivatePage} exact />
            {user && ( <Route path='/portfolio' component={Portfolio} exact /> )}
        </Switch>
    );
};

export default Routes;
