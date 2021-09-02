import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const JobsApplied = ({ jobs }) => {
	return (
		<div className='alert alert-secondary'>
			<span>Pending: {jobs.jobs.filter(job => job.status !== 'Interview' && job.status !== 'Rejected' && job.status !== 'Offer').length}</span>
		</div>
	);
};

export default JobsApplied;