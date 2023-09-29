import React from "react";
import PropTypes from "prop-types";

export default function Textarea(props) {
  let className = ["input-border width-100  "];
  if (props.className) {
    className.push(props.className);
  }
  return (
    <>
      {props.label ? (
        <div className={"my-5"}>
          {" "}
          <label className="my-5">{props.label}</label>
          <textarea
            className={className.join(" ")}
            type={props.type}
            value={props.value}
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
            required="required"
            rows={props.rows}
            cols={props.cols}
          />
        </div>
      ) : (
        <textarea
          className={className.join(" ")}
          type={props.type}
          value={props.value}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
          required="required"
          rows={props.rows}
          cols={props.cols}
        />
      )}
    </>
  );
}
Textarea.defaultProps = {
  type: "String",
  className: "",
  value: "",
  name: "",
  id: "",
  rows: "4",
  cols: "50",
  placeholder: "texte",
  onChange: () => {
    return null;
  },
};
Textarea.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
