import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind-output.css';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
