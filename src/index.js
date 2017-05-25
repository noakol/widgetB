import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

const el = document.createElement('div');
document.body.appendChild(el);

render(<App />, el);
