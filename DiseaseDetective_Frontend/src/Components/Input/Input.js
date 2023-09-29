import React from "react";
import PropTypes from "prop-types";

export default function Input(props) {
  let className = [""];
  if (props.className) {
    className.push(props.className);
  }
  return (
    <>
      {props.label ? (
        <div className={"my-5"}>
          {" "}
          <label className="my-5">{props.label}</label>
          <input
            className={className.join(" ")}
            type={props.type}
            value={props.value}
            name={props.name}
            id={props.id}
            autoComplete={props.autocomplete}
            placeholder={props.placeholder}
            onChange={props.onChange}
            required
          />
        </div>
      ) : (
          <input
            className={className.join(" ")}
            type={props.type}
            value={props.value}
            name={props.name}
            id={props.id}
            autoComplete={props.autocomplete}
            placeholder={props.placeholder}
            onChange={props.onChange}
            required
          />
      )}
    </>
  );
}
Input.defaultProps = {
  type: "String",
  className: "",
  value: "",
  name: "",
  id: "",
  placeholder: "texte",
  onChange: () => {
    return null;
  },
};
Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
