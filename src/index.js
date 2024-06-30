import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Weathersss from './Components/Weathersss';
import { Weather } from './Components/Weather';

import { WheatherApp } from './Components/WeatherApp';




const routes = createBrowserRouter([

     {
          path: "/",
          element: <WheatherApp />

     },
    {
        path: "/",
      element: <Weather/>

     }
    // {
    //     path: "/",
    //  element: <Weathersss/>

    // }
   

   

])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <RouterProvider router={routes} />
    </>
);
