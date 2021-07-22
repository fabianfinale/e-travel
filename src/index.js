import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import 'bootstrap/dist/js/bootstrap.bundle';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import './css/styles.css';

const store = configureStore();
console.log(`store`, store.getState());

library.add(
  faBriefcase,
  faPhone,
  faEnvelope,
  faFacebook,
  faInstagram,
  faTwitter
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
