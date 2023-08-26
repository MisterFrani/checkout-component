import { useEffect, useState } from "react";

interface NavigationType {
  urlSuccess: string | null;
  urlError: string | null;
}

const usePaygreen = () => {
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

  return [paygreen];
};

export default usePaygreen;
