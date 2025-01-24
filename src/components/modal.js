import React, { useContext } from "react";
import { UIContext } from "../context/uiContext";
import ActionModal from "./actionModal";
import { IoClose } from "react-icons/io5";

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
      className={`fixed top-[10%] md:top-[20%] w-[80%] left-[10%] lg:w-1/2 lg:left-1/4 flex flex-col justify-center bg-white drop-shadow-lg rounded-xl shadow p-4 md:p-6 transition-all z-50 ${
        isOpen ? `visible opacity-100` : `opacity-0 invisible`
      }`}
      aria-hidden={isOpen ? "false" : "true"}
    >
      <button className="self-end" onClick={() => handleCloseModal()}>
        <IoClose className="text-black h-7 w-7 md:h-8 md:w-8 hover:scale-105" />
      </button>
      {renderModalContent()}
    </div>
  );
}
