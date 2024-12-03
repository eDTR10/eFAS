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

const Menu= lazy(() =>
  wait(1300).then(() => import("./screens/menu/MenuContainer.tsx"))
);

const Settings= lazy(() =>
  wait(1300).then(() => import("./screens/settings/SettingsContainer.tsx"))
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
        path: "/admin/menu",
        element: <>
        <Suspense fallback={<Loader />}>
        <Menu />
        </Suspense>
      </>,
      },
      {
        path: "/admin/settings",
        element: <>
        <Suspense fallback={<Loader />}>
        <Settings />
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
