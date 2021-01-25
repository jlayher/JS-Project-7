import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

//Import Components
import App from './App';

import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

