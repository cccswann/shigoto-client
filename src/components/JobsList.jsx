import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import JobItem from './JobItem';


const JobsList = ({ jobs }) => {

    return (
        <div>
            <h3>Jobs List:</h3>
            <input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
			/>
            {jobs.jobs.map(job => 
                <ul key={job.id} className='list-group'>
                    <JobItem id={job.id} title={job.title} company={job.company} status={job.status}/>
                </ul>
            )}
        </div>
    );
};


export default JobsList;