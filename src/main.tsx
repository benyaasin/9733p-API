import React from 'react'
import ReactDOM from 'react-dom/client'
import { route } from './routes.tsx'
import { RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={route} />
  </>
);