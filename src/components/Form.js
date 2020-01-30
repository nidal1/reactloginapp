import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:undefined,
            password:undefined
        }
    }
    handleEmailInputs = (e) => {
        const email = e.target.value;
        this.setState({
            email
        });
    }
    handlePassInputs = (e) => {
        const password = e.target.value;
        this.setState({
            password
        });
    }

    handleSubmit = (e) => {
        this.props.userInfosChecking(e, {
            email:this.state.email,
            password:this.state.password
        });
    }
    
    
    
    
    render() {
        return (
            <form onSubmit = {this.handleSubmit}> 
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" onChange = {this.handleEmailInputs} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange = {this.handlePassInputs} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
