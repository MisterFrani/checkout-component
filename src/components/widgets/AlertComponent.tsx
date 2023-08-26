import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface Props {
  variant: "success" | "danger" | "warning";
  message: string;
}

const AlertComponent = (props: Props) => {
  const color = {
    success: "green",
    danger: "red",
    warning: "yellow",
  };

  useEffect(() => {
    toast(`${props.message}`, {
      style: {
        backgroundColor: color[props.variant],
        color: "white",
        fontWeight: "bold",
        fontSize: "1.2rem",
      },
    });
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AlertComponent;
