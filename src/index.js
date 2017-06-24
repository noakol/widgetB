import React from 'react';
import { render } from 'react-dom';
import App from './App';
import _ from 'lodash';

const el = document.createElement('div');
document.body.appendChild(el);

render(<App />, el);
