import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Signup /> },
  { path: '/cart', element: <CartPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
