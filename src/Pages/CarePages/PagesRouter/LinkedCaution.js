import { createBrowserRouter } from "react-router-dom";
import Main from "../PageLayout/Main";
import Home from "../../FixedPages/Home/Home";




export const router =createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])