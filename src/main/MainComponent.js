import React from 'react';
import './Main.css'
import TimerComponent from './timer/TimerComponent'
import NoteDetailComponent from './note//noteDetail/NoteDetailComponent'

export default React.createClass({
  render(){
    return(
      <div className="Main">
        <TimerComponent />
        <NoteDetailComponent />
      </div>
    )
  }
})
