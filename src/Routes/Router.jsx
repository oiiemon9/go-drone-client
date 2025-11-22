import { createBrowserRouter } from 'react-router';
import MainRoot from '../Layouts/MainRoot';
import Home from '../Page/Home/Home';
import AboutUs from '../Page/AboutUs/AboutUs';
import Coverage from '../Page/Coverage/Coverage';
import AuthRoot from '../Layouts/AuthRoot';
import Login from '../Page/Login/Login';
import Register from '../Page/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Pricing from '../Page/Pricing/Pricing';
import DashboardLayout from '../Layouts/DashboardLayout';
import Dashboard from '../Page/Dashboard/Dashboard';
import MyParcel from '../Page/Dashboard/MyParcel/MyParcel';
import PaymentSuccess from '../Page/Dashboard/PaymentSuccess/PaymentSuccess';
import PaymentCancel from '../Page/Dashboard/PaymentCancel/PaymentCancel';

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
        path: 'pricing',
        loader: () => fetch('/src/assets/warehouses.json'),
        element: (
          <PrivateRoute>
            <Pricing></Pricing>
          </PrivateRoute>
        ),
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
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        {' '}
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        Component: Dashboard,
      },
      {
        path: '/dashboard/my-parcel',
        Component: MyParcel,
      },
      {
        path: '/dashboard/payment-success',
        Component: PaymentSuccess,
      },
      {
        path: '/dashboard/payment-cancel',
        Component: PaymentCancel,
      },
    ],
  },
]);
