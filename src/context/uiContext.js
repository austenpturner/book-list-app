import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

export const UiContext = createContext(null);

function uiReducer(state, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        openModal: action.payload,
      };
    default:
      return state;
  }
}

const initialState = {
  openModal: false,
};

export default function UIProvider({ children }) {
  const [state, uiDispatch] = useReducer(uiReducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <UiContext.Provider value={{ state, uiDispatch }}>
      {children}
    </UiContext.Provider>
  );
}

UIProvider.propTypes = {
  children: PropTypes.object,
};
