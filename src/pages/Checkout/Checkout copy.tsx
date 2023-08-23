import { useEffect, useState } from "react";
import "./Checkout.scss";
import { SlCreditCard, SlQuestion } from "react-icons/sl";
import { importScript } from "../../hook/custom";

function CheckoutPage() {
  const defaultCardData: {
    cardNumber: string | null;
    cardName: string | null;
    cardExpirationDate: string | null;
    cardCvv: string | number | null;
  } = {
    cardNumber: null,
    cardName: null,
    cardExpirationDate: null,
    cardCvv: null,
  };

  const [cardData, setCardData] = useState(defaultCardData);

  useEffect(() => {
    importScript("https://pgjs.paygreen.fr/latest/paygreen.min.js");
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const validatePayment = (e: any) => {
    e.preventDefault();
    console.log(cardData);
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={validatePayment} className="w-full max-w-lg mt-20">
        <div>
          <div className="relative">
            <input
              id="1"
              name="cardName"
              onChange={handleInputChange}
              className="
                  block 
                  px-6
                  pt-6
                  pb-1
                  w-full
                  text-md
                  text-black
                  bg-custom-bg
                  apparence-none
                  focus:outline-none
                  focus:ring-0
                  peer
                  border-t-0  border-solid rounded-t-lg
                  border-b-2 border-gray-400"
              placeholder=""
            />
            <label
              className="
                  absolute 
                  text-md
                text-zinc-500
                  duration-150
                  transform
                  -translate-y-3
                  scale-75
                  top-4
                  z-10
                  origin-[0]
                  left-6
                  peer-placeholder-shown:scale-100
                  peer-placeholder-shown:translate-y-0
                  peer-focus:scale-75
                  peer-focus:-translate-y-3"
            >
              Nom *
            </label>
          </div>
          <div
            className="
            pt-2  "
          >
            <p
              className="
                text-xs
                text-zinc-500
                ml-6  "
            >
              La carte doit être à votre nom
            </p>
          </div>
        </div>

        <div className="mt-6 ">
          <div className="relative">
            <input
              id="2"
              name="cardNumber"
              onChange={handleInputChange}
              className="
                  block 
                  px-6
                  pt-6
                  pb-1
                  w-full
                  text-md
                  text-black
                  bg-custom-bg
                  apparence-none
                  focus:outline-none
                  focus:ring-0
                  peer
                  border-t-0  border-solid rounded-t-lg
                  border-b-2 border-gray-400"
              placeholder=""
            />
            <label
              className="
                  absolute 
                  text-md
                text-zinc-500
                  duration-150
                  transform
                  -translate-y-3
                  scale-75
                  top-4
                  z-10
                  origin-[0]
                  left-6
                  peer-placeholder-shown:scale-100
                  peer-placeholder-shown:translate-y-0
                  peer-focus:scale-75
                  peer-focus:-translate-y-3"
            >
              Numéro de carte *
            </label>

            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <SlCreditCard className="text-zinc-500 text-lg" />
            </div>
          </div>
          <div
            className="
            pt-2  "
          >
            <p
              className="
                text-xs
                text-zinc-500
                ml-6  "
            >
              La carte doit être à votre nom
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mt-6  justify-center ">
          <div className=" sm:w-1/2 px-3 mb-6 md:mb-0">
            <div>
              <div className="relative">
                <input
                  id="3"
                  name="cardExpirationDate"
                  onChange={handleInputChange}
                  className="
                  block 
                  px-6
                  pt-6
                  pb-1
                  w-full
                  text-md
                  text-black
                  bg-custom-bg
                  apparence-none
                  focus:outline-none
                  focus:ring-0
                  peer
                  border-t-0  border-solid rounded-t-lg
                  border-b-2 border-gray-400"
                  placeholder=""
                />
                <label
                  className="
                  absolute 
                  text-md
                text-zinc-500
                  duration-150
                  transform
                  -translate-y-3
                  scale-75
                  top-4
                  z-10
                  origin-[0]
                  left-6
                  peer-placeholder-shown:scale-100
                  peer-placeholder-shown:translate-y-0
                  peer-focus:scale-75
                  peer-focus:-translate-y-3"
                >
                  Date d'expiration *
                </label>
              </div>
              <div
                className="
            pt-2  "
              >
                <p
                  className="
                text-xs
                text-zinc-500
                ml-6  "
                >
                  MM/AA
                </p>
              </div>
            </div>
          </div>
          <div className=" sm:w-1/2 px-3 ">
            <div>
              <div className="relative">
                <input
                  id="4"
                  type="number"
                  name="cardCvv"
                  onChange={handleInputChange}
                  className="
                  block 
                  px-6
                  pt-6
                  pb-1
                  w-full
                  text-md
                  text-black
                  bg-custom-bg
                  apparence-none
                  focus:outline-none
                  focus:ring-0
                  peer
                  border-t-0  border-solid rounded-t-lg
                  border-b-2 border-gray-400"
                  placeholder=""
                />
                <label
                  className="
                  absolute 
                  text-md
                text-zinc-500
                  duration-150
                  transform
                  -translate-y-3
                  scale-75
                  top-4
                  z-10
                  origin-[0]
                  left-6
                  peer-placeholder-shown:scale-100
                  peer-placeholder-shown:translate-y-0
                  peer-focus:scale-75
                  peer-focus:-translate-y-3"
                >
                  Code CVV *
                </label>

                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <button>
                    <SlQuestion className="text-zinc-500 text-lg " />
                  </button>
                </div>
              </div>
              <div
                className="
            pt-2  "
              >
                <p
                  className="
                text-xs
                text-zinc-500
                ml-6  "
                >
                  3 chiffres
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 justify-center ">
          <button className=" w-full bg-gradient-to-tr from-custom-green to-custom-yellow px-4 py-3 text-black font-semibold rounded-lg">
            Payez 12,99 €
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
