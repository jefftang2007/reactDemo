import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { globalData } from '../services/globalData';

const rowStyle = {marginTop: "8px" }; 
const headStyle = {backgroundColor: "#efefef" }; 

export default class SendNotification extends Component {
    constructor(props) { 
        super(props); 
        this.state = { 
            subject: "",
            detail: "",
            subjectError: "",
            detailError: ""
        };
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.refs.detail.focus();
            event.preventDefault();
        }
    }

    updateSubject = (evt) => {
        this.setState({subject: evt.target.value, subjectError: ""});   
    }

    updateDetail = (evt) => {
        this.setState({detail: evt.target.value, detailError: ""});   
    }   
    
    handleSubmitClick = () => {
        let status = true;
        let subject = this.state.subject;
        if (subject == null || subject.length === 0 || subject.trim().length === 0) {
            this.setState({subjectError: "Subject can't be empty"});
            status = false;
        }

        let detail = this.state.detail;
        if (detail == null || detail.length === 0 || detail.trim().length === 0) {
            this.setState({detailError: "Detail can't be empty"});
            status = false;
        }   
        
        if (status) {
            console.log(subject.trim());
            console.log(detail.trim());
    
            console.log("Submit request...");

            
        }
    }

    logout() {
        globalData.login(false);
    }

    render() {
        if (!globalData.isLogin()) {
            return <Redirect push to="/" />;
        }

        return(
            <div>
                <div className="row" style={headStyle}>
                    <div className="col-sm-3">
                        <h3>Send Notification Page</h3>
                    </div>
                    <div className="col-sm-7 text-right">
                        <br/>
                        <Link to='/home'>Go Back Home</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/' onClick={this.logout}>Logout</Link>
                    </div>                
                </div>
                <br/><br/>
                <form className="form-horizontal">
                    <div className="row" style={rowStyle}>
                        <div className="col-sm-2 text-right">Subject *</div>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" 
                                placeholder="Subject for notification" 
                                onKeyPress={this.handleKeyPress}
                                onChange={this.updateSubject}/>
                            <small id="subject-error" className="text-danger">
                                {this.state.subjectError}
                            </small>
                        </div>
                    </div>
                    <div className="row" style={rowStyle}>
                        <div className="col-sm-2 text-right">Detail *</div>
                        <div className="col-sm-8">
                            <textarea type="text" ref="detail" className="form-control" 
                                placeholder="Detail for notification" 
                                rows="5" 
                                onChange={this.updateDetail}/>
                            <small id="detail-error" className="text-danger">
                                {this.state.detailError}
                            </small>
                        </div>
                    </div>      
                    <br/>
                    <div className="row" style={rowStyle}>
                        <div className="col-sm-2">&nbsp;</div>
                        <div className="col-sm-8">
                            <button className="btn btn-default" type="button"
                                onClick={this.handleSubmitClick}>
                                Send Notification
                            </button>
                        </div>
                    </div>                                   
                </form>
                <br/>
            </div>
        );
    }
}
