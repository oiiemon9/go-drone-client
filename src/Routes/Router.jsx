import { createBrowserRouter } from 'react-router';
import MainRoot from '../Layouts/MainRoot';
import Home from '../Page/Home/Home';
import AboutUs from '../Page/AboutUs/AboutUs';

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
        path: 'about-us',
        Component: AboutUs,
      },
    ],
  },
]);
