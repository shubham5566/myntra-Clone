import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './route/app/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Men from './componants/pages/men/Men.jsx'
import Women from './componants/pages/women/Women.jsx'
import Kids from './componants/pages/kids/Kids.jsx'
import Beauty from './componants/pages/beauty/Beauty.jsx'
import Studio from './componants/pages/studio/Studio.jsx'
import HomeAndLiving from './componants/pages/home and Living/HomeAndLiving.jsx'
import Bag from './route/bag/Bag.jsx'
import Home from './route/home/Home.jsx'

 const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/men",
        element:<Men/>
      },{
        path: "/women",
        element: <Women/>
      },
      {
        path: "/kids",
        element: <Kids/>
      },
      {
        path: "/beauty",
        element: <Beauty/>
      },
      {
        path: "/studio",
        element: <Studio/>
      },
      {
        path: "/home-and-living",
        element: <HomeAndLiving/>
      },
      {
        path: "/bag",
        element: <Bag/>
      },
     
      
    ]
  },
 
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

   
   
  </React.StrictMode>,
)
