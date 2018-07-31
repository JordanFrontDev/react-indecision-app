import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import 'normalize.css/normalize.css';
import registerServiceWorker from './registerServiceWorker';
import IndecisionApp from './App';


 

 
ReactDOM.render(<IndecisionApp/>, document.getElementById('root'));
registerServiceWorker();
