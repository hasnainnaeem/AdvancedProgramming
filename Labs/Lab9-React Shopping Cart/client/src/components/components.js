import React, { Component } from 'react';
import {Link, NavLink as RRNavLink} from "react-router-dom";
import {
    Input,
    Form,
    Button,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Progress,
    Alert,
    NavLink
} from 'reactstrap';

export class PNavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {siteName: this.props.siteName || "Product Manager"};
    }
    render() {
        return (
        <>
            <Navbar color="dark" dark expand="md" className='dark-nav'>
                <NavbarBrand href="/" className='text-center'><b>{this.state.siteName}</b></NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
                    <NavLink tag={RRNavLink} exact to="/login/admin" activeClassName="active">Admin Panel</NavLink>
                    <NavLink tag={RRNavLink} exact to="/login/seller" activeClassName="active">Seller Panel</NavLink>
                    <NavLink tag={RRNavLink} exact to="/login/buyer" activeClassName="active">Buyer Panel</NavLink>
                </Nav>
            </Navbar>
        </>
        );
    }
}

export class PFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            siteName: this.props.siteName || "Product Manager",
            designer: this.props.designer || "Hasnain Naeem"
        };
    }
    render() {
        return (
            <>
                <div className="container-fluid" id="footer">
                    <p className="text-center">{this.state.siteName} | Designed with ❤ by {this.state.designer}.</p>
                </div>
            </>
        );
    }
}