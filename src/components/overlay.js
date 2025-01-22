import React, { useContext } from "react";
import { UIContext } from "../context/uiContext";

export default function Overlay() {
  const { state, uiDispatch } = useContext(UIContext);

  function handleCloseComponents() {
    uiDispatch({ type: "TOGGLE_OVERLAY", payload: false });
    uiDispatch({ type: "TOGGLE_MODAL", payload: "" });
  }

  return (
    <div
      className={`fixed inset-0 justify-center items-center transition-colors ${
        state.modal.isOpen || state.overlayVisible
          ? `visible bg-black/20 z-40`
          : `invisible`
      }`}
      aria-hidden="true"
      onClick={handleCloseComponents}
    ></div>
  );
}
