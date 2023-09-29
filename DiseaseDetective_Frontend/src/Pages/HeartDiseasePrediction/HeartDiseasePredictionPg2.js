import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import NavBar from "../../Components/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import ErrorNav from "../../Components/Alert/ErrorNav";
import { updateData } from "../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
function HeartDiseasePredictionPg2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formHeart);
  const [error, seterror] = useState();
  console.log("form",form);
  const [state, setState] = useState({
    sex: form.data["sex"],
    age: form.data["age"],
    smooker: form.data["smooker"],
    nbCigerette: form.data["nbCigerette"],
  });
  // const [state, setState] = useState({
  //   sex: form.data["sex"] ? form.data["sex"] : "",
  //   age: form.data["age"] ? form.data["age"] : "",
  //   smooker: form.data["smooker"] ? form.data["smooker"] : "",
  //   nbCigerette: form.data["nbCigerette"] ? form.data["nbCigerette"] : "",
  // });
  
  const onChange = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value,  
    });
    dispatch(updateData(key, e.target.value));
  };
  const next = () => {
    if (state["age"] && state["sex"] && state["smooker"]) {
      if (state["smooker"] === "0") {
        dispatch(updateData("nbCigerette", "0"));
      } else {
        if (state["smooker"] === "1" && state["nbCigerette"]) {
          navigate("/HeartDiseasePrediction/2");
        } else {
          seterror("Fill in all the fields");
        }
      }
      navigate("/HeartDiseasePrediction/2");
    } else {
      seterror("Fill in all the fields");
    }
  };
  return (
    <div className="bg-cover bg-center bg-homePage  w-full bg-blue-1">
      <NavBar />
      <div className="md:flex justify-center w-full py-5 md:py-0 bg-blue-50">
        <div className="p-6 md:flex justify-between md:w-3/5  md:m-20 ">
          <div className=" md:w-1/5  ">
          <ul className="flex pb-6  md:flex-col md:ml-6 ">
              <Link
                className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 border-green-700 text-blue-1 cursor-pointer"
                to="/HeartDiseasePrediction"
              >
                Introduction
              </Link>
              <li className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 border-green-800 text-blue-1 cursor-default">
                Patient
              </li>
              <li className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 text-gray-400 cursor-not-allowed">
                Questions
              </li>
              <li className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 text-gray-400 cursor-not-allowed">
                Results
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:w-3/4 my-8 md:my-0 md:justify-between shadow-2xl bg-white">
            <div className="pt-4 w-full md:pt-8 ">
              <ErrorNav message={error} />
            </div>
            <div className="flex w-full p-4 md:p-8 justify-between items-center">
              <h1 className="text-base w-1/2 md:w-1/3 md:text-xl font-normal  text-blue-1  ">
                What is your sex ?
              </h1>
              <div className="flex justify-evenly w-1/2   ">
                <div
                  className={
                    state.sex && state.sex === "0"
                      ? "flex rounded-lg w-1/3 h-12  md:w-1/4 md:h-12 md:text-xl  text-pink-400  ring-2 font-semibold ring-pink-400"
                      : "flex rounded-lg w-1/3 h-12 md:w-1/4 md:h-12 md:text-xl  font-normal text-blue-1 hover:text-pink-400 border-2 hover:ring-2 hover:font-semibold ring-pink-400"
                  }
                  for="radio1"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="radio1"
                    name="radio-group"
                    value="0"
                    onChange={(e) => onChange(e, "sex")}
                  />

                  <label
                    className=" h-full w-full text-center py-2"
                    for="radio1"
                  >
                    Female
                  </label>
                </div>
                <div
                  className={
                    state.sex && state.sex === "1"
                      ? "flex rounded-lg w-1/3 h-12 items-center md:w-1/4 md:h-12 md:text-xl  text-blue-700 ring-2 font-semibold  ring-blue-700"
                      : "flex rounded-lg w-1/3 h-12 md:w-1/4 md:h-12 md:text-xl font-normal text-blue-1 hover:text-blue-700  border-2 hover:ring-2 hover:font-semibold  ring-blue-700"
                  }
                  for="radio2"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="radio2"
                    name="radio-group"
                    value="1"
                    onChange={(e) => onChange(e, "sex")}
                  />
                  <label
                    className="h-full w-full text-center py-2 "
                    for="radio2"
                  >
                    Male
                  </label>
                </div>
              </div>
            </div>
            <div className="flex w-full p-4 md:p-8 justify-between items-center">
              <h1 className="text-base w-1/2 md:w-1/3 md:text-xl font-normal  text-blue-1  ">
                How old are you ?
              </h1>
              <div className="flex justify-evenly w-1/2   ">
                <Input
                  className="rounded-md shadow-lg w-2/3 h-full text-center text-xl text-semibold text-gray-400 ring-2 ring-gray-300 focus:text-black"
                  onChange={(e) => onChange(e, "age")}
                  value={state.age}
                  type={"number"}
                  placeholder="0"
                />
              </div>
            </div>
            <div className="flex w-full p-4 md:p-8 justify-between items-center">
              <h1 className="text-base w-1/2 md:w-1/3 md:text-xl font-normal  text-blue-1  ">
                Do you smook ?
              </h1>
              <div className="flex justify-evenly w-1/2   ">
                <div
                  className={
                    state.smooker && state.smooker === "1"
                      ? "flex rounded-lg w-1/3 h-12  md:w-1/4 md:h-12 md:text-xl  text-green-600 ring-2 font-semibold  ring-green-600"
                      : "flex rounded-lg w-1/3 h-12  md:w-1/4 md:h-12 md:text-xl items-center justify-center font-normal text-blue-1 hover:text-green-600 border-2 hover:ring-2 hover:font-semibold  ring-green-600"
                  }
                  for="smookerYes"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="smookerYes"
                    name="smooker"
                    value="1"
                    onChange={(e) => onChange(e, "smooker")}
                  />
                  <label
                    className="h-full w-full text-center py-1 "
                    for="smookerYes"
                  >
                    Yes
                  </label>
                </div>
                <div
                  className={
                    state.smooker && state.smooker === "0"
                      ? "flex rounded-lg w-1/3 h-12  md:w-1/4 md:h-12 md:text-xl  text-red-600  ring-2 font-semibold ring-red-600"
                      : "flex rounded-lg w-1/3 h-12  md:w-1/4 md:h-12 md:text-xl font-normal text-blue-1 hover:text-red-600 border-2 hover:ring-2 hover:font-semibold ring-red-600"
                  }
                  for="smookerNo"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="smookerNo"
                    name="smooker"
                    value="0"
                    onChange={(e) => onChange(e, "smooker")}
                  />

                  <label
                    className=" h-full w-full text-center py-1"
                    for="smookerNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            {state.smooker === "1" && (
              <div className="flex w-full p-4 md:p-8 justify-between items-center">
              <h1 className="text-base w-1/2 md:w-1/3 md:text-xl font-normal  text-blue-1  ">
                  How many cigarettes per day ?
                </h1>
                <div className="flex justify-evenly w-1/2   ">
                  <Input
                    className="rounded-md shadow-lg w-2/3 h-1/2 text-center text-xl text-semibold text-gray-400 ring-2 ring-gray-300 focus:text-black"
                    onChange={(e) => onChange(e, "nbCigerette")}
                    value={state.nbCigerette}
                    type={"number"}
                    placeholder="0"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between w-full items-center px-10 p-8 ">
              <Link
                to="/HeartDiseasePrediction"
                className="flex items-center text-xl font-semibold leading-6 p-2 rounded-md  text-blue-1 hover:bg-blue-100 hover:ring-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 hover:text-blue-700"
                  viewBox="0 0 48 48"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    d="m28 12 2.828 2.828L21.656 24l9.172 9.172L28 36 16 24zm0 0"
                  ></path>
                </svg>
                Back
              </Link>
              <Button
                name="Next"
                onClick={next}
                className="border-2 rounded-md py-2 px-5 text-lg font-semibold bg-green-600 text-white hover:bg-green-700 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeartDiseasePredictionPg2;
