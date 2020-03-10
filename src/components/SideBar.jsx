import React from 'react';
import SideBarCalendar from './SideBarCalendar';

export default function SideBar(props) {
  const handleClick = (index) => {
    props.setActiveCalendar(index);
  };
  return (
    <div style={{
      width: '100vw',
      height: '68px',
    }}
    >
      {props.calendars.map((c, i) => (
        <SideBarCalendar
          name={c}
          key={`side-bar-calendar-${c}`}
          handleClick={handleClick.bind(this, i)}
        />
      ))}
    </div>
  );
};
