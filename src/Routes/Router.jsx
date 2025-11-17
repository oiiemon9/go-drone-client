import { createBrowserRouter } from 'react-router';
import MainRoot from '../Layouts/MainRoot';
import Home from '../Page/Home/Home';
import AboutUs from '../Page/AboutUs/AboutUs';
import Coverage from '../Page/Coverage/Coverage';
import AuthRoot from '../Layouts/AuthRoot';
import Login from '../Page/Login/Login';
import Register from '../Page/Register/Register';

export const Router = createBrowserRouter([
  {
    path: '/',
    Component: MainRoot,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'coverage',
        Component: Coverage,
      },
      {
        path: 'about-us',
        Component: AboutUs,
      },
    ],
  },
  {
    path: '/',
    Component: AuthRoot,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
]);
