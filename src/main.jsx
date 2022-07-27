import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp';
// import FristApp from './FristApp';
// import {HelloWorldApp} from './HelloWorldApp';

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={0} />
    </React.StrictMode>
);





