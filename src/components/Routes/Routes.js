import React from 'react';
import Home from '../Pages/Home/Home';
import Main from '../Others/Layout/Main';
import Signin from '../Pages/SignIn/Signin';
import Login from '../Pages/Login/Login';
import Services from '../Others/Services/Services';
import Blog from '../Pages/Blog/Blog';
import DetailsCard from '../Others/DetailsCard/DetailsCard';
import PrivateRoute from './PrivateRoute'
import MyReviews from '../Pages/MyReviews/MyReviews';
import AddServices from '../Pages/AddServices/AddServices';


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
          path: '/blog',
          element:<Blog></Blog>
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
        },
        {
          path: '/services/:id',
          element:<DetailsCard></DetailsCard>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/addservices',
          element: <AddServices></AddServices>
        },
        {
          path: '/myreviews',
          element: <MyReviews></MyReviews>
        }
      ]
    }
  ]);

  export default router;