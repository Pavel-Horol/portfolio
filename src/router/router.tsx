import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../pages/Layout.tsx";
import Home from "../pages/Home.tsx";
import Contacts from "../pages/Contacts.tsx";
import About from "../pages/About.tsx";
import Projects from "../pages/Projects.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'contacts',
                element: <Contacts/>
            },
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: 'projects',
                element: <Projects/>
            }
        ]
    }
])