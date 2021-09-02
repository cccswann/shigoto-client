import React from 'react';
import { Switch, Route} from 'react-router-dom'

import HomeContainer from '../containers/HomeContainer'
import About from './About'
import ChartContainer from '../containers/ChartContainer';
import JobsContainer from '../containers/JobsContainer'
import JobsForm from './JobsForm'
import UserContainer from '../containers/UserContainer'



const Router = () => {
    return (

        <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/chart' component={ChartContainer} />
            <Route exact path='/jobs' component={JobsContainer} />
            <Route exact path='/jobs-form' component={JobsForm} />
            <Route path="/logout" render={props => <UserContainer {...props}/>}/>
            <Route path="/login" render={props => <UserContainer {...props} previousUrl={props.location.previousUrl}/>} />
            <Route path="/signup" render={props => <UserContainer {...props} />} />
        </Switch>
        
    );
};

export default Router;