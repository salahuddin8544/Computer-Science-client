import { createBrowserRouter } from "react-router-dom"
import CardDetails from "../../components/Card/CardDetails";
import Main from "../../Layout/Main";
import About from "../../pages/Home/About/About";
import Home from "../../pages/Home/Home/Home";
import Proflle from "../../pages/Home/Profile/Proflle";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services/:id',
                element:<CardDetails></CardDetails>,
                loader:({params})=> fetch(`https://computer-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/profile',
                element:<Proflle></Proflle>
            }
        ]
    }
])
export default router;