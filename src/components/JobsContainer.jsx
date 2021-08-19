import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchJobs } from '../actions/jobsActions'
import JobsList from './JobsList'


class JobsContainer extends Component {
    state={fetched:false}
    componentDidMount() {
        this.props.fetchJobs()
        this.setState({fetched:true})
    }

    render() {
        return (
            <div>
                {this.state.fetched && <JobsList jobs={this.props.jobs}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs }
}

export default connect(mapStateToProps,{ fetchJobs })(JobsContainer);
