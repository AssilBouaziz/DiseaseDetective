import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import TabDoctors from "../../Components/Tableau/TabDoctors";

function DoctorsUserPage() {
  return (
    <div className=" w-auto bg-white">
      <div className=" bg-cover bg-center bg-homePage   bg-blue-1">
        <NavBar />
        <div className="flex justify-center w-full">
        <div className="flex w-full p-20 bg-blue-50 ">
        <TabDoctors role={"user"}/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsUserPage;
