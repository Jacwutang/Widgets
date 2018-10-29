import React, {Component} from "react";

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date(),
    }

    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    this.intervalID = setInterval(this.tick, 1000);
  }

  tick(){
    this.setState({time: new Date()});
  }
  componentWillUnmount(){
    clearInterval(this.intervalID);
  }


  render(){
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    return(
      <div className='clock'>
        <h1> Clock stuff </h1>
        <span> {hours} </span>
        <span> {minutes} </span>
        <span> {seconds} </span>
      </div>
    )
  }
}

export default Clock;
