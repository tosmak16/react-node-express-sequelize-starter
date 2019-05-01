import ReactDOM from 'react-dom';
import 'normalize.css';

import './globals';
import './stylesheets/base.scss';

import Router from './router/router';

const ELEMENT_ID = 'REACT_APP';
const container = document.createElement('div');

container.id = ELEMENT_ID;
document.body.insertAdjacentElement('beforebegin', container);

ReactDOM.render(Router, container);
