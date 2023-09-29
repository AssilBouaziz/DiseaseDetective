import { useState } from "react";
import { signIn } from "../../Api/Api";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { useDispatch } from "react-redux";
import { SetUser } from "../../Redux/Action";
import logoPng from "../../Assets/logo.png";

function SignIn(params) {
  const Dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
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
    const response = await signIn(
      JSON.stringify({
        email: state.email,
        password: state.password,
      })
    );
    if (response.status === 200) {
      Dispatch(SetUser({ user: response.data, token: response.token }));
      navigate("/home");
    }
    else {
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
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Your <b>DiseaseDetective</b> Account
            </p>
          </div>
            <div className="space-y-5 rounded-md shadow-sm">
              <Input
                className={"relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"}
                placeholder={"Email address"}
                autocomplete={"email"}
                onChange={(e) => onChange(e, "email")}
                value={state.email}
              />
              <Input
                type={"password"}
                placeholder={"Password"}
                autocomplete={"password"}
                onChange={(e) => onChange(e, "password")}
                value={state.password}
                className={"relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"}
              />
            </div>

            <div className="flex items-center justify-start">
              

              <div className="text-sm">
                <Link
                  to="/Password"
                  className="font-medium text-green-1 hover:text-green-600"
                >
                  Forgot your password ?
                </Link>
              </div>
            </div>

            <div>
              <Button
                onClick={onSubmit}
                name={"Sign In"}
                className="group relative flex w-full justify-center rounded-md bg-green-1 py-2 px-3 text-sm font-semibold text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-450"
              />
              <p className="mt-2 text-center text-sm text-gray-600">
                Don't have an account yet ?
                <Link
                  to="/signup"
                  className="font-medium px-8 text-green-1 hover:text-green-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn ;
