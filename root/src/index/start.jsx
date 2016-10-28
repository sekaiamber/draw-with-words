const React = require('react');
import {render} from 'react-dom';
import Index from './index'
import createStore from './../utils/store'

const store = createStore();

render(<Index store={store} />, document.getElementById("main"));
