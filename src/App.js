import React from 'react';
import './App.css'
import TopBarComponent from './topBar/TopBarComponent'
import MainComponent from './main/MainComponent'

export default React.createClass({
  render(){
    return(
      <div className="App">
        <TopBarComponent />
        <MainComponent />
      </div>
    )
  }
})
