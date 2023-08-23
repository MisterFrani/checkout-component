import { useEffect, useState } from "react";
import "./Checkout.scss";
import { importScript } from "../../hook/custom";

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
  const [paygreen, setpaygreen] = useState<any>();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sb-pgjs.paygreen.fr/latest/paygreen.min.js";
    script.async = true;
    script.onload = () => {
      const paygreenInstance = window.paygreenjs;
      paygreenInstance && setpaygreen(paygreenInstance);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (paygreen) {
      initPGJS();
    }
  }, [paygreen]);

  const handlePay = () => {
    if (!paygreen) {
      return;
    }

    paygreen.submitPayment();
  };

  const initPGJS = () => {
    paygreen.attachEventListener(paygreen.Events.PAN_FIELD_FULFILLED, () => {
      console.log("pan fullfilled");
      paygreen.focus("cvv");
    });

    paygreen.attachEventListener(paygreen.Events.CVV_FIELD_FULFILLED, () => {
      paygreen.focus("exp");
    });

    paygreen.attachEventListener(
      paygreen.Events.FULL_PAYMENT_DONE,
      (event: any) => console.log("Payment success", event)
    );

    paygreen.attachEventListener(paygreen.Events.TOKEN_FAIL, (event) => {
      console.error("Fail to tokenize card: ", event);
    });

    paygreen.attachEventListener(paygreen.Events.ERROR, (event) => {
      console.error("Your custom error handling", event);
    });

    paygreen.init({
      publicKey: "pk_6d92047e838d4870b74857ba47e2eebd",
      mode: "instrument",
      paymentMethod: "conecs",
      modeOptions: {
        shopId: "sh_69b974d635c34df18c807baed0794836",
      },
      style: customStyle,
    });
  };

  const PaygreenForm = () => {
    return (
      <div>
        <div id="paygreen-container"></div>
        <div id="paygreen-methods-container"></div>
        <div className="flex justify-center mt-20">
          <h1>Entrer les informations de la carte</h1>
        </div>
        <div className="flex justify-center mt-20">
          <div className="pay-form">
            <div>
              {/* <label>Card number</label> */}
              <div id="paygreen-pan-frame"></div>
              <div className="label--info">
                <p>La carte doit être à votre nom *</p>
              </div>
            </div>

            <div className="line">
              <div>
                {/* <label>Expiration</label> */}
                <div id="paygreen-exp-frame"></div>
                <div className="label--info">
                  <p>Date d'expiration *</p>
                </div>
              </div>
              <div>
                {/* <label>CVV </label> */}
                <div id="paygreen-cvv-frame"></div>
                <div className="label--info">
                  <p>Code CVV *</p>
                </div>
              </div>
            </div>

            <div
              id="paygreen-reuse-checkbox-container"
              className="div-info"
            ></div>
            <button id="payButton" className="button" onClick={handlePay}>
              Payer 12,99 €
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      {!paygreen ? <div>...loading</div> : <PaygreenForm />}
    </div>
  );
}

export default CheckoutPage;
