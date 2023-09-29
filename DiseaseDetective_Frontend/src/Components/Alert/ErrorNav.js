import React from "react";
import PropTypes from "prop-types";

export default function ErrorNav(props) {
  let className = [" flex items-center justify-center h-12 w-72 m-auto  rounded-xl bg-red-100  "];
  if (props.className) {
    className.push(props.className);
  }
  return (
    <>
      {props.message && (
        <div className={className.join(" ")}>
          <svg
            className="h-8 w-8 text-red-600 rou "
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <h3
            className="text-base font-semibold leading-6 text-gray-900 px-5"
            id="modal-title"
          >
            {props.message}
          </h3>
        </div>
      )}
    </>
  );
}
ErrorNav.defaultProps = {
  className: "",
  message: "",
};
ErrorNav.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
};
