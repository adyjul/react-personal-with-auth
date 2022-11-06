import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/style.css'
import AppContex from './AppContext';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(     
    <React.StrictMode >        
        <BrowserRouter>
            <AppContex/>
        </BrowserRouter>
    </React.StrictMode>
);