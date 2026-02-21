import { createBrowserRouter, RouterProvider } from "react-router";

import HomePage from "@/pages";
import ErrorPage from "@/pages/404";
import AuthLayout from "@/pages/auth/layout";
import LoginPage from "@/pages/auth/login";
import BaseLayout from "@/pages/layout";
import RegistrationPage from "@/pages/registration";
import LearnPage from "@/pages/learn";
import WelcomePage from "@/pages/welcome";
import TrainingPage from "@/pages/training";

const authRoutes = [{ path: "/login", element: <LoginPage /> }];
const layoutRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <p className="text-primary">users page</p> },
  { path: "/registration", element: <RegistrationPage /> },
  { path: "/welcome", element: <WelcomePage /> },
  { path: "/learn", element: <LearnPage /> },
  { path: "/training", element: <TrainingPage /> },
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
