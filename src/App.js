import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Body from './components/Body.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import RestaurantMenu from './components/RestaurantMenu.js';
import Error from './components/Error.js';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// chunking
// dynamic bundling
// code splitting
// lazy loading
// on demand loading
// dyna,ic import

const Grocery = lazy(() => import('./components/Grocery.js'));

const AppLayout = ()=> {
    return (
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>} ><Grocery/></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }

        ],
        errorElement: <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);