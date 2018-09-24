import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');


if(module.hot){
    module.hot.accept('./App', () => {
        const NextApp = require('./app/layout/App').default;
        ReactDOM.render(<NextApp />,document.getElementById('root'));})
}



registerServiceWorker();

