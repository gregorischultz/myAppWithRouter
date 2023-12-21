import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
      </nav>
      <main>
        <Home/>
      </main>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
      </nav>
      <main>
        <About/>
      </main>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
