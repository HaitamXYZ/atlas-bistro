import React from 'react';

const shapes = {
  arrow: <><path d="M4 12h16M13 5l7 7-7 7" /></>,
  arrowLeft: <><path d="M20 12H4m7-7-7 7 7 7" /></>,
  arrowUp: <><path d="M12 20V4m-7 7 7-7 7 7" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="M5 5l14 14M19 5 5 19" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="2.5" /></>,
  check: <><path d="m4 12 5 5L20 6" /></>,
  zoom: <><circle cx="10" cy="10" r="6" /><path d="m15 15 6 6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z" /></>,
  leaf: <><path d="M5 21c9-2 14-8 14-18-8 1-14 6-14 14v4z" /><path d="M5 17c4-1 7-4 10-8" /></>,
  chef: <><path d="M6 12h12l-1 9H7l-1-9z" /><path d="M7 12a4 4 0 1 1 4-6 4 4 0 0 1 6 3 3 3 0 0 1 1 3" /><path d="M9 16h6" /></>,
  heart: <><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6z" /></>,
};

export default function Icon({ name, size = 20, className = '', ...rest }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...rest}>{shapes[name]}</svg>;
}
