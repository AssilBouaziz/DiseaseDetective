import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../Api/Api";
import logoPng from "../../Assets/logo.png";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
function Password() {
  const [state, setState] = useState({
    email: "",
  });
  const [error, seterror] = useState();
  const [PopUp, setPopUp] = useState(false);
  const navigate = useNavigate();

  const onChange = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value,
    });
  };
  const onSubmit = async () => {
    const response = await changePassword(
      JSON.stringify({
        email: state.email,
      })
    );
    if (response.status === 200) {
      setPopUp(true);
    } else {
      seterror("Add email adress", response.message);
    }
  };
  const onCancel = () => {
    navigate("/signin");
  };
  return (
    <div className="md:flex w-full h-full bg-disease bg-blue-1 md:px-6">
      {PopUp && (
        <div className="fixed z-10  inset-0 bg-opacity-75 overflow-y-auto">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className=" flex relative  items-center justify-center  text-center  min-h-screen">
            <div className="bg-white w-1/4  rounded-lg overflow-hidden shadow-xl p-4">
              <div className="flex justify-center pb-3">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-14 sm:w-14">
                  <svg
                    className="h-8 w-8 text-green-600 "
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
              </div>
              <p className="pb-2 justify-center">
                <b>Password Changed successfully! </b>
              </p>
              <p className="mb-4">
                The new password was sent to your email. Check your email
              </p>
              <div className="flex justify-center">
                <Button
                  onClick={() => {setPopUp(false); navigate("/signin")}}
                  name={"Sign In"}
                  className="group relative flex w-44 justify-center rounded-md bg-green-1 py-2 px-3 text-sm font-bold text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-450"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex md:w-1/2 md:min-h-full items-center justify-center pt-12 md:py-12  md:px-24 ">
        <div className="w-full  space-y-8 ">
          <div>
            <img
              className="mx-auto w-4/5 md:w-full h-auto"
              src={logoPng}
              alt="Your Company"
            />
            <p className="mt-5 hidden md:block text-center text-base text-white">
              “Declare the past, diagnose the present, foretell the future.” ―
              Hippocrates
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-3/4 md:w-1/2 md:h-full  md:min-h-full items-center justify-center md:py-12 md:px-24">
        <div className=" md:w-full  max-w-2xl  space-y-8 md:space-y-6 py-12 px-12 rounded-3xl bg-white shadow">
        {error ? (
                <div className="mx-auto  flex h-12 w-72 flex-shrink-0 items-center justify-center rounded-full bg-red-100   ">
                  <svg
                className="h-8 w-8 text-red-600 "
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
                {error}
              </h3>
            </div>
          ) : (
            <></>
          )}
          <div>
            <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
              Forgot Password ?
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Enter your email to reset your Password
            </p>
          </div>
          <div className="-space-y-px rounded-md shadow-sm">
            <Input
              className={
                "relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"
              }
              placeholder={"Email address"}
              autocomplete={"email"}
              onChange={(e) => onChange(e, "email")}
              value={state.email}
            />
          </div>

          <div className="flex justify-center space-x-6 ">
            <Button
              onClick={onSubmit}
              name={"Submit"}
              className="group relative flex w-1/4 justify-center rounded-md bg-green-1 py-2 px-3 text-sm font-semibold text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-450"
            />
            <Button
              onClick={onCancel}
              name={"Cancel"}
              className="group relative flex w-1/4 justify-center rounded-md bg-gray-300 py-2 px-3 text-sm font-semibold text-white hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-450"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
