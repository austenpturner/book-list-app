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
    <>
      {label !== "" && (
        <label htmlFor={name} className="mr-2">
          {label}
        </label>
      )}

      <input
        name={name}
        id={id}
        type={type || "text"}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        className="block w-11/12 focus:outline-none"
      />
    </>
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
