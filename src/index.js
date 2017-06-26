import React from 'react';
import { render } from 'react-dom';
import App from './App';
import _ from 'lodash';
import printStatic from 'widgetC';

printStatic();

const el = document.createElement('div');
document.body.appendChild(el);

render(<App />, el);
