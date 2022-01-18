import { useContext } from "react";
import { Context } from "../contexts";

export const useCart = () => {
  const context = useContext(Context);
  return context;
};