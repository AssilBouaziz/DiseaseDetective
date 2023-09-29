import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ErrorNav from "../../Components/Alert/ErrorNav";
import Button from "../../Components/Button/Button";
import NavBar from "../../Components/NavBar/NavBar";
import { updateData } from "../../Redux/Action";
function HeartDiseasePredictionPg3() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formHeart);
  const [error, seterror] = useState();
  const [state, setState] = useState({
    diabetes: form.data["diabetes"],
    prevalentStroke: form.data["prevalentStroke"],
    prevalentHyp: form.data["prevalentHyp"],
    BPMeds: form.data["BPMeds"],
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
      state["diabetes"] &&
      state["prevalentStroke"] &&
      state["BPMeds"] && 
      state["prevalentHyp"]
    ) {
      navigate("/HeartDiseasePrediction/3");
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
              <Link className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 border-green-700 text-blue-1 cursor-pointer"
              to="/HeartDiseasePrediction">
                Introduction
              </Link>
              <Link className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 border-green-700 text-blue-1 cursor-pointer"
              to="/HeartDiseasePrediction/1">
                Patient
              </Link>
              <Link className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 border-green-900 text-blue-1 cursor-pointer"
              to="/HeartDiseasePrediction/3">
                Questions
              </Link>
              <li className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 text-gray-400 cursor-not-allowed">
                Results
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:w-3/4 my-8 md:my-0 md:justify-between shadow-2xl bg-white">
            <div className=" w-full md:pt-8 ">
              <ErrorNav message={error} />
            </div>
            
            <div className="flex w-full p-8 justify-between items-center ">
              <h1 className="w-3/5 text-xl font-normal  text-blue-1  ">
                Do you have Diabetes ?
              </h1>
              <div className="flex justify-evenly w-2/5   ">
                <div
                  className={
                    state.diabetes && state.diabetes === "1"
                      ? "flex rounded-lg w-1/3 md:w-1/4 md:h-12 text-2xl  text-green-600 ring-2 font-semibold  ring-green-600"
                      : "flex rounded-lg w-1/3 md:w-1/4  md:h-12 text-2xl items-center justify-center font-normal text-blue-1 hover:text-green-600 border-2 hover:ring-2 hover:font-semibold  ring-green-600"
                  }
                  for="smookerYes"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="diabetesYes"
                    name="diabetes"
                    value="1"
                    onChange={(e) => onChange(e, "diabetes")}
                  />
                  <label
                    className="h-full w-full text-center py-1 "
                    for="diabetesYes"
                  >
                    Yes
                  </label>
                </div>
                <div
                  className={
                    state.diabetes && state.diabetes === "0"
                      ? "flex rounded-lg w-1/3 md:w-1/4 md:h-12  text-2xl  text-red-600  ring-2 font-semibold ring-red-600"
                      : "flex rounded-lg w-1/3 md:w-1/4 md:h-12  text-2xl font-normal text-blue-1 hover:text-red-600 border-2 hover:ring-2 hover:font-semibold ring-red-600"
                  }
                  for="diabetesNo"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="diabetesNo"
                    name="diabetes"
                    value="0"
                    onChange={(e) => onChange(e, "diabetes")}
                  />

                  <label
                    className=" h-full w-full text-center py-1"
                    for="diabetesNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex w-full p-8 justify-between items-center">
              <h1 className="w-3/5 text-xl font-normal  text-blue-1  ">
                Do you had Prevalent Stroke ?
              </h1>
              <div className="flex justify-evenly w-2/5   ">
                <div
                  className={
                    state.prevalentStroke && state.prevalentStroke === "1"
                      ? "flex rounded-lg w-1/3 md:w-1/4 md:h-12 text-2xl  text-green-600 ring-2 font-semibold  ring-green-600"
                      : "flex rounded-lg w-1/3 md:w-1/4 md:h-12 text-2xl items-center justify-center font-normal text-blue-1 hover:text-green-600 border-2 hover:ring-2 hover:font-semibold  ring-green-600"
                  }
                  for="prevalentStrokeYes"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="prevalentStrokeYes"
                    name="prevalentStroke"
                    value="1"
                    onChange={(e) => onChange(e, "prevalentStroke")}
                  />
                  <label
                    className="h-full w-full text-center py-1 "
                    for="prevalentStrokeYes"
                  >
                    Yes
                  </label>
                </div>
                <div
                  className={
                    state.prevalentStroke && state.prevalentStroke === "0"
                      ? "flex rounded-lg w-1/3 md:w-1/4 md:h-12 text-2xl  text-red-600  ring-2 font-semibold ring-red-600"
                      : "flex rounded-lg w-1/3 md:w-1/4 md:h-12 text-2xl font-normal text-blue-1 hover:text-red-600 border-2 hover:ring-2 hover:font-semibold ring-red-600"
                  }
                  for="prevalentStrokeNo"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="prevalentStrokeNo"
                    name="prevalentStroke"
                    value="0"
                    onChange={(e) => onChange(e, "prevalentStroke")}
                  />

                  <label
                    className=" h-full w-full text-center py-1"
                    for="prevalentStrokeNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex w-full p-8 justify-between items-center">
              <h1 className="w-3/5 text-xl font-normal  text-blue-1  ">
                Are you hypertensive ?
              </h1>
              <div className="flex justify-evenly w-2/5    ">
                <div
                  className={
                    state.prevalentHyp && state.prevalentHyp === "1"
                      ? "flex rounded-lg w-1/3 md:w-1/4 md:h-12 text-2xl  text-green-600 ring-2 font-semibold  ring-green-600"
                      : "flex rounded-lg w-1/3 md:w-1/4 md:h-12 text-2xl items-center justify-center font-normal text-blue-1 hover:text-green-600 border-2 hover:ring-2 hover:font-semibold  ring-green-600"
                  }
                  for="prevalentHypYes"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="prevalentHypYes"
                    name="prevalentHyp"
                    value="1"
                    onChange={(e) => onChange(e, "prevalentHyp")}
                  />
                  <label
                    className="h-full w-full text-center py-1 "
                    for="prevalentHypYes"
                  >
                    Yes
                  </label>
                </div>
                <div
                  className={
                    state.prevalentHyp && state.prevalentHyp === "0"
                      ? "flex rounded-lg w-1/3 md:w-1/4 md:h-12 text-2xl  text-red-600  ring-2 font-semibold ring-red-600"
                      : "flex rounded-lg w-1/3 md:w-1/4 md:h-12 text-2xl font-normal text-blue-1 hover:text-red-600 border-2 hover:ring-2 hover:font-semibold ring-red-600"
                  }
                  for="prevalentHypNo"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="prevalentHypNo"
                    name="prevalentHyp"
                    value="0"
                    onChange={(e) => onChange(e, "prevalentHyp")}
                  />

                  <label
                    className=" h-full w-full text-center py-1"
                    for="prevalentHypNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex w-full p-8 justify-between items-center">
              <h1 className="w-3/5 text-xl font-normal  text-blue-1  ">
              have you been on blood pressure medication ?
              </h1>
              <div className="flex justify-evenly w-2/5  ">
                <div
                  className={
                    state.BPMeds && state.BPMeds === "1"
                      ? "flex rounded-lg w-1/3 md:w-1/4 md:h-12text-2xl  text-green-600 ring-2 font-semibold  ring-green-600"
                      : "flex rounded-lg w-1/3 md:w-1/4 md:h-12 text-2xl items-center justify-center font-normal text-blue-1 hover:text-green-600 border-2 hover:ring-2 hover:font-semibold  ring-green-600"
                  }
                  for="BPMedsYes"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="BPMedsYes"
                    name="BPMeds"
                    value="1"
                    onChange={(e) => onChange(e, "BPMeds")}
                  />
                  <label
                    className="h-full w-full text-center py-1 "
                    for="BPMedsYes"
                  >
                    Yes
                  </label>
                </div>
                <div
                  className={
                    state.BPMeds && state.BPMeds === "0"
                      ? "flex rounded-lg w-1/3 md:w-1/4 md:h-12 text-2xl  text-red-600  ring-2 font-semibold ring-red-600"
                      : "flex rounded-lg w-1/3 md:w-1/4 md:h-12 text-2xl font-normal text-blue-1 hover:text-red-600 border-2 hover:ring-2 hover:font-semibold ring-red-600"
                  }
                  for="BPMedsNo"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="BPMedsNo"
                    name="BPMeds"
                    value="0"
                    onChange={(e) => onChange(e, "BPMeds")}
                  />

                  <label
                    className=" h-full w-full text-center py-1"
                    for="BPMedsNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between w-full items-center px-10 p-8 ">
              <Link
                to="/HeartDiseasePrediction/1"
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

export default HeartDiseasePredictionPg3;
