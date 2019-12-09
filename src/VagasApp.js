import React, {Component} from 'react'

import './config/firebase'
import Routes from  './routes'

import devToolsEnhancers from 'remote-redux-devtools'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const store = createStore(rootReducer, devToolsEnhancers(thunk))

const AppVagas = prop => (
    <Provider store={store}>
        <Routes />

    </Provider>
   
  );

  export default AppVagas