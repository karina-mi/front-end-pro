import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import "./index.css";

import App from "./components/App/App";

import "bootstrap-icons/font/bootstrap-icons.css";

import store from './store/slices'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

