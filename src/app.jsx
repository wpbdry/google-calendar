import React, { useState } from 'react';

import SideBar from './components/SideBar';
import WebViews from './components/WebViews';

export default () => {
  console.log('app renader')
  // temporarily hard coded
  const calendars = [
    'Personal',
    'CODE',
    'Phiture',
  ];

  const [activeCalendar, setActiveCalendar] = useState(0);

  return (
    <div>
      <SideBar {...{ calendars, setActiveCalendar }} />
      <WebViews {...{ calendars, activeCalendar }} />
    </div>
  );
};
