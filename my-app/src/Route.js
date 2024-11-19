// /Route.js
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/",
        element: <HomePage />
      },
    ]
  },
  {
    path: "*",
    element: <div>Không tìm thấy web theo yêu cầu</div>
  }
]);
