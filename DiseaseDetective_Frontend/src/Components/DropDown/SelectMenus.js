import { useState } from "react";
import { useDispatch } from "react-redux";
import { SameCategoryProduct } from "../../Redux/Action";

function SelectMenus(props) {
  const [selectedOption, setSelectedOption] = useState("Rien");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    dispatch(SameCategoryProduct(props.data, event.target.value));
    props.onChange(event.target.value);
  };
  return (
    <div className=" rounded-sm w ">
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Chose a speciality</option>
        {props.categories.map((el, index) => (
          <option value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectMenus;
