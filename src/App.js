import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Signup /> },
  { path: '/cart', element: <CartPage /> },
  {
    path: '/checkout',
    element: <Checkout></Checkout>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
