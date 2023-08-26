import "./Paygreen.scss";
import usePayment from "../../../hooks/usePaygreen";
import { routes } from "../../../routes/routes";

import { useStateProvider } from "../../../hooks/useStateProvider";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AlertComponent from "../../widgets/AlertComponent";

import visaIcon from "../../../assets/icons/VISA.svg";
import mastercardIcon from "../../../assets/icons/MASTERCARD.svg";
import { FaCreditCard, FaQuestionCircle } from "react-icons/fa";

import Modal from "./Modal";
interface Props {
  title: string;
  style?: any;
}

const PaygreenComponent = (props: Props) => {
  const [paygreen] = usePayment();
  const { stopLoading, setMessage, startLoading, message } = useStateProvider();
  const [ready, setReady] = useState<number>(0);

  const [showModal, setShowModal] = useState(false);

  const handleCvvHelpClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
        detail: " Les informations de votre carte sont incorrectes ",
        status: "danger",
      });
      stopLoading();
    });

    paygreen.attachEventListener(paygreen.Events.ERROR, (event) => {
      console.error("Your custom error handling", event);
      setMessage({
        detail: " Il y a eu une erreur lors du paiement, veuillez réessayer ",
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
      displayMessage("Please fill in all fields.");
      console.log(" fill field ");
      return;
    }

    startLoading();
    paygreen.submitPayment();
  };

  const price = 12.99;
  const cvvHelp = "Comment trouver le code CVV ?";
  const cvvHelpText = `Le code CVV est un code de sécurité à 3 chiffres qui se trouve au dos de votre carte bancaire. Il est situé à droite de la zone de signature. Il s'agit des 3 derniers chiffres du numéro inscrit au dos de votre carte bancaire.`;

  return (
    <div className="w-full ">
      <div id="paygreen-container"></div>
      <div id="paygreen-methods-container"></div>
      <div className="flex justify-center mt-5 md:mt-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center">{props.title}</h1>
      </div>

      {message && (
        <AlertComponent variant={message.status} message={message.detail} />
      )}

      <div className="flex justify-center mt-5 sm:mt-4 ">
        <div className="pay-form">
          <div>
            <div id="paygreen-pan-frame">
              <FaCreditCard className="input-icon" />
            </div>
            <div className="label--info">
              <p>Numéro de carte *</p>
            </div>
          </div>

          <div className="line">
            <div>
              <div id="paygreen-exp-frame"></div>
              <div className="label--info">
                <p>Date d'expiration *</p>
              </div>
            </div>
            <div>
              <div id="paygreen-cvv-frame">
                <button
                  className="cvv-help-button input-icon"
                  onClick={handleCvvHelpClick}
                >
                  <FaQuestionCircle className="cvv-help-icon" />
                </button>
              </div>
              <div className="label--info">
                <p>Code CVV *</p>
              </div>

              <Modal
                isOpen={showModal}
                onClose={handleCloseModal}
                title={cvvHelp}
              >
                <p className=" mt-7  ">{cvvHelpText}</p>

                <div className="flex justify-center mt-7">
                  <button
                    className="modal-close cursor-pointer z-20 outline-none inline-block font-semibold leading-8 text-center bg-transparent bg-pikko-gradient-1 from-pikkoYellow-2 to-pikkoYellow-1 border border-transparent py-2 px-4 text-base rounded-md transition duration-200 ease-in-out hover:bg-pikko-gradient-2 hover:from-pikkoYellow-2 hover:to-pikkoYellow-1  hover:text-gray-900 w-full"
                    onClick={handleCloseModal}
                  >
                    Compris
                  </button>
                </div>
              </Modal>
            </div>
          </div>

          <div id="paygreen-reuse-checkbox-container" className=" "></div>

          <div className="text-center">
            <hr className="my-4 w-60 bg-gray-400 mx-auto" />
            <p className="my-4 text-pikkoGray-1"> Cartes acceptées </p>

            <div className="flex justify-center items-center">
              <img src={visaIcon} alt="visa" className="w-10 h-10 mr-2" />
              <img
                src={mastercardIcon}
                alt="mastercard"
                className="w-10 h-10 mr-2"
              />
            </div>
          </div>

          <div>
            <button
              id="payButton"
              onClick={handlePay}
              className="cursor-pointer outline-none inline-block font-semibold leading-8 text-center bg-transparent bg-pikko-gradient-1 from-pikkoYellow-2 to-pikkoYellow-1 border border-transparent py-2 px-4 text-base rounded-md transition duration-200 ease-in-out hover:bg-pikko-gradient-2 hover:from-pikkoYellow-2 hover:to-pikkoYellow-1  hover:text-gray-900 w-full"
            >
              Payer {price} €
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaygreenComponent;
