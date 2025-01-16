import PropTypes from "prop-types";
import * as React from "react";

export default function Input({
  label,
  name,
  id,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-row">
      <label htmlFor={name} className="mr-2">
        {label}
      </label>
      <input
        name={name}
        id={id}
        type={type || "text"}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        className="border-1 border-blue-500 w-2/4"
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
