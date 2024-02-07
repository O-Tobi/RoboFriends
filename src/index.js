import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/app';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>
    
    , document.getElementById('root'));
reportWebVitals();
