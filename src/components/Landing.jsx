import React from 'react'

const Landing = () => {
    return (
        <div className="container content">
            <div className="row">
                <div className="col-lg talk" style={{marginTop: '5rem'}}>
                    <h1 style={{fontSize:'5.5em', fontWeight:'800', fontFamily:'sans-serif'}}>Welcome to Shigoto!</h1>
                    <br />
                    <h4 className="bold-four" style={{lineHeight:'2rem'}}>
                        A clean and simple application for helping you track the <br/>status of your job applications during your job hunt!
                    </h4>
                    <br />
                    <h6><a className="btn btn-light start start-two" style={{paddingLeft: '25px', paddingRight: '25px', paddingTop:'10px', paddingBottom:'10px', fontWeight:'600'}} href="/jobs-form">Add a Job!</a><a className="btn btn-light start start-two" style={{paddingLeft: '25px', paddingRight: '25px', paddingTop:'10px', paddingBottom:'10px', fontWeight:'600', marginLeft:'20px', background:'#12a0c4', color:'white'}} href="/jobs">Dashboard</a></h6>
                </div>
            </div>
        </div>
    )

}

export default Landing;

