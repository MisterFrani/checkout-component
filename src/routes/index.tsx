import { checkoutProcessRoutesConfig } from "./CheckoutProcessRoutes";
import { errorPagesConfig } from "./ErrorPagesRoutes";
import { Navigate } from "react-router-dom";
import { routes } from "./routes";

const structureRoutes = {
  routes: [
    ...checkoutProcessRoutesConfig,
    ...errorPagesConfig,
    {
      path: "/",
      element: <Navigate to={routes.CHECKOUT.path} />,
    },
    {
      path: "*",
      element: <Navigate to={routes.ERROR404.path} />,
    },
  ],
};

export { structureRoutes };
