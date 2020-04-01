import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

const doWarn = window.console.warn
window.console.warn = (...args) => {
    if(typeof args[0] !== 'string' || !args[0].startsWith('Warning: componentWillReceiveProps has been renamed'))
        doWarn(...args)
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
