import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchJobs } from '../actions/jobsActions'
import JobsList from '../components/JobsList'
import JobsApplied from '../components/Applied'
import Interviews from '../components/Interviews'
import Offers from '../components/Offers'
import Rejects from '../components/Rejects'
import ParticleBack from '../components/Particles'


class JobsContainer extends Component {
    state={fetched:false}
    componentDidMount() {
        this.props.fetchJobs()
        this.setState({fetched:true})
    }

    render() {
        return (
            
            <div className='container-md' style={{width: '75%', marginTop:'3rem', marginBottom:'4rem'}}>
                <h2>Dashboard</h2>
                <div className='row mt-4'>
                    <div className='col-sm'>
                        <JobsApplied jobs={this.props.jobs}/>
                    </div>
                    <div className='col-sm'>
                            <Interviews jobs={this.props.jobs}/>
                    </div>
                    <div className='col-sm'>
                        <Offers jobs={this.props.jobs}/>
                    </div>
                    <div className='col-sm'>
                        <Rejects jobs={this.props.jobs}/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        {this.state.fetched && <JobsList jobs={this.props.jobs}/>}
                    </div>
			    </div>
                <ParticleBack/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs }
}

export default connect(mapStateToProps,{ fetchJobs })(JobsContainer);
