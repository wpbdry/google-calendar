import React from 'react';
// import Button from '@material-ui/core/Button';

export default function SideBarCalendar(props){
  return (
      <button variant="contained" color="primary" onClick={props.handleClick}>
        {props.name}
      </button>
    
  );
}
