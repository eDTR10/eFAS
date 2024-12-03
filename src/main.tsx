import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { Suspense, lazy } from "react";

import NotFound from "./screens/notFound";
import Loader from './components/loader/loader.tsx';

const Page1= lazy(() =>
  wait(1300).then(() => import("./screens/page1.tsx"))
);

const Page2= lazy(() =>
  wait(1300).then(() => import("./screens/page2.tsx"))
);



const Login = lazy(() =>
  wait(1300).then(() => import("./screens/auth/Login.tsx"))
);
const ResetPassword= lazy(() =>
  wait(1300).then(() => import("./screens/auth/ResetPassword.tsx"))
);
const ForgotPassword = lazy(() =>
  wait(1300).then(() => import("./screens/auth/forgotPass.tsx"))
);
const router = createBrowserRouter([
  {

    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <>
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    </>,
  },
  {
    path: "/forgot-password",
    element: <>
      <Suspense fallback={<Loader />}>
        <ForgotPassword />
      </Suspense>
    </>,
  },
  {
    path: "/reset-password/:uid/:token",
    element:  <>
    <Suspense fallback={<Loader />}>
      <ResetPassword  />
    </Suspense>
  </>,
  },
  {
    path: "/admin/",
    element: <App />,
    
    children: [
      {
        path: "/admin/", 
        element: <Navigate to="/admin/page1" />, 
      },
      {
        path: "/admin/page1",
        element: <>
        <Suspense fallback={<Loader />}>
          <Page1 />
        </Suspense>
      </>,
      },
      {
        path: "/admin/page2",
        element: <>
        <Suspense fallback={<Loader />}>
          <Page2 />
        </Suspense>
      </>,
      },



      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function wait( time:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
