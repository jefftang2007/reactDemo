import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { globalData } from '../services/globalData';

const rowStyle = {marginTop: "8px" }; 

export default class Login extends Component {
    constructor(props) { 
        super(props); 
        this.state = {
            username: "",
            password: "",
            redirect: false
        };
    }

    handleKeyPressUsername = (event) => {
        if (event.key === 'Enter') {
            this.refs.password.focus();
            event.preventDefault();
        }
    }

    handleKeyPressPassword = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }

    updateUserName(evt) {
        this.setState({username: evt.target.value});   
    }

    updatePassword(evt) {
        this.setState({password: evt.target.value});   
    }   

    handleSubmitClick() {
        let status = true;
        let username = this.state.username;
        if (username == null || username.length === 0 || username.trim().length === 0) {
            status = false;
        }

        let password = this.state.password;
        if (password == null || password.length === 0) {
            status = false;
        }   
        
        if (status) {
            username = username.trim();
    
            if (username === "admin" && password === "password") {
                globalData.login(true);
                this.setState({redirect: true});
            }
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/home" />;
        }

        return(
          <div>
                <h3>Welcome to Grants.gov Admin Page</h3>
                <br/>
                <form className="form-horizontal">
                    <div className="row" style={rowStyle}>
                        <div className="col-sm-3 text-right">UserName *</div>
                        <div className="col-sm-4">
                            <input type="text" ref="userid" value={this.state.username}
                                className="form-control" placeholder="username" 
                                onKeyPress={this.handleKeyPressUsername}
                                onChange={evt => this.updateUserName(evt)}/>
                        </div>
                    </div>
                    <div className="row" style={rowStyle}>
                        <div className="col-sm-3 text-right">Password *</div>
                        <div className="col-sm-4">
                            <input type="password" ref="password" value={this.state.password}
                                className="form-control" placeholder="password" 
                                onKeyPress={this.handleKeyPressPassword}
                                onChange={evt => this.updatePassword(evt)}/>
                        </div>
                    </div> 
                    <br/>     
                    <div className="row" style={rowStyle}>
                        <div className="col-sm-3">&nbsp;</div>
                        <div className="col-sm-4">
                            <button className="btn btn-default" type="button"
                                onClick={evt => this.handleSubmitClick()}>
                                Login
                            </button>
                        </div>
                    </div>                                   
                </form>
          </div>
        );
    }
}