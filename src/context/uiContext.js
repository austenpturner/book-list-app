import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const UIContext = createContext(null);

const TOGGLE_MODAL = "TOGGLE_MODAL";
const BOOK_SEARCH_SUBMITTED = "BOOK_SEARCH_SUBMITTED";
const TOGGLE_OVERLAY = "TOGGLE_OVERLAY";

function uiReducer(state, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: {
          isOpen: !state.modal.isOpen,
          content: action.payload.content,
          type: action.payload.type,
        },
      };
    case TOGGLE_OVERLAY:
      return {
        ...state,
        overlayVisible: action.payload,
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
  modal: {
    isOpen: false,
    content: null,
    type: null,
  },
  bookSearchSubmitted: false,
  overlayVisible: false,
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
