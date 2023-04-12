import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import {
  createBrowserRouter, 
  RouterProvider, 
  Navigate,
} from "react-router-dom"

import Inicio from './routes/Inicio'
import Skills from './routes/Skills'
import Projetos from './routes/Projetos'
import Contato from './routes/Contato'
import Testes from './routes/testes'
import Errorpage from './routes/errorpage'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/projetos",
        element: <Projetos />
      },
      {
        path: "/contato",
        element: <Contato />
      },
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
      {
        path: "/testes",
        element: <Testes />,
      },
    ]
  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
