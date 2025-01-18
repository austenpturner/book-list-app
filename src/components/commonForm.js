import * as React from "react";
import Input from "./commonInput";
import PropTypes from "prop-types";
import Select from "./commonSelect";
import Textarea from "./commonTextarea";

const formElementTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXT_AREA: "text-area",
};
export default function CommonForm({
  formControls = [],
  formData,
  setFormData,
  onSubmit,
  btnText,
  btnIcon,
}) {
  function renderFormElement(getCurrentFormControl, getFormData) {
    let element = null;

    switch (getCurrentFormControl.componentType) {
      case formElementTypes.INPUT:
        element = (
          <Input
            label={getCurrentFormControl.label}
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={formData[getCurrentFormControl.name]}
            name={getCurrentFormControl.name}
            id={getCurrentFormControl.id}
            onChange={setFormData}
          />
        );
        break;
      case formElementTypes.SELECT:
        element = (
          <Select
            label={getCurrentFormControl.label}
            name={getCurrentFormControl.name}
            id={getCurrentFormControl.id}
            placeholder={getCurrentFormControl.placeholder}
            value={formData[getCurrentFormControl.name]}
            options={getCurrentFormControl.options}
            onChange={setFormData}
          />
        );
        break;
      case formElementTypes.TEXT_AREA:
        element = (
          <Textarea
            label={getCurrentFormControl.label}
            name={getCurrentFormControl.name}
            id={getCurrentFormControl.id}
            placeholder={getCurrentFormControl.placeholder}
            value={formData[getCurrentFormControl.name]}
            onChange={setFormData}
          />
        );
        break;

      default:
        element = (
          <Input
            label={getCurrentFormControl.label}
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getFormData[getCurrentFormControl.name]}
            name={getCurrentFormControl.name}
            id={getCurrentFormControl.id}
            onChange={setFormData}
          />
        );
        break;
    }
    return element;
  }

  return (
    <form onSubmit={onSubmit} className="flex justify-center">
      {formControls.map((formControl) => {
        return (
          <div
            key={formControl.id}
            className="border border-slate-900 rounded py-1 px-1 w-1/2 flex justify-between"
          >
            {renderFormElement(formControl, formData)}
            <button type="submit" className="px-2 py-1 rounded">
              {btnIcon ? btnIcon : btnText}
            </button>
          </div>
        );
      })}
    </form>
  );
}

CommonForm.propTypes = {
  formControls: PropTypes.array,
  btnText: PropTypes.string,
  btnIcon: PropTypes.object,
  formData: PropTypes.object,
  onSubmit: PropTypes.func,
  setFormData: PropTypes.func,
  className: PropTypes.string,
};
