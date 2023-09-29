import { useState } from "react";
import { updateDoctor } from "../../Api/Api";
import Button from "../Button/Button";
import Input from "../Input/Input";

function EditDoctor(props) {
  const [state, setState] = useState({
    name: props.doctor.name,
    speciality: props.doctor.speciality,
    address: props.doctor.address,
    phoneNumber: props.doctor.phoneNumber,
  });
  const [error, seterror] = useState();
  const onChange = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value,
    });
  };
  const onSubmit = async () => {
    const response = await updateDoctor(props.doctor._id,
      JSON.stringify({
        name: state.name,
        speciality: state.speciality,
        address: state.address,
        phoneNumber: state.phoneNumber,
      })
    );
    if (response.status === 200) {
      props.closePopUpDoctor();
    } else {
      seterror(response.message);
    }
  };

  return (
        <div className=" md:w-full  max-w-2xl  space-y-8 md:space-y-6 p-6 rounded-3xl bg-white ">
          {error ? (
            <div className="mx-auto flex h-12 w-72 flex-shrink-0 items-center justify-center rounded-full bg-red-100  ">
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
              Edit Doctor
            </h2>
          </div>
          <div className="space-y-5 rounded-md shadow-sm">
            <Input
              className={
                "relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"
              }
              placeholder={"Doctor Name"}
              onChange={(e) => onChange(e, "name")}
              value={state.name}
            />
            <Input
              placeholder={"speciality"}
              onChange={(e) => onChange(e, "speciality")}
              value={state.speciality}
              className={
                "relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"
              }
            />
            <Input
              placeholder={"address"}
              onChange={(e) => onChange(e, "address")}
              value={state.address}
              className={
                "relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"
              }
            />
            <Input
            type={"number"}
              placeholder={"phoneNumber"}
              onChange={(e) => onChange(e, "phoneNumber")}
              value={state.phoneNumber}
              className={
                "relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"
              }
            />
          </div>


          <div className="flex  justify-evenly">
                <Button
                  onClick={() => props.closePopUpDoctor()
                  }
                  name={"Cancel"}
                  className="group relative flex w-28 justify-center rounded-md bg-gray-400 py-2 px-3 text-sm font-bold text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-450"
                />
                <Button
                  onClick={() => {onSubmit() }}
                  name={"Edit"}
                  className="group relative flex w-28 justify-center rounded-md bg-green-500 py-2 px-3 text-sm font-bold text-white hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-450"
                />
              </div>
        </div>
  );
}
export default EditDoctor;
