"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import store from "../store";

type ReduxProviderProps = {
  children: ReactNode;
};

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
