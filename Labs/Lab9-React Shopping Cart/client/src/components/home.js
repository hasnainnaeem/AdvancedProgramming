import React, { Component } from 'react';
import {PFooter} from '../components/components';

import {
    Button
} from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        data: null
    };

    render() {
        return (
            <>
                <br/>
                <div className="container-fluid main-section-container">
                    <div className="container-fluid main-section">
                        <h1 className="text-center">Welcome to Product Manager</h1><br/>
                        <h2 className="text-center">Proceed as:</h2>
                        <p className="text-center">
                            <Button color="primary" onClick={this.fetchData}>Buyer</Button>{" "}
                            <Button color="primary">Seller</Button>{" "}
                            <Button color="primary">Admin</Button>
                        </p>
                    </div>
                </div>
                <br />
                <PFooter/>
            </>
        );
    }
}

export default Home;