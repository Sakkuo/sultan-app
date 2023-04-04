import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import './index.css'
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Basket from './components/Basket/Basket';


const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
