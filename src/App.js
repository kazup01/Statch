import React from 'react';
import './App.css'
import TopBarComponent from './topBar/TopBarComponent'
import MainComponent from './main/MainComponent'
import SideNavComponent from './main/sideNav/SideNavComponent'

export default React.createClass({
  render(){
    return(
      <div>
        <TopBarComponent />
        <SideNavComponent />
        <MainComponent />
      </div>
    )
  }
})
