import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { WheatherApp } from './Components/WeatherApp';

const routes = createBrowserRouter([

    {
        path: "/",
        element: <WheatherApp />

    },
   
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <RouterProvider router={routes} />
    </>
);
