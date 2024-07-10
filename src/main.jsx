import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import About from './Page/About/About.jsx';
import Blog from './Page/Blog/Blog.jsx';
import Contact from './Page/Contact/Contact.jsx';
import Home from './Page/Home/Home.jsx';
import Portfolio from './Page/Portfolio/Portfolio.jsx';
import Root from './Root/Root.jsx';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:"/contact",
        element:<Contact  />
      },
      {
        path:"/about",
        element:<About  />
      },
      {
        path:"/portfolio",
        element:<Portfolio  />
      },
      {
        path:"/blog",
        element:<Blog  />
      },
    ]
  } 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
