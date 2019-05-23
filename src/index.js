import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './stroe'

// import { countAddAction } from './actions/counter_action'
// import { loadPostAction } from './actions/post_action'

// store.dispatch(countAddAction)
// store.dispatch(loadPostAction)

// 通过Provider把 react, redux 连接起来， store传递数据
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
