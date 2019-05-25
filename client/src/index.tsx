import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import middleware from './middleware';
import App from './components/App';

const store = createStore(reducers, composeWithDevTools(middleware));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));