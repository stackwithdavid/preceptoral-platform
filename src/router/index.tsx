import { createBrowserRouter, RouterProvider } from "react-router";

import ErrorPage from "@/pages/404";
import AuthLayout from "@/pages/auth/layout";
import LoginPage from "@/pages/auth/login";
import Buildpage from "@/pages/build";
import Completereg from "@/pages/completereg";
import Coursepage from "@/pages/course";
import BaseLayout from "@/pages/layout";
import LearnPage from "@/pages/learn";
import PaymentPage from "@/pages/payment";
import RegistrationPage from "@/pages/registration";
import TrainingPage from "@/pages/training";
import WelcomePage from "@/pages/welcome";

const authRoutes = [{ path: "/login", element: <LoginPage /> }];
const layoutRoutes = [
  // { path: "/", element: <HomePage /> },
  { path: "/", element: <WelcomePage /> },
  { path: "/users", element: <p className="text-primary">users page</p> },
  { path: "/registration", element: <RegistrationPage /> },
  { path: "/learn", element: <LearnPage /> },
  { path: "/training", element: <TrainingPage /> },
  { path: "/course", element: <Coursepage /> },
  { path: "/payment", element: <PaymentPage /> },
  { path: "/completereg", element: <Completereg /> },
  { path: "/build", element: <Buildpage /> },
];

const routes = [
  { path: "*", element: <ErrorPage /> },
  { path: "/", element: <BaseLayout />, children: layoutRoutes },
  { path: "/", element: <AuthLayout />, children: authRoutes },
];

const router = createBrowserRouter(routes);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
