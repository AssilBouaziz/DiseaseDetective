import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoPng from "../../Assets/logo.png";
import { SetUser } from "../../Redux/Action";
import Button from "../Button/Button";

export default function NavBar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="shadow-2xl  ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-1 md:p-3   "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className=" ">
            <span className="sr-only">Your Company</span>
            <img className="h-12 md:h-16 " src={logoPng} alt="" />
          </Link>
        </div>
        <div className="hidden md:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-lg font-semibold leading-6 text-white hover:text-blue-200"
          >
            Home
          </Link>
          {auth.user?.role === "admin" && (
            <Link
              to="/dashboard"
              className="text-lg font-semibold leading-6 text-white hover:text-blue-200"
            >
              Dashboard
            </Link>
          )}
          <Link
            to="/doctors"
            className="text-lg font-semibold leading-6 text-white hover:text-blue-200"
          >
            Doctors
          </Link>

          <Link
            to="/aboutus"
            className="text-lg font-semibold leading-6 text-white hover:text-blue-200"
          >
            About Us
          </Link>
        </div>
        {auth.token ? (
          <div className="flex items-center md:flex-1 md:justify-end md:gap-x-12">
            <Link
              className="flex items-center justify-end px-3 lg:gap-x-2"
              to={`/profile/${auth.user._id}`}
            >
              <p className=" text-lg font-bold leading-6 text-blue-100 md:text-white cursor-default">
                Hi,
              </p>
              <p className=" text-lg font-bold leading-6 text-blue-200 md:text-white hover:text-blue-200 cursor-pointer">
                {auth.user.first_name}
              </p>
            </Link>
            <Link to={"/"}>
              <Button
                name={"Log Out"}
                onClick={() => dispatch(SetUser({ user: null, token: null }))}
                className=" border-2 rounded-md py-1 px-2 md:py-2 md:px-5 text-lg font-bold text-white hover:bg-blue-200 "
              />
            </Link>
          </div>
        ) : (
          <div className="flex items-center lg:flex-1 lg:justify-end lg:gap-x-12">
            <Link to={"signup"}>
              <Button
                name={"Register"}
                className="hidden md:block border-2 rounded-md  py-2 px-5 text-lg font-bold text-white hover:bg-blue-200 "
              />
            </Link>
            <Link
              to="/signin"
              className=" text-lg font-semibold leading-6 text-white hover:text-blue-200"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
