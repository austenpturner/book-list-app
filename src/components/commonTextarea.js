import PropTypes from "prop-types";
import * as React from "react";

export default function Textarea({
  label,
  name,
  id,
  placeholder,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder || "Start typing here... "}
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
}

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
