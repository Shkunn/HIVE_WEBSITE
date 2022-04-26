import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA4 from "react-ga4";


const traking_ga4_id_rv = process.env.REACT_APP_MESUREMENT_ID;

ReactGA4.initialize(
  traking_ga4_id_rv
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

