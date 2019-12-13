import React from 'react';
import Counter from "./counter";

class Component extends	React.Component	{
    constructor(props)	{
        super(props);
        this.state	=	{	username:	''	};
        this.handleChange	=	this.handleChange.bind(this);
        this.handleSubmit	=	this.handleSubmit.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.ref = React.createRef();
    }
    handleChange(event)	{
        this.setState({	value:	event.target.value	});
        console.log(event.target.value);
    }
    handleSubmit(event)	{
        alert(this.state.username);
        event.preventDefault();
    }
    handleButton(event){
        console.log(this.ref.current);
        alert(event.target.innerText + " Button Pressed.");
        event.preventDefault();
    }
    render(){
        return	(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                    />
                    <input	type="submit"	value="Submit"	/> <br />
                </form>
                <button value="nice" ref={this.ref} onClick={this.handleButton}>Nice yaar</button>
            </React.Fragment>
    )
    } }

export default Component;