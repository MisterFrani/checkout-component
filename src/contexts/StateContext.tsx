import { ReactNode, createContext, useMemo, useState } from "react";
import LoaderComponent from "../components/Loader/LoaderComponent";

type Message = {
  status: "success" | "danger" | "warning";
  detail: string;
};

interface StateContextType {
  message: Message | undefined;
  startLoading: () => void;
  stopLoading: () => void;
  setMessage: (message: Message) => void;
}

interface StateProviderType {
  children: ReactNode;
}

export const StateContext = createContext<StateContextType>(
  {} as StateContextType
);

export const StateProvider = (props: StateProviderType): JSX.Element => {
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState<Message | undefined>();

  const startLoading = (): void => {
    setLoading(true);
  };
  const stopLoading = (): void => {
    setLoading(false);
  };

  const memoedValue = useMemo(
    () => ({
      message,
      setMessage,
      startLoading,
      stopLoading,
    }),
    [loading, message]
  );

  return (
    <StateContext.Provider value={memoedValue}>
      {loading && <LoaderComponent />}
      {props.children}
    </StateContext.Provider>
  );
};
