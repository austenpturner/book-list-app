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
      <label htmlFor={id} className="mr-2 hidden" aria-labelledby={name}>
        {label}
      </label>
      <input
        name={name}
        id={id}
        type={type || "text"}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        className="block w-11/12 focus:outline-none placeholder:italic"
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
