import React from 'react';
import Home from '../Pages/Home/Home';
import Main from '../Others/Layout/Main';
import Signin from '../Pages/SignIn/Signin';

const { createBrowserRouter } = require("react-router-dom");

const router= createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/signup',
          element: <Signin></Signin>
        }
      ]
    }
  ]);

  export default router;