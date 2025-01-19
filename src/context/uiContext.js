import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const UIContext = createContext(null);

const OPEN_MODAL = "OPEN_MODAL";
const BOOK_SEARCH_SUBMITTED = "BOOK_SEARCH_SUBMITTED";

function uiReducer(state, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        openModal: action.payload,
      };
    case BOOK_SEARCH_SUBMITTED:
      return {
        ...state,
        bookSearchSubmitted: action.payload,
      };
    default:
      return state;
  }
}

const initialState = {
  openModal: false,
  bookSearchSubmitted: false,
};

export default function UIProvider({ children }) {
  const [state, uiDispatch] = useReducer(uiReducer, initialState);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <UIContext.Provider value={{ state, uiDispatch }}>
      {children}
    </UIContext.Provider>
  );
}

UIProvider.propTypes = {
  children: PropTypes.object,
};
