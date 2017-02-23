import React from 'react';
import './Main.css'
import SideNavComponent from './sideNav/SideNavComponent'
import TimerComponent from './timer/TimerComponent'
import NoteDetailComponent from './note//noteDetail/NoteDetailComponent'

export default React.createClass({
  render(){
    return(
      <div className="Main">
        <SideNavComponent />
        <TimerComponent />
        <NoteDetailComponent />
      </div>
    )
  }
})
