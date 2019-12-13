import React, {Component} from 'react';

class EventBind extends Component {
    constructor(props){
        super(props);
        this.state={ message:'Hello' }
    }

    clickHandler() {
        this.setState({message: 'Good Bye.'});
        console.log(this.state);
    }

    render() {
        return <div>Check Console Log
            <button onClick={this.clickHandler.bind(this)}>Click</button>
        </div>
        }
}

export default EventBind;