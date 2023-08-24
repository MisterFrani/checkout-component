import "./Paygreen.scss";
import usePayment from "../../../hooks/usePaygreen";
import { routes } from "../../../routes/routes";

import { useStateProvider } from "../../../hooks/useStateProvider";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AlertComponent from "../../widgets/AlertComponent";

interface Props {
  title: string;
  style?: any;
}

const PaygreenComponent = (props: Props) => {
  const [paygreen] = usePayment();
  const { stopLoading, setMessage, startLoading, message } = useStateProvider();
  const [ready, setReady] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (paygreen) {
      initPGJS();
    }
  }, [paygreen]);

  const incrementReady = () => {
    setReady((prev) => prev + 1);
  };

  const initPGJS = () => {
    paygreen.attachEventListener(paygreen.Events.PAN_FIELD_FULFILLED, () => {
      incrementReady();
      paygreen.focus("exp");
    });

    paygreen.attachEventListener(paygreen.Events.EXP_FIELD_FULFILLED, () => {
      incrementReady();
      paygreen.focus("cvv");
    });

    paygreen.attachEventListener(paygreen.Events.CVV_FIELD_FULFILLED, () => {
      incrementReady();
    });

    paygreen.attachEventListener(
      paygreen.Events.FULL_PAYMENT_DONE,
      (event: any) => {
        console.log("Payment success", event);
        setMessage({
          detail: "",
          status: "success",
        });
        stopLoading();
        navigate(routes.PAYMENT_SUCCESSFUL.path);
      }
    );

    paygreen.attachEventListener(paygreen.Events.TOKEN_FAIL, (event) => {
      console.error("Fail to tokenize card: ", event);
      setMessage({
        detail: " Fail to tokenize card",
        status: "danger",
      });
      stopLoading();
    });

    paygreen.attachEventListener(paygreen.Events.ERROR, (event) => {
      console.error("Your custom error handling", event);
      setMessage({
        detail: "Your custom error handling",
        status: "danger",
      });
      stopLoading();
    });

    paygreen.init({
      publicKey: import.meta.env.VITE_PAYGREEN_PUBLIC_KEY,
      mode: import.meta.env.VITE_PAYGREEN_MODE,
      paymentMethod: import.meta.env.VITE_PAYGREEN_METHOD,
      modeOptions: {
        shopId: import.meta.env.VITE_PAYGREEN_SHOPID,
      },
      style: props.style,
    });
  };

  const handlePay = () => {
    if (!paygreen) {
      return;
    }

    if (ready !== 3) {
      console.log(" fill field ");
      return;
    }

    startLoading();
    paygreen.submitPayment();
  };

  return (
    <div>
      <div id="paygreen-container"></div>
      <div id="paygreen-methods-container"></div>
      <div className="flex justify-center mt-20">
        <h1>{props.title}</h1>
      </div>

      {message && (
        <AlertComponent variant={message.status} message={message.detail} />
      )}

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

export default PaygreenComponent;
