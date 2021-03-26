import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom'
import StudentsList from '../components/StudentsList';
import Etudiant from '../pages/etudiant';
import Home from '../pages/home';
import Validation from '../pages/validation';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/list' component={StudentsList}></Route>
                <Route exact path='/etudiant' component={Etudiant}></Route>
                <Route exact path='/etudiant/:id' component={Validation}></Route>
            </Switch>
        </Router>
    );
};

export default Routes;