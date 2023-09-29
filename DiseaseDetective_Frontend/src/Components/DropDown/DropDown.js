import React, { useState } from "react";

function DropDown(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" border-2 hover:border-blue-1 hover:bg-blue-50 rounded-xl p-2">
      <button
        className="flex w-full justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className=" md:text-xl font-normal md:text-justify  text-blue-1 ">
          {new Date(props.servey.date).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <div className=" md:text-xl font-normal text-justify  text-blue-1 ">
          {props.servey.result === 0 ? (
                    <div className="flex justify-center items-center md:pb-3">
                      <div className="mx-auto flex h-8 w-8 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-14 sm:w-14">
                        <svg
                          className="h-6 md:h-8 md:w-8 text-green-600 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="hidden md:block p-3 md:text-xl font-normal text-justify  text-blue-1 "> Good Health</p>
                    </div>
                ) : (
                    <div className="flex justify-center items-center md:pb-3">
                      <div className="mx-auto flex h-8 w-8 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-14 sm:w-14">
                        <svg
                          className="h-6 md:h-8 md:w-8 text-red-600 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>

                      </div>
                      <p className="hidden md:block md:p-3 md:text-xl  font-normal text-justify  text-blue-1 "> Bad Health</p>
                    </div>
                )}
        </div>
        <svg
          className="w-6 h-6 ml-2 "
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <>
          <div className="md:flex justify-between w-full px-6 md:p-6">
            <p>Age : {props.servey.age}</p>
            {props.servey.sexe === "1" ? <p>Sexe : Male</p> : <p>Sexe : Female</p>}
            <p>
              Number of cigarettes per day : {props.servey.cigarettes_per_day}
            </p>
          </div>
          <div className="md:flex justify-between w-full px-6 ">
            {props.servey.diabetes === "1" ? (
              <p>Diabetes : Yes</p>
            ) : (
              <p>Diabetes : No</p>
            )}
            {props.servey.hypertension_prevalence === "1"? (
              <p>Hypertension Prevalence : Yes</p>
            ) : (
              <p>Hypertension Prevalence : No</p>
            )}
            {props.servey.stroke_prevalence === "1" ? (
              <p>Stroke Prevalence : Yes</p>
            ) : (
              <p>Stroke Prevalence : No</p>
            )}
          </div>
          <div className="md:flex justify-between w-full px-6 md:p-6">
            <p>Glucose level : {props.servey.glucose_levels}</p>
            {props.servey.blood_pressure_meds === "1" ? (
              <p>Blood Pressure Medication : Yes</p>
            ) : (
              <p>Blood Pressure Medication : No</p>
            )}

            <p>
              Systolic blood pressure : {props.servey.systolic_blood_pressure}
            </p>
          </div>
          <div className="md:flex justify-between w-full px-6">
            <p>Heart Rate : {props.servey.heart_beat}</p>
            <p>Body Mass Index(BMI) : {props.servey.bmi}</p>
            <p>Total cholesterol level : {props.servey.cholesterol}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default DropDown;
