import React from 'react'
import { TiDelete } from 'react-icons/ti'
import { deleteJob } from '../actions/jobsActions'
import { connect } from 'react-redux'
import StatusBadge from './StatusBadge'

const JobItem = (props) => { 
	

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center mt-2'>
			{props.title} @ {props.company}
			<div>
				<StatusBadge status={props.status}/>
				<TiDelete size='1.5em' onClick={() => {props.deleteJob(props); window.location.reload(false);}}></TiDelete>
			</div>
		</li>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		deleteJob: job => dispatch(deleteJob(job))
	}
}

export default connect(null, mapDispatchToProps)(JobItem);