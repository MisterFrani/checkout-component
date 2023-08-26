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
        backgroundColor: "red",
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
        backgroundColor: "red",
      },
      unchecked: {
        color: "#f2e526",
      },
    },
  },
};

function CheckoutPage() {
  return (
    <div className="w-full">
      <PaygreenComponent title="Entrer les informations de la carte" style={customStyle} />
    </div>
  );
}

export default CheckoutPage;

