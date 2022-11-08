import React from 'react';
import Home from '../Pages/Home/Home';
import Main from '../Others/Layout/Main';
import Signin from '../Pages/SignIn/Signin';
import Login from '../Pages/Login/Login';
import Services from '../Others/Services/Services';

const { createBrowserRouter } = require("react-router-dom");

const router= createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>,
          loader: ()=> fetch('http://localhost:5000/services')
        },
        {
          path: '/signup',
          element: <Signin></Signin>
        },
        { 
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/services',
          element: <Services></Services>
        }
      ]
    }
  ]);

  export default router;