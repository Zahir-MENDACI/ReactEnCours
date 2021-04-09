import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Login from '../pages/login';
import Prof from '../pages/prof';
import Signature from '../pages/signature';
import PrivateRoute from './privateRoute';

const Routes = ({theme, toggleTheme}) => {
    console.log(theme)
    return (
        <Router>
            <Navbar  theme={theme} toggleTheme={toggleTheme}/>
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <PrivateRoute exact path='/prof' component={Prof}></PrivateRoute>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/signature' component={Signature}></Route>
            </Switch>
        </Router>
    );
};

export default Routes;