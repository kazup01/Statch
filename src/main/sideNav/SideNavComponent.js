import React from 'react';
import './SideNav.css';
import NoteListComponent from '../note/noteList/NoteListComponent'

export default React.createClass({
  render(){
    return(
      <div className="SideNav">
        <NoteListComponent />
      </div>
    )
  }
})
