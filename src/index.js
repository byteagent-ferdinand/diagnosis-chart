// index.js
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";


import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(<React.StrictMode><App /></React.StrictMode>);

reportWebVitals();