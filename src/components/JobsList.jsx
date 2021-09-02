import React from 'react';
import { connect } from 'react-redux'
import JobItem from './JobItem';


const JobsList = ({ jobs }) => {
    return (
        <div>
            <h3>Jobs List:</h3>
            {jobs.jobs.map(job => 
                <ul key={job.id} className='list-group'>
                    <JobItem id={job.id} title={job.title} company={job.company} status={job.status}/>
                </ul>
            )}
        </div>
    );
};


export default JobsList;