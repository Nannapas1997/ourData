import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Job from './routes/Job.jsx';
import About from './routes/About.jsx';
import Root from './routes/root.jsx';
import Portfolio from './routes/Portfolio.jsx';
import Skill from './routes/skill.jsx';
const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/job",
    element: <Job/>
  },
  {
    path: "/portfolio",
    element: <Portfolio/>
  },
  {
    path: "/skill",
    element: <Skill/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
