export const jobsReducer = (state = {jobs:[]}, action) => {
    switch(action.type) {
        case 'FETCH_JOBS':
            return {jobs: action.payload}
        case 'ADD_JOB':
            return [...state, action.payload]
        default:
            return state
    }
}

