import { useEffect, useState } from "react";
import "./Checkout.scss";
import PaygreenComponent from "../../components/Form/Paygreen/PaygreenComponent";

const customStyle = {
  input: {
    base: {
      color: "black",
      fontSize: "12px",
    },
    hover: {
      color: "rgb(93, 93, 93)",
    },
    focus: {
      color: "rgb(52, 52, 52)",
    },
    invalid: {
      color: "red",
    },
    placeholder: {
      base: {
        color: "rgb(93, 93, 93)",
      },
    },
  },
  checkbox: {
    label: {
      base: {
        color: "black",
      },
      unchecked: {
        color: "black",
      },
    },
    box: {
      base: {
        color: "#424242",
        hover: {
          color: "#424242",
        },
      },
      unchecked: {
        color: "#f2e526",
      },
    },
  },
};

function CheckoutPage() {
  return (
    <div className="container">
      <PaygreenComponent title="Formulaire de paiement" style={customStyle} />
    </div>
  );
}

export default CheckoutPage;
