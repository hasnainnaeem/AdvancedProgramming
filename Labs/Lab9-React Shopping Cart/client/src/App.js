import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './components/home';
import Login from './components/login';

import {PFooter, PNavigationBar} from "./components/components";

class App extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }
    state = {
        data: null
    };

    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
            .then(res => this.setState(
                {data: res.data },
                ))
            .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async (url) => {
        const response = await fetch(url);
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    async fetchData() {
        const response = await fetch('/express-backend');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        console.log(body);
    }


    render() {

        return (
            <div className="App">
                <Router>
                    <PNavigationBar/>
                    <Switch>
                        <Route path="/login/admin">
                            <Login userType="admin"/>
                        </Route>
                        <Route path="/login/buyer">
                            <Login userType="buyer"/>
                        </Route>
                        <Route path="/login/seller">
                            <Login userType="seller"/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </div>
    );
    }
}

export default App;