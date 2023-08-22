import React from "react";
import { routes } from "./routes";

const CheckoutPage = React.lazy(() => import("../pages/Checkout/Checkout"));
const PaymentSuccessfulPage = React.lazy(
  () => import("../pages/Payement-successful/PaymentSuccessful")
);

export const checkoutProcessRoutesConfig = [
  {
    path: routes.CHECKOUT.path,
    element: <CheckoutPage />,
  },
  {
    path: routes.PAYMENT_SUCCESSFUL.path,
    element: <PaymentSuccessfulPage />,
  },
];
