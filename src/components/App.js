import React from 'react';
import JobsContainer from './JobsContainer'
import Router from './Router'
import Navbar from './Navbar';

import './App.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <Router />
        </div>
    );
};

export default App;