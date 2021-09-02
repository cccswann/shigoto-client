import React, { Component } from 'react'
import { connect } from 'react-redux'
import JobChart from '../components/Chart'

import { fetchJobs } from '../actions/jobsActions'
import ParticleBack from '../components/Particles'

class ChartContainer extends Component {
    state={fetched:false}
    componentDidMount() {
        this.props.fetchJobs()
        this.setState({fetched:true})
    }

    render() {
        return (
            <div className='container-md' style={{width: '75%', marginTop:'3rem', marginBottom:'4rem'}}>
                <h2>Jobs Chart</h2>
                <div style={{width: '100%', marginTop:'1rem', marginBottom:'4rem', background:'rgb(255, 255, 255,.9)', borderRadius:'6px', padding:'25px'}}>
                    <JobChart jobs={this.props.jobs}/>
                    <ParticleBack/>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { jobs: state.jobs }
}

export default connect(mapStateToProps,{fetchJobs})(ChartContainer);