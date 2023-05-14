import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from './services/reducers/index'
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer)

console.log('store', store)
root.render(
  <Provider store={store}>
    <App />
  </ Provider>
);

