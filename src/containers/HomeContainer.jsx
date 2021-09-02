import React, { Component } from 'react'
import { connect } from 'react-redux'
import ParticleBack from '../components/Particles'
import Landing from '../components/Landing'



class HomeContainer extends Component {

    render() {
        return (
            <div className='container-md' style={{width: '75%', marginTop:'3rem', marginBottom:'4rem'}}>
                <Landing/>
                <ParticleBack/>
            </div>
        );
    }

}

export default HomeContainer;