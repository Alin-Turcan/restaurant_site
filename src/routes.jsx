import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Food from "./pages/Food";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

export const routes = createBrowserRouter([
    {
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/restaurant/:slug",
            element: <Details />
        },
        {
            path: "/food-delivery",
            element: <Food />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contacts",
            element: <Contacts />
        }
    ]
    }
])