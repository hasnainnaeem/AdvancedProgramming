import React, { Component } from 'react';
import {PFooter} from '../components/components';

import {
    Button
} from 'reactstrap';

import '../css/admin-panel.css';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {data: null};
    }

    render() {
        return (
            <>
                <div>
                    <br />
                    <div className="shadow-box container text-center">
                        <p className="dark">Welcome to the admin panel.</p>
                    </div>

                    <div className="container-fluid main-section-container">
                        <br/>
                        <br/>
                        <div className="container-fluid main-section" style={{padding: "5% 30%"}}>
                            <br/>
                            <h2 className="text-center">Add Users</h2><br/>
                            <form id="user-form" action="./admin-panel/add-user">
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                    className="form-control" id="email" type="email" name="email"
                                    placeholder="name@example.com" required="required"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                    className="form-control" id="username" name="username" placeholder="username"
                                    required="required"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role">User Role</label>
                                    <select
                                    className="form-control" id="role" name="role">
                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select></div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                    className="form-control" id="password" type="password" name="password"
                                    placeholder="********"/>
                                </div>
                                <button className="btn btn-outline-light btn-lg btn-block" id="user-submit"
                                        type="button">Add User
                                </button>
                                <br/>
                                <p id="add-user-form-feedback"></p>
                            </form>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <div className="container">
                    <div className="container-fluid main-section" style={{padding: "5% 30%"}}><br/>
                        <h2 className="text-center">Delete Users</h2><br/>
                        <form id="delete-form" action="./admin-panel/delete-user">
                            <div className="form-group">
                                <label htmlFor="delete-username">Username</label>
                                <input
                                className="form-control" id="delete-username" name="username" placeholder="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="delete-role">User Role</label>
                                <select
                                className="form-control" id="delete-role" name="role">
                                <option>Buyer</option>
                                <option>Seller</option>
                            </select>
                            </div>
                            <button className="btn btn-outline-light btn-lg btn-block" id="delete-submit"
                                    type="button">Delete User
                            </button>
                            <br/>
                            <p id="delete-user-form-feedback"></p>
                        </form>
                    </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="display-section container-fluid main-section" style={{padding: "5% 30%"}}><br/>
                        <h2 className="text-center">Display Users</h2><br/>
                        <form id="display-user-form" action="./admin-panel/fetch-users">
                            <div className="form-group"><label htmlFor="role">User Role</label><select
                                className="role form-control" name="role">
                                <option>Buyer</option>
                                <option>Seller</option>
                            </select></div>
                            <button className="btn btn-outline-light btn-lg btn-block" id="display-form"
                                    type="button">Display Users
                            </button>
                            <br/>
                            <p id="display-user-form-feedback"></p>
                        </form>
                        <div id="users"></div>
                        <br/><br/>
                    </div>
                    <div className="container-fluid" id="footer">
                        <p className="text-center">Product Manager | Designed with &#x2764; by Hasnain Naeem.</p>
                    </div>
                </div>
            </>
        );
    }
}

export default AdminPanel;