import React from 'react';

const Rejects = ({ jobs }) => {
	return (
		<div className='alert alert-danger'>
			<span>Rejects: {jobs.jobs.filter(job => job.status=== 'Rejected').length}</span>
		</div>
	);
};

export default Rejects;