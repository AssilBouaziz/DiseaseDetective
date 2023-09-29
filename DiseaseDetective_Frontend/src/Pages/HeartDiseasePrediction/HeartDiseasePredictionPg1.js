import React, { useEffect } from "react";
import { Link, useLocation} from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import HeartDiseasePredictionPng from "../../Assets/HeartDiseasePrediction.png";

function HeartDiseasePredictionPg1() {
  const location = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 90);
  }, [location]);
  return (
    <div className="bg-cover bg-center bg-homePage   w-full bg-blue-1">
      <NavBar />
      <div className="md:flex justify-center w-full   bg-blue-50">
        <div className="p-6  md:flex justify-between md:w-3/5  md:m-20 ">
          <div className=" md:w-1/5  ">
            <ul className="flex pb-6  md:flex-col md:ml-6 ">
              <li className=" p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 border-green-900 text-blue-1 cursor-default">
                Introduction
              </li>
              <li className="p-2 md:pl-3 text-lg font-semibold border-b-4 md:border-l-4  md:border-b-0 text-gray-400 cursor-not-allowed">
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
          <div className="flex flex-col md:w-3/4  md:justify-between shadow-2xl bg-white">
            <h1 className="flex text-3xl justify-center font-semibold leading-normal text-blue-1 p-4 md:p-10 pb-0">
              Check your Health 
            </h1>
            <div className="md:flex w-full p-6 md:p-10 md:pt-0 justify-between">
              <div className="p-10 pt-0 md:flex md:w-2/5 md:p-0 ">
                <img
                  className="mx-auto  "
                  src={HeartDiseasePredictionPng}
                  alt="Your Company"
                />
              </div>
              <div className=" md:w-1/2">
                <p className=" text-lg font-normal text-justify text-blue-1 pb-4">
                  Welcome to <b>Heart Disease </b> symptom assessment, your
                  personal disease prediction website. The information you give
                  is safe and won’t be shared
                </p>
                <p className=" text-lg font-normal text-justify text-blue-1 ">
                  <b>Note :</b> The assessment results is a predection of 10
                  year risk of coronary heart disease CHD
                </p>
              </div>
            </div>
            <div className="flex justify-end w-full items-center px-10 pb-8 ">
              <Link
                to="1"
                className="border-2  rounded-md py-2 px-5 text-lg font-semibold bg-green-600 text-white hover:bg-green-700 "
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeartDiseasePredictionPg1;
