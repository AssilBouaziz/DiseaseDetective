import React, { useEffect, useState } from "react";
import SelectMenus from "../DropDown/SelectMenus";
import {
  getDoctorsSpecialities,
  getDoctors,
  deleteDoctor,
} from "../../Api/Api";
import Button from "../Button/Button";
import AddDoctor from "../Doctor/AddDoctor";
import EditDoctor from "../Doctor/EditDoctor";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/Input";
import { searchProduct } from "../../Redux/Action";

function TabDoctors(props) {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const [update, setUpdate] = useState(false);
  const [categories, setCategories] = useState([]);
  const [TemporeryData, setTemporeryData] = useState([]);
  const [doctor, setDoctor] = useState();
  const [doctors, setDoctors] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const handleSpecialityChange = (value) => {
    setSelectedSpeciality(value);
  };
  const getCategories = async () => {
    const response = await getDoctorsSpecialities();
    if (response.status === 200) {
      setCategories(response.data);
    }
  };
  const getAllDoctors = async () => {
    const response = await getDoctors();
    if (response.status === 200) {
      setDoctors(response.data);
      setUpdate(false);
      setTemporeryData(response.data);
    }
  };

  const Delete = async (id) => {
    const response = await deleteDoctor(id);
    if (response.status === 200) {
      getAllDoctors();
      setUpdate(true);
    }
  };
  const [searchTerm, setSearchTerm] = useState("");
  const onChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchProduct(doctors, e.target.value, selectedSpeciality));
  };
  const [PopUpDelete, setPopUpDelete] = useState(false);
  const [PopUpEditDoctor, setPopUpEditDoctor] = useState(false);
  const [PopUpAddDoctor, setPopUpAddDoctor] = useState(false);
  const closePopUp = () => {
    setPopUpEditDoctor(false);
    setPopUpAddDoctor(false);
    setUpdate(true);
  };
  useEffect(() => {
    getCategories();
    getAllDoctors();
  }, [update]);
  useEffect(() => {
    setTemporeryData(search.data);
  }, [search.data]);
  return (
    <div className="relative w-full overflow-x-auto shadow-md rounded-lg">
      {PopUpDelete && (
        <div className="fixed z-10  inset-0 bg-opacity-75 overflow-y-auto">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className=" flex relative  items-center justify-center  text-center  min-h-screen">
            <div className="bg-white md:w-1/4  rounded-lg overflow-hidden shadow-xl p-4">
              <div className="flex justify-center ">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-14 sm:w-14">
                  <svg
                    className="h-8 w-8 text-red-600 rou "
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
                </div>
              </div>
              <p className="py-6 text-xl justify-center">
                <b>Are you sure you want to delete this doctor ? </b>
              </p>
              <div className="flex  justify-evenly">
                <Button
                  onClick={() => {
                    setPopUpDelete(false);
                    setDoctor();
                  }}
                  name={"Cancel"}
                  className="group relative flex w-28 justify-center rounded-md bg-gray-400 py-2 px-3 text-sm font-bold text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-450"
                />
                <Button
                  onClick={() => {
                    setPopUpDelete(false);
                    Delete(doctor._id);
                  }}
                  name={"Delete"}
                  className="group relative flex w-28 justify-center rounded-md bg-red-600 py-2 px-3 text-sm font-bold text-white hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-450"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {PopUpEditDoctor && (
        <div className="fixed z-10  inset-0 bg-opacity-75 overflow-y-auto">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className=" flex relative  items-center justify-center  text-center  min-h-screen">
            <div className="bg-white w-full md:w-1/4  rounded-lg overflow-hidden shadow-xl p-4">
              <EditDoctor doctor={doctor} closePopUpDoctor={closePopUp} />
            </div>
          </div>
        </div>
      )}
      {PopUpAddDoctor && (
        <div className="fixed z-10  inset-0 bg-opacity-75 overflow-y-auto">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className=" flex relative  items-center justify-center  text-center  min-h-screen">
            <div className="bg-white w-full md:w-1/4  rounded-lg overflow-hidden shadow-xl p-4">
              <AddDoctor categories={categories} doctor={doctor} closePopUpDoctor={closePopUp} />
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between p-4">
        <SelectMenus
          categories={categories}
          data={doctors}
          onChange={handleSpecialityChange}
        />
        <div className="flex items-center pl-8">
          {props.role === "admin" && (
            <Button
              name="Add"
              onClick={() => {
                setPopUpAddDoctor(true);
              }}
              className="border-2 rounded-md p-2 md:py-2 md:px-5 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 "
            />
            
          )}
          <div className="relative ml-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <Input
              type={"text"}
              placeholder={"Search for doctor ..."}
              onChange={(e) => onChange(e)}
              value={searchTerm}
              className="block w-0 hover:w-auto md:hover:w-80 md:w-80 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <table className=" md:w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
        <thead className="text-base text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Doctor name
            </th>
            <th scope="col" className="px-6 py-3">
              speciality
            </th>
            <th scope="col" className="px-6 py-3">
              address
            </th>
            <th scope="col" className="px-6 py-3">
              Phone number
            </th>
            {props.role === "admin" && (
              <>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="text-sm text-center text-gray-700 uppercase bg-gray-50 ">
          {TemporeryData.map((el, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 "
            >
              <th
                scope="row"
                className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {el.name}
              </th>
              <td className="px-6 py-5">{el.speciality}</td>
              <td className="px-6 py-5">{el.address}</td>
              <td className="px-6 py-5">{el.phoneNumber}</td>
              {props.role === "admin" && (
                <>
                  <td className="px-6 py-5">
                    <Button
                      name="Edit"
                      onClick={() => {
                        setPopUpEditDoctor(true);
                        setDoctor(el);
                      }}
                      className="border-2 rounded-md py-2 px-5 text-lg font-semibold bg-blue-500 text-white hover:bg-blue-700 "
                    />
                  </td>
                  <td className="px-6 py-5">
                    <Button
                      name="Delete"
                      onClick={() => {
                        setPopUpDelete(true);
                        setDoctor(el);
                      }}
                      className="border-2 rounded-md py-2 px-5 text-lg font-semibold bg-red-600 text-white hover:bg-red-700 "
                    />
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabDoctors;
