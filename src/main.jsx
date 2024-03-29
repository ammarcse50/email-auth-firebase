import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login/Login.jsx';
import Register from './RegisterForm/Register.jsx';
import Root from './Root/Root.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
          
      {
        path: "/",

        element: <Login></Login>
      },
      {


        path : "/login",
        element : <Login></Login>
      }
      ,

      {
        path : "/register",
        element: <Register></Register>
      }



    ]




    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
