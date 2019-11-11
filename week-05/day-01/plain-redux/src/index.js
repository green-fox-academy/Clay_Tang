import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import Reducer from './Reducer';

const store = createStore(Reducer);

const subscribe = store.subscribe(() => {
    console.log(store.getState())
});

subscribe();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
