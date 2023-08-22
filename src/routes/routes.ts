import { Route } from "../shared/types";

export const routes: Route = {
  CHECKOUT: {
    name: "checkout-page",
    path: "/checkout",
    meta: "Checkout process",
    title: "Checkout",
  },
  PAYMENT_SUCCESSFUL: {
    name: "payment-successful",
    path: "/payment-successful",
    meta: "Votre paiement a été traité avec succès. Merci d'avoir effectué votre achat sur notre platforme.",
    title: "Payment successful",
  },
  ERROR404: {
    name: "not-found",
    path: "/404",
    meta: "La page que vous recherchez est introuvable. Veuillez vérifier l'URL et réessayer.",
    title: "Page not found",
  },
  ERROR500: {
    name: "internal-server",
    path: "/500",
    meta: "Une erreur interne s'est produite sur le serveur. Veuillez réessayer plus tard ou contacter l'administrateur du site pour obtenir de l'aide.",
    title: "500 Internal Server Error",
  },
};
