import Gender from "../pages/Gender/Gender";
import SDG from "../pages/SDG/SDG";
import Sector from "../pages/Sector/Sector";
import Home from "../pages/home/Home";
import {createBrowserRouter} from "react-router-dom";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/> 
    },
    {
      path: "/sdg",
      element: <SDG/> 
    },
    {
      path: "/sector",
      element: <Sector/> 
    },
    {
      path: "/gender",
      element: <Gender/> 
    },
  ]);
