import React from 'react';
import '../css/bootstrap.css';
import '../css/main.css';

class CountDown extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           minutes: this.props.minutes,
           date: new Date("November 7, 2019 00:"+this.props.minutes+":00"),
           timeUpMsg: ""
       };
       this.startTimer = this.startTimer.bind(this);
       this.changeTime = this.changeTime.bind(this);
       this.startTimer();
   }

    render(){
       return (
           <div>
               <p id='time' className='text-center'>{this.state.date.getMinutes()+":"+this.state.date.getSeconds()}</p>
               <p className='text-center'>{this.state.timeUpMsg}</p>
           </div>
       )
   }

    startTimer() {
        this.myInterval = setInterval(()=> {
           this.changeTime();
        }, 1000)
    }

    changeTime() {
        this.setState((()=>{
            let seconds = this.state.date.getSeconds();
            if (seconds === 0) {
                let newDate = new Date("November 7, 2019 00:" + (this.state.date.getMinutes()-1) + ":59");
                this.setState({date: newDate});
            }
            else {
                let newDate = new Date("November 7, 2019 00:" + this.state.date.getMinutes() + ":" + (this.state.date.getSeconds()-1));
                this.setState({date: newDate});
                if(!(this.state.date.getSeconds()-1) && !this.state.date.getMinutes()){
                    clearInterval(this.myInterval);
                    this.setState({timeUpMsg: "Time is up!"});
                }
            }
        }))
    }
}


class Timer extends React.Component{
    constructor(props){
        super(props);
        this.child = React.createRef();
        this.state = {minutes: 0, isButtonClicked: false, isMinInputWrong: false};
        this.updateMinutes = this.updateMinutes.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }

    updateMinutes(e){
        let minutes = e.target.value;
        if(minutes < 60 && minutes > 0){
            this.setState({isMinInputWrong: false});
            this.setState({minutes: e.target.value});
        }
        else
            this.setState({isMinInputWrong: true});
    }

    startTimer() {
        this.setState({isButtonClicked: true});
    }

    render(){
        return (
            <div className="container">
                <br />
                <div className='shadow-box text-center' style={{backgroundColor: '#191919'}}>
                    <h1 className='text-center'>Timer Application</h1>
                </div>
                <br />
                <div className="main-section">
                    <div className="main-section-container">
                        {
                            !this.state.isButtonClicked ?
                            <>
                                <label>Input Minutes</label>
                                <br />
                                <input id='minute-input' className='form-control' placeholder="0" onChange={this.updateMinutes}/>
                                {
                                    this.state.isMinInputWrong ?
                                        <p className='warning'>It must be a number between 0-60</p>
                                        :
                                        null
                                }
                                <br />
                                <p className="text-center">
                                <button
                                    type="submit" id='.btn-outline-light'
                                    className="btn btn-primary btn-lg btn-lg btn-block"
                                    onClick={this.startTimer}
                                    >
                                    Start Timer
                                </button>
                                </p>
                            </>
                            :
                            null
                        }
                        {this.state.isButtonClicked ?
                            <div id='time-box' className="shadow-box">
                                <CountDown minutes={this.state.minutes} />
                            </div>:
                            null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;
