import React from 'react';
import './Main.css'
import SideNavComponent from './sideNav/SideNavComponent'
import TimerComponent from './timer/TimerComponent'

export default React.createClass({
  render(){
    return(
      <div className="Main">
        <SideNavComponent />
        <TimerComponent />
      </div>
    )
  }
})
