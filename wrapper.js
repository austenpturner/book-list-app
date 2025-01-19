import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import UIProvider from "./src/context/uiContext";

const WrapWithProvider = ({ element }) => {
  return (
    <Provider store={store}>
      <UIProvider>{element}</UIProvider>
    </Provider>
  );
};

export default WrapWithProvider;
