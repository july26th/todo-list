import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose  } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';
import { configureFakeBackend } from './helpers/fake-backend';
configureFakeBackend();

const store = createStore(myReducer,
    compose(
        applyMiddleware(reduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
    );

    
ReactDOM.render(
    <Provider store={store}>
        
        <App />
    
    </Provider>,
    
    document.getElementById('root'));

serviceWorker.unregister();
