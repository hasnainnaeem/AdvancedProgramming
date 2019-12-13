import React, { Component } from 'react';
import axios from 'axios';
import {PFooter, PNavigationBar} from '../components/components';

import {
    Button,
    Input,
    Form
} from 'reactstrap';
import AdminPanel from "./admin-panel";
import BuyerPanel from "./buyer-panel";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {feedback: "", email: "", password:"", loggedIn: true};
        this.loginHandler = this.loginHandler.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }

    async loginHandler(e) {
        e.preventDefault();
        axios.post("/login/"+this.props.userType,
            {
                email: this.state.email,
                password: this.state.password
            },)
            .then(res => {
                this.setState({feedback: res.data.feedback, loggedIn: res.data.loggedIn});
            });
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handlePassChange(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <>
                {this.state.loggedIn ?
                    <div>
                    {
                        this.props.userType==="admin"?
                            <AdminPanel/>
                            :
                            <>
                                {
                                    this.props.userType==="seller"?
                                        <></>
                                        :
                                        <>
                                            <BuyerPanel/>
                                        </>
                                }
                            </>
                    }
                    </div>
                    :
                    <div id="wrap"><br/><br/><br/>
                        <h1 className="text-center dark">Log In</h1>
                        <div className="container main-section-container">
                            <div className="shadow-box container" >
                                <Form id="login-form" method="post">
                                    <label>Email</label>
                                    <br/>
                                    <input
                                        className="form-control"
                                        id="email" placeholder="username@example.com" name="email"
                                        required="required"
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}
                                    />
                                    <br/>
                                    <label>Password</label>
                                    <br/>
                                    <input
                                        className="form-control" id="password"
                                        type="password"
                                        name="password"
                                        placeholder="*********"
                                        required="required"
                                        value={this.state.password}
                                        onChange={this.handlePassChange}
                                    />
                                    <hr/>
                                    <p className="text-center">
                                        <Button outline color="primary" onClick={this.loginHandler}>Login</Button>
                                    </p>
                                    <p id="login-feedback">{this.state.feedback}</p>
                                </Form>
                            </div>
                        </div>
                    </div>

                }
            </>
        );
    }
}

export default Login;