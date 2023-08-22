import React from "react";
import { routes } from "./routes";

const ErrorPages404 = React.lazy(() => import("../pages/Eroor/404"));
const ErrorPages500 = React.lazy(() => import("../pages/Eroor/500"));

export const errorPagesConfig = [
  {
    path: routes.ERROR404.path,
    element: <ErrorPages404 />,
  },
  {
    path: routes.ERROR500.path,
    element: <ErrorPages500 />,
  },
];
