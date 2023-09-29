import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createServey, getPredection } from "../../Api/Api";
import NavBar from "../../Components/NavBar/NavBar";
import { clearData } from "../../Redux/Action";

function HeartDiseasePredictionPg5() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const form = useSelector((state) => state.formHeart);
  // const [error, seterror] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [prediction, setPrediction] = useState(null);
  const onSubmit =   async () => {
    
    const response = await getPredection(
      JSON.stringify({
        sexe: parseInt(form.data["sex"]),
        age: parseInt(form.data["age"]),
        cigarettes_per_day: parseInt(form.data["nbCigerette"]),
        blood_pressure_meds: parseInt(form.data["BPMeds"]),
        stroke_prevalence: parseInt(form.data["prevalentStroke"]),
        hypertension_prevalence: parseInt(form.data["prevalentHyp"]),
        diabetes: parseInt(form.data["diabetes"]),
        cholesterol: parseInt(form.data["totChol"]),
        systolic_blood_pressure: parseInt(form.data["sysBP"]),
        bmi: parseInt(form.data["BMI"]),
        heart_beat: parseInt(form.data["heartRate"]),
        glucose_levels: parseInt(form.data["glucose"]),
      })
    );
    console.log("response",response);
    setPrediction(response["prediction"]);
    const response2 = await createServey(
      JSON.stringify({
        userid: auth.user._id,
        sexe: parseInt(form.data["sex"]),
        age: parseInt(form.data["age"]),
        cigarettes_per_day: parseInt(form.data["nbCigerette"]),
        blood_pressure_meds: parseInt(form.data["BPMeds"]),
        stroke_prevalence: parseInt(form.data["prevalentStroke"]),
        hypertension_prevalence: parseInt(form.data["prevalentHyp"]),
        diabetes: parseInt(form.data["diabetes"]),
        cholesterol: parseInt(form.data["totChol"]),
        systolic_blood_pressure: parseInt(form.data["sysBP"]),
        bmi: parseInt(form.data["BMI"]),
        heart_beat: parseInt(form.data["heartRate"]),
        glucose_levels: parseInt(form.data["glucose"]),
        result: parseInt(response["prediction"]),
      })
    );
    if (response2.status === 201) {
      dispatch(clearData());
      setIsLoading(false);
      
    } 
  };
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      if (
        form.data["age"] &&
        form.data["sex"] &&
        form.data["smooker"] &&
        form.data["nbCigerette"] &&
        form.data["diabetes"] &&
        form.data["prevalentStroke"] &&
        form.data["BPMeds"] &&
        form.data["prevalentHyp"] &&
        form.data["totChol"] &&
        form.data["sysBP"] &&
        form.data["BMI"] &&
        form.data["heartRate"] &&
        form.data["glucose"]
      ) {
        onSubmit();
      } else {
        navigate("/HeartDiseasePrediction");
      }
    }
  });
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
                className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4 md:border-b-0 border-green-700 text-blue-1 cursor-pointer"
                to="/HeartDiseasePrediction/1"
              >
                Patient
              </Link>
              <Link
                className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4 md:border-b-0 border-green-700 text-blue-1 cursor-pointer"
                to="/HeartDiseasePrediction/2"
              >
                Questions
              </Link>
              <li className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4 md:border-b-0 border-green-900 text-blue-1 cursor-default">
                Results
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:w-3/4 md:my-0 md:justify-between shadow-2xl bg-white">
            {isLoading ? (
              <div className="flex flex-col w-full p-32 items-center justify-center overflow-hidden text-center   ">
                <svg
                  aria-hidden="true"
                  className="w-16 h-16  justify-center text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="text-2xl p-4">Loading...</span>
              </div>
            ) : (
              <div className=" flex items-center justify-center p-10">
                {prediction === "0" ? (
                  <div className="w-full  items-center justify-center overflow-hidden text-center p-8  ">
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
                    <p className="text-2xl pb-2 justify-center">
                      <b>Congratulations ! </b>
                    </p>
                    <p className="text-xl m-16 ">
                      We predict that you have a low risk of developing health
                      problems in the next 10 years. Keep up the good work!
                    </p>
                    <div className="flex justify-start py-6">
                      <Link
                        to="/"
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
                        Home Page
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="w-full  items-center justify-center overflow-hidden text-center md:p-8  ">
                    <div className="flex justify-center pb-3">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-14 sm:w-14">
                        <svg
                          className="h-8 w-8 text-red-600 rou "
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
                    </div>
                    <p className="text-2xl pb-2 justify-center">
                      <b>Bad News ! </b>
                    </p>
                    <p className="text-xl m-16 text-justify ">
                      We're sorry to inform you that We predict that you have a
                      high risk of developing health problems in the next 10
                      years. We recommend that you speak with your healthcare
                      provider to discuss strategies for reducing your risk
                    </p>
                    <div className="flex justify-between py-6">
                      <Link
                        to="/"
                        className="flex items-center text-xl font-semibold leading-6 p-2 rounded-md  text-blue-1 hover:bg-blue-100 hover:ring-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <p className="text-xl font-semibold leading-6 pl-3  rounded-md  text-blue-1">
                          Home Page
                        </p>
                      </Link>
                      <Link
                        to="/doctors"
                        className="flex items-center text-xl font-semibold leading-6 p-2  rounded-md  text-blue-1 hover:bg-blue-100 hover:ring-2"
                      >
                        <p className="text-xl font-semibold leading-6 pr-3  rounded-md  text-blue-1">
                          Contact Doctors
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeartDiseasePredictionPg5;
