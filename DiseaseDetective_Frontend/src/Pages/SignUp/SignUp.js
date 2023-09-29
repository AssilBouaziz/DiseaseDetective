import { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../Api/Api";
import logoPng from "../../Assets/logo.png";

function SignUp() {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, seterror] = useState();
  const navigate = useNavigate();
  const onChange = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value,
    });
  };
  const onSubmit = async () => {
    if (state.password_confirmation === state.password) {
      var response = await signUp(
        JSON.stringify({
          first_name: state.first_name,
          last_name: state.last_name,
          email: state.email,
          password: state.password,
        })
      );
    } else {
      seterror("password non compatible");
    }
    if (response.status === 201) {
      //use navigate
      navigate("/signin");
    }
    if (response.status === 400) {
      seterror("Fill in all the fields");
    } else {
      seterror(response.message);
    }
  };

  return (
    <div className="md:flex w-full h-full bg-disease bg-blue-1 md:px-6">
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
            <div className="mx-auto flex h-12 w-72 flex-shrink-0 items-center justify-center rounded-full bg-red-100  ">
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
            <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Your <b>DiseaseDetective</b> Account
            </p>
          </div>
          <div className="w-64 space-y-3 md:w-full">
            <Input
              className={
                "relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"
              }
              placeholder={"First Name"}
              onChange={(e) => onChange(e, "first_name")}
              value={state.first_name}
            />
            <Input
              className={
                "relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"
              }
              placeholder={"Last Name"}
              onChange={(e) => onChange(e, "last_name")}
              value={state.last_name}
            />
            <Input
              type={"email"}
              className={
                "relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"
              }
              placeholder={"Email address"}
              autocomplete={"email"}
              onChange={(e) => onChange(e, "email")}
              value={state.email}
            />
            <Input
              type={"password"}
              placeholder={"Password"}
              autocomplete={"current-password"}
              onChange={(e) => onChange(e, "password")}
              value={state.password}
              className={
                "relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"
              }
            />
            <Input
              type={"password"}
              placeholder={"Password Confirmation"}
              autocomplete={"current-password"}
              onChange={(e) => onChange(e, "password_confirmation")}
              value={state.password_confirmation}
              className={
                state.password_confirmation === state.password
                  ? "relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"
                  : "relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              }
            />
          </div>
          <div>
            <Button 
              onClick={onSubmit}
              name={"Sign Up"}
              className="group relative flex w-full justify-center rounded-md bg-green-1 py-2 px-3 text-sm font-semibold text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-450"
            />
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account ?
              <Link
                to="/signin"
                className="font-medium px-8 text-green-1 hover:text-green-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
