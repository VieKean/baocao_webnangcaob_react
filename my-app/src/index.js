import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/reset.css'; // Sử dụng bản reset của Ant Design
import { Provider } from 'react-redux';
import store from './redux/store';
import {router} from './Route';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


reportWebVitals();
