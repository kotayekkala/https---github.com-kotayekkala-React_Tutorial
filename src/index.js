import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { helloSaga } from './sagas/sagas.js'
import createSagaMiddleware from '@redux-saga/core'
const sagaMiddleware=createSagaMiddleware()


const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(helloSaga)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)