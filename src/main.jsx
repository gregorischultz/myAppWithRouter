import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Article from './Pages/Article';
import Home from "./Pages/Home";
import About from "./Pages/About";

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path:"/articles/:id",
        element: <Article/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
