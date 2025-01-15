import * as React from "react";

export default function Modal({ open, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 justify-center items-center transition-colors ${
        open ? `visible bg-black/20` : `invisible`
      }`}
    >
      <div
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? `scale-100 opacity-100` : `scale-125 opacity-0`
        }`}
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
