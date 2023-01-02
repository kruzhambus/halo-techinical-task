import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import App from './App';
import {store} from './state/store'
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const app: JSX.Element = (
    <Provider store={store}>
        <App/>
    </Provider>
)

root.render(
    app
);