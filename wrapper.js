import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import UIProvider from "./src/context/uiContext";
import { SearchProvider } from "./src/context/searchContext";

const WrapWithProvider = ({ element }) => {
  return (
    <Provider store={store}>
      <UIProvider>
        <SearchProvider>{element}</SearchProvider>
      </UIProvider>
    </Provider>
  );
};

export default WrapWithProvider;
