import React from 'react';
import	{	useState	}	from	'react';
import logo from './logo.svg';
import './App.css';
import MessageBox from './components/components';
import Counter from './components/counter';
import EventBind from './components/event-bind';

const ThemeContext = React.createContext({foreground: "dark", background: "light"});

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = ThemeContext;
    render() {
        console.log(this.context);
        return <Button foreground={this.context.foreground} />;
    }
}

class Button extends React.Component {
    constructor (props) {
        super(props);
        this.foreground = props.foreground;
    }

    render() {
        return (
        <>
            <br />
            <p>Demonstrating the context passing:</p>
            <button className={this.foreground}>Submit</button>
        </>
        )
    }
}

// Example of HOC
class SimpleButton extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (<button {...this.props}>HOC Button</button>)
    }
}

// hooks: states in function components
const AnotherCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                setCount(count+1);
            }}>
                Click me
            </button>
        </div>
    )
};


class subscribeButton extends React.Component {
    constructor(props){
        super(props);
        this.state({className: 'middle',
                defaultMsg: "Welcome to our website!",
                clickMsg: "Thanks for subscribing!"
            }
        );
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e) {
        e.target.innerText("Subscribed");

    }
    render(){
        return <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler()}>
                    Click me
                </button>
            </div>
    }
}

class App extends React.Component {
    render() {

        return <div className="app">
            <MessageBox /><Counter /><EventBind />

            <ThemeContext.Provider value={{foreground: "dark", background: "light"}}>
                <Toolbar />
            </ThemeContext.Provider>

            <SimpleButton nice="nice"/>
            <AnotherCounter/>

            <subscribeButton>Nice yaar</subscribeButton>
            <subscribeButton>Nice yaar</subscribeButton>

        </div>
    }
}

export default App;
