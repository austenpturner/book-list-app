import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";

const WrapWithProvider = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

export default WrapWithProvider;
