import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/app';


const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)

/* ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>
    
    , document.getElementById('root')); */
    
reportWebVitals();
