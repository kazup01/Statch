import React from 'react';
import Button from 'muicss/lib/react/button'
import './Timer.css';

export default React.createClass({
  getInitialState(){
    return{
      elapsed: 0,
      running: false
    }
  },
  handleStartClick(){
    clearInterval(this.interval);
    this.interval = setInterval(this.updateElapsed, 100);
    this.setState({running: true});
  },
  updateElapsed(){
    this.setState({elapsed: this.state.elapsed + 1 });
  },
  handleStopClick(){
    clearInterval(this.interval);
    this.setState({running: false});
  },
  handleResetClick(){
    this.setState({
      elapsed: 0
    });
  },
  getSeconds(elapsed){
    return elapsed / 10 + (elapsed % 10 > 0 ? '' : '.0');
  },
  render(){
    var _this = this;
    return(
      <div>
        <p>time: {this.getSeconds(this.state.elapsed)}</p>
        {(() => {
          if (this.state.elapsed > 0 && !this.state.running) {
            return (
              <div>
                <Button onClick={this.handleStartClick}>Restart</Button>
                <Button onClick={this.handleResetClick}>Reset</Button>
                <Button type="submit">Save</Button>
              </div>
            )
          } else if(this.state.running) {
            return <Button onClick={this.handleStopClick}>Pause</Button>;
          } else {
            return <Button onClick={this.handleStartClick}>Start</Button>;
          }
        })()}
      </div>
    );
  }
});
