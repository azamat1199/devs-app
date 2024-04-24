// routes
import { lazy } from "react";
import { RouteObject, Navigate, useRoutes } from "react-router-dom";

const Analytics = lazy((): any => import("../app/analytics/Analytics"));
const Users = lazy((): any => import("../app/users/Users"));
const MainLayout = lazy((): any => import("../components/layout/MainLayout"));
const Timelapse = lazy((): any => import("../app/timelapse/Timelapse"));
const Monetization = lazy(
  (): any => import("../app/monetization/Monetization")
);
const Person = lazy((): any => import("../app/person/Person"));

export enum Routes {
  EMPTY = "",
  PERSON = "person",
  USERS = "users",
  ANALYTICS = "analytics",
  TIMELAPSE = "timelapse",
  MONETIZATION = "monetization",
}

export const PrivateRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="/person" replace />,
  },
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/person",
        element: <Person />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/timelapse",
        element: <Timelapse />,
      },
      {
        path: "/monetization",
        element: <Monetization />,
      },
    ],
  },
];

export const GlobalRoutes = () => {
  const routes = PrivateRoutes;
  const element = useRoutes(routes);
  return element;
};
