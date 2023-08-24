import React, { useEffect } from "react";

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

  useEffect(()=>{
    console.log(
      `border border-t-0 border-${color[props.variant]}-400 rounded-b bg-${
        color[props.variant]
      }-100 px-4 py-3 text-${color[props.variant]}-700`
    );
    
  },[])


  return (
    <div role="alert" className="mt-20 ">
      <div
        className={`border border-t-0 border-${
          color[props.variant]
        }-400 rounded-b bg-${color[props.variant]}-100 px-4 py-3 text-${
          color[props.variant]
        }-700`}
      >
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default AlertComponent;
