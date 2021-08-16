export const fetchJob = () => {
    return(dispatch) => (
        fetch('http://127.0.0.1:3000/jobs')
        .then(resp => resp.json())
        .then(jobs => dispatch({type: 'FETCH_JOBS', payload: jobs}))
    )
}