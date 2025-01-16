import * as React from "react";

export default function Modal({ open, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 justify-center items-center transition-colors ${
        open ? `visible bg-black/20` : `invisible`
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? `opacity-100` : `opacity-0`
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-full"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
