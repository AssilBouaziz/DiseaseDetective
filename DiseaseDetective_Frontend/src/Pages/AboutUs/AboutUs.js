import React from "react";
import NavBar from "../../Components/NavBar/NavBar";

function AboutUs() {
  return (
    <div className="bg-cover bg-center bg-homePage  w-full bg-blue-1">
      <NavBar />
      <div className="flex flex-col justify-center w-full px-2 md:px-20  bg-blue-50">
        <div className="flex flex-col justify-between  w-full pt-6 md:m-20 space-y-8 bg-blue-50">
          <p className="text-4xl text-start   text-blue-1 ">
            What is Disease Detective?
          </p>
          <p className="text-xl md:text-lg font-normal text-justify text-black md:w-1/2 ">
            Disease Detective is an intelligent tool for symptom checking made
            for you. Each time you go through it and add your symptoms, we
            adjust the interview to your state. It is possible thanks to our
            AI-based inference engine connected with our meticulous base of
            medical knowledge.
          </p>
        </div>
        <div className="flex flex-col justify-between  w-full pt-6 md:m-20 md:mt-0 space-y-8 bg-blue-50">
          <p className="text-4xl text-start   text-blue-1 ">
            How does it work?
          </p>
          <p className="text-xl md:text-lg font-normal text-justify text-black md:w-1/2 ">
            Disease detective is really easy to use. Start by choosing the
            symptoms that are bothering you right now. Then, just like with a
            real-life physician, answer several questions to help us understand
            your condition better.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
