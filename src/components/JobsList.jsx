import React from 'react';
import { connect } from 'react-redux'

const JobsList = ({ jobs }) => {
    return (
        <div>
            <h1>Jobs List:</h1>
            {jobs.map(job => 
                <ul key={job.id}>
                    <li >
                        {job.title}
                    </li>
                </ul>
        )}
        </div>
    );
};


export default JobsList;