import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from './Components/Root.jsx';
import { AboutUs } from './Components/AboutUs.jsx';
import { ContextProvider } from './Route.jsx/ContextProvider.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { AddItem } from './Components/AddItem.jsx';
import { Login } from './Components/Login.jsx';
import { Toaster } from 'react-hot-toast';
import { Register } from './Components/Register.jsx';
import { PrivateRoute } from './Route.jsx/PraivateRoute.jsx';
import { AllItems } from './Components/AllItems.jsx';
import { AllItemsTable } from './Components/AllItemsTable.jsx';
import { ItemDetails } from './ItemDetails.jsx';
import { MyItem } from './MyItem.jsx';
import { Home } from './Home.jsx';
import { UpdateItem } from './UpdateItem.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
      path: "/",
      element: <Home></Home>
    },

    {
      path: '/addItems',
      element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
    },
    {
      path: '/allItemsTable',
      element: <AllItemsTable></AllItemsTable>,
      // loader: () => fetch('http://https://server-site-gamma-indol.vercel.app//items')
    },
    // {
    //   path: '/allItems',
    //   element: <AllItems></AllItems>,
    //   loader: () => fetch('http://https://server-site-gamma-indol.vercel.app//items')
    // },

    {
      path: '/items/:id',
      element: <PrivateRoute><ItemDetails></ItemDetails></PrivateRoute>,
      loader: ({ params }) => fetch(`http://https://server-site-gamma-indol.vercel.app//items/${params.id}`)
    },
    
    {
      path: '/update/:id',
      element: <PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>,
      loader: () => fetch('http://https://server-site-gamma-indol.vercel.app//items')
    },

    {
      path: '/myItems',
      element: <PrivateRoute><MyItem></MyItem></PrivateRoute>,
      loader: () => fetch('http://https://server-site-gamma-indol.vercel.app//items')
    },

    {
      path: '/login',
      element: <Login></Login>,
    },
    {
      path: '/register',
      element: <Register></Register>,
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster />
      </HelmetProvider>
    </ContextProvider>
  </React.StrictMode>,
)
