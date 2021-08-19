import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import JobsList from './JobsList'
import JobsContainer from './JobsContainer'
import JobsForm from './JobsForm'



const Router = () => {
    return (

        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/jobs' component={JobsContainer} />
            <Route exact path='/jobs-form' component={JobsForm} />
        </Switch>
        
    );
};

export default Router;