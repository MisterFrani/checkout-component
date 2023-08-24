import { useContext } from "react";
import { StateContext } from "../contexts/StateContext";

export const useStateProvider = () => useContext(StateContext);
