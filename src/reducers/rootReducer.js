import { combineReducers } from 'redux'
import { jobsReducer } from './jobsReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    jobs: jobsReducer
})