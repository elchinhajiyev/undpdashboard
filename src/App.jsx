import { useState } from 'react'
import Home from './pages/home/Home'
import { createRoot } from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import { router } from './router';
import SDG from './pages/SDG/SDG';
import Leftbar from './components/Leftbar/Leftbar';



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
