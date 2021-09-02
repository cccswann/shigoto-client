import React from 'react';

const Offers = ({ jobs }) => {
	return (
		<div className='alert alert-success'>
			<span>Offers: {jobs.jobs.filter(job => job.status=== 'Offer').length}</span>
		</div>
	);
};

export default Offers;