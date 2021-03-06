import React from 'react';
import Button from 'muicss/lib/react/button'
import Input from 'muicss/lib/react/input'
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
  render: function(){
    var _this = this;
    $(document).ready(function(){
      $('#timer-submit').click(function(){
        var timeload = {timer: $('#timer').val()};
        $.ajax({
          url: "/timer",
          type: "POST",
          contentType: "application/json",
          processData: false,
          data: JSON.stringify(timeload),
          complete: function(data){
            $('#outputTime').html(data.responseText);
          }
        });
      });
    });
    return(
      <div>
        <p>time: {this.getSeconds(this.state.elapsed)}</p>
        {(() => {
          if (this.state.elapsed > 0 && !this.state.running) {
            return (
              <div>
                <Button onClick={this.handleStartClick}>Restart</Button>
                <Button onClick={this.handleResetClick}>Reset</Button>
                <p id="timer">{this.getSeconds(this.state.elapsed)}</p>
                <Button id="timer-submit" type="submit">Save</Button>
                <p id="outputTime"></p>
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
