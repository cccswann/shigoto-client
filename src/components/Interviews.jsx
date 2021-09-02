import React from 'react';

const Interviews = ({ jobs }) => {
	return (
		<div className='alert alert-primary'>
			<span>Interviews: {jobs.jobs.filter(job => job.status=== 'Interview').length}</span>
		</div>
	);
};

export default Interviews;