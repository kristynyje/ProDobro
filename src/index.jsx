import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './style.css';

createRoot(document.querySelector('#app')).render(<App />);
