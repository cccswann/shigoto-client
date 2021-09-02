import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"

import { addJob } from '../actions/jobsActions'
import ParticleBack from './Particles';

const Styles = styled.div`
 padding: 20px;

 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   border-radius: 5px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 30px auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 select {
    border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%; 
 }

 label {
   color: #3d3d3d;
   display: block;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
 }

 .error {
   color: red;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: #256ce1;
   color: white;
   font-size: 14px;
   margin: 20px 0px;
`;

class JobsForm extends Component {

    state = {
        title: '',
        company: '',
        description: '',
        status: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addJob(this.state)
        this.props.history.push('/jobs')
    }

    render() {
        return (
            <Styles>
                <form onSubmit={this.handleSubmit}>
                    <h1>Add a Job</h1>
                    <br />
                    <label>Title</label>
                    <input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
                    <br />

                    <label>Company</label>
                    <input type="text" value={this.state.company} onChange={this.handleChange} name="company"/>
                    <br />

                    <label>Description</label>
                    <input type="text" value={this.state.description} onChange={this.handleChange} name="description"/>
                    <br />

                    <label>Status</label>
                    <select value={this.state.status} onChange={this.handleChange} name="status">
                        <option value="Want">Want to Apply</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Offer">Offer</option>
                    </select>
                    <br />

                    <input type="submit" value="Create Job" className="submitButton"/>
                </form>
                <ParticleBack/>
            </Styles>
        );
    }
}

export default connect(null, { addJob })(JobsForm);