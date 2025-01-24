import React, { useContext } from "react";
import { UIContext } from "../context/uiContext";
import ActionModal from "./actionModal";

export default function Modal() {
  const { state, uiDispatch } = useContext(UIContext);
  const { isOpen, type, content } = state.modal;

  function handleCloseModal() {
    uiDispatch({ type: "TOGGLE_MODAL", payload: {} });
  }

  function renderModalContent() {
    switch (type) {
      case "add":
        return <ActionModal action={type} book={content} />;
      default:
        return null;
    }
  }

  return (
    <div
      className={`absolute bg-white rounded-xl shadow p-6 transition-all z-50 ${
        isOpen ? `visible opacity-100` : `opacity-0 invisible`
      }`}
      aria-hidden={isOpen ? "false" : "true"}
    >
      <button
        className="bg-red-500 text-white px-2 py-1 rounded-full"
        onClick={() => handleCloseModal()}
      >
        X
      </button>
      {renderModalContent()}
    </div>
  );
}
