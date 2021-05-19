import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Fragment } from 'react';

ReactDOM.render(
<Fragment>
  <BrowserRouter>
  <App />
  </BrowserRouter>
</Fragment>,
document.getElementById('root'));
