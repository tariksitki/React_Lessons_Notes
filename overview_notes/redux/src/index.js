import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {combinedStores } from "./redux/index"

const store = combinedStores();
// Provider in store adinda bir property si vardir. combinedStores de bir func dir. bu func in calistirilmis halini store a atiyoruz. direkt func i vermiyoruz provider icinde. önce disarida calistiriyoruz. gelen object leri veriyoruz.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// return etmek istedigimiz tüm component lari provider ile sarmaliyoruz
