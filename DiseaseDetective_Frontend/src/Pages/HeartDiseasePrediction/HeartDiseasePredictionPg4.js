import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ErrorNav from "../../Components/Alert/ErrorNav";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import NavBar from "../../Components/NavBar/NavBar";
import { updateData } from "../../Redux/Action";
function HeartDiseasePredictionPg3() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formHeart);
  const [error, seterror] = useState();
  const [state, setState] = useState({
    totChol: form.data["totChol"],
    sysBP: form.data["sysBP"],
    BMI: form.data["BMI"],
    heartRate: form.data["heartRate"],
    glucose: form.data["glucose"],
  });
  const onChange = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value,
    });
    dispatch(updateData(key, e.target.value));
  };
  const next = () => {
    if (
      state["totChol"] &&
      state["sysBP"] &&
      state["BMI"] &&
      state["heartRate"] && 
      state["glucose"]
    ) {
      navigate("/HeartDiseasePrediction/Results");
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
                className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4 md:border-b-0 border-green-700 text-blue-1 cursor-pointer"
                to="/HeartDiseasePrediction"
              >
                Introduction
              </Link>
              <Link
                className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 border-green-700 text-blue-1 cursor-pointer"
                to="/HeartDiseasePrediction/1"
              >
                Patient
              </Link>
              <Link
                className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 border-green-900 text-blue-1 cursor-pointer"
                to="/HeartDiseasePrediction/2"
              >
                Questions
              </Link>
              <li className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 text-gray-400 cursor-not-allowed">
                Results
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:w-3/4 md:my-0 md:justify-between shadow-2xl bg-white">
            <div className="pt-4 w-full md:pt-8 ">
              <ErrorNav message={error} />
            </div>

            <div className="flex w-full p-8  justify-between ">
              <h1 className="w-3/5 text-xl font-normal  text-blue-1  ">
                Total cholesterol level (mg/dL):
              </h1>
              <div className="flex justify-evenly  w-2/5 md:h-full text-center items-center ">
                <Input
                  className="flex rounded-md shadow-lg w-2/3 text-center  text-xl text-semibold text-gray-400 ring-2 ring-gray-300 focus:text-black"
                  onChange={(e) => onChange(e, "totChol")}
                  value={state.totChol}
                  type={"number"}
                  placeholder="0"
                />
              </div>
            </div>
            <div className="flex w-full p-8 justify-between ">
              <h1 className="w-3/5 text-xl font-normal  text-blue-1  ">
                Systolic blood pressure (mmHg):
              </h1>
              <div className="flex justify-evenly  w-2/5 md:h-full text-center items-center ">
                <Input
                  className="flex rounded-md shadow-lg w-2/3 text-center  text-xl text-semibold text-gray-400 ring-2 ring-gray-300 focus:text-black"
                  onChange={(e) => onChange(e, "sysBP")}
                  value={state.sysBP}
                  type={"number"}
                  placeholder="0"
                />
              </div>
            </div>
            <div className="flex w-full p-8 justify-between ">
              <h1 className="w-3/5 text-xl font-normal  text-blue-1  ">
                Body Mass Index (BMI) :
              </h1>
              <div className="flex justify-evenly  w-2/5 md:h-full text-center items-center ">
                <Input
                  className="flex rounded-md shadow-lg w-2/3 text-center  text-xl text-semibold text-gray-400 ring-2 ring-gray-300 focus:text-black"
                  onChange={(e) => onChange(e, "BMI")}
                  value={state.BMI}
                  type={"number"}
                  placeholder="0"
                />
              </div>
            </div>
            <div className="flex w-full p-8 justify-between ">
              <h1 className="w-3/5 text-xl font-normal  text-blue-1  ">
                Heart Rate (bpm) :
              </h1>
              <div className="flex justify-evenly  w-2/5 md:h-full text-center items-center ">
                <Input
                  className="flex rounded-md shadow-lg w-2/3 text-center  text-xl text-semibold text-gray-400 ring-2 ring-gray-300 focus:text-black"
                  onChange={(e) => onChange(e, "heartRate")}
                  value={state.heartRate}
                  type={"number"}
                  placeholder="0"
                />
              </div>
            </div>
            <div className="flex w-full p-8 justify-between ">
              <h1 className="w-3/5 text-xl font-normal  text-blue-1  ">
                Glucose level (mg/dL) :
              </h1>
              <div className="flex justify-evenly w-2/5   ">
                <Input
                  className="rounded-md shadow-lg w-2/3 h-full text-center text-xl text-semibold text-gray-400 ring-2 ring-gray-300 focus:text-black"
                  onChange={(e) => onChange(e, "glucose")}
                  value={state.glucose}
                  type={"number"}
                  placeholder="0"
                />
              </div>
            </div>

            <div className="flex justify-between w-full items-center  p-8 ">
              <Link
                to="/HeartDiseasePrediction/2"
                className="flex items-center text-xl font-semibold leading-6 py-2 pr-2 rounded-md  text-blue-1 hover:bg-blue-100 hover:ring-2"
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

export default HeartDiseasePredictionPg3;
