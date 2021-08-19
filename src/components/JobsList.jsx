import React from 'react';
import { connect } from 'react-redux'

const JobsList = ({ jobs }) => {
    return (
        <div>
            <h1>Jobs List:</h1>
            {jobs.jobs.map(job => 
                <ul key={job.id}>
                    <li >
                        {job.title} - {job.company} - {job.description} - {job.status} 
                    </li>
                </ul>
            )}
        </div>
    );
};


export default JobsList;