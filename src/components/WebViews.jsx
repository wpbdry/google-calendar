import React from 'react';

export default function WebViews(props) {
  return props.calendars.map((c, i) => (
    <webview
      key={`webview-${c}`}
      src="https://calendar.google.com/calendar/r"
      autosize="on"
              // preload="./webview/recipe.js"
      useragent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Franz/5.3.3 Chrome/69.0.3497.128 Electron/4.2.4 Safari/537.36"
      partition={`persist:${c}`}
      allowpopups="on"
      style={{
        display: props.activeCalendar === i ? 'flex' : 'none',
        width: '100%',
        height: 'calc(100vh - 68px)', // 68 is the width of the sidebar and should be a variable
      }}
      className={props.activeCalendar === i ? 'active-webview' : ''}
    />
  ));
}
