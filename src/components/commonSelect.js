import PropTypes from "prop-types";
import * as React from "react";

export default function Select({ label, name, id, value, onChange, options }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select id={id} name={name} onChange={onChange} value={value}>
        <option>-- Please choose an option --</option>
        {options?.length
          ? options.map((optionItem, index) => {
              return (
                <option key={index} value={optionItem.value}>
                  {optionItem.name}
                </option>
              );
            })
          : null}
      </select>
    </>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};
