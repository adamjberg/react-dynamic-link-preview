import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { App } from './App';

ReactDOM.hydrate(
    <BrowserRouter>
        <App initialData={(window as any).__INITIAL_DATA__} />
    </BrowserRouter>,
    document.getElementById('root')
);