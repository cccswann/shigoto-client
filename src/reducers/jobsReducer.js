export const jobsReducer = (state = {jobs:[]}, action) => {
    switch(action.type) {
        case 'FETCH_JOBS':
            return {jobs: action.payload}
        case 'ADD_JOB':
            return {jobs: [...state.jobs, action.payload]}
        case 'DELETE_JOB':
            return {
                ...state,
                jobs: state.jobs.filter(
                (job) => job.id !== action.payload
                ),
            };
        default:
            return state
    }
}

