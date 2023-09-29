import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import PieChart from "../../Components/Statistique/PieChart";
import { allTimeStat, dailyStat, monthlyStat, weeklyStat } from "../../Api/Api";
import LineChart from "../../Components/Statistique/LineChart";

function Dashboard() {
  const [DailyStat, setDailyStat] = useState([]);
  const [WeeklyStat, setWeeklyStat] = useState([]);
  const [MonthlyStat, setMonthlyStat] = useState([]);
  const [AllTimeStat, setAllTimeStat] = useState([]);
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState("Weekly Statistics");
  const categories = [
    "Daily Statistics",
    "Monthly Statistics",
    "AllTime Statistics",
  ];
  useEffect(() => {
    getdailyStat();
    getWeeklyStat();
    getMonthlyStat();
    getAllTimeStat();
  }, []);
  useEffect(() => {
    switch (filter) {
      case "Daily Statistics":
        setdata(DailyStat);
        break;
      case "Weekly Statistics":
        setdata(WeeklyStat);
        break;
      case "Monthly Statistics":
        setdata(MonthlyStat);
        break;
      case "AllTime Statistics":
        setdata(AllTimeStat);
        break;

      default:
        break;
    }
  }, [filter, DailyStat, WeeklyStat, MonthlyStat, AllTimeStat]);

  const getdailyStat = async () => {
    const response = await dailyStat(
      JSON.stringify({
        today: new Date(),
      })
    );
    if (response.status === 200) {
      setDailyStat(response.data);
    }
  };
  const getWeeklyStat = async () => {
    const response = await weeklyStat(
      JSON.stringify({
        today: new Date(),
      })
    );
    if (response.status === 200) {
      setWeeklyStat(response.data);
      setdata(response.data);
    }
  };
  const getMonthlyStat = async () => {
    const response = await monthlyStat(
      JSON.stringify({
        today: new Date(),
      })
    );
    if (response.status === 200) {
      setMonthlyStat(response.data);
    }
  };
  const getAllTimeStat = async () => {
    const response = await allTimeStat(
      JSON.stringify({
        today: new Date(),
      })
    );
    if (response.status === 200) {
      setAllTimeStat(response.data);
    }
  };
  const handleChange = (event) => {
    setfilter(event.target.value);
  };
  const AllTimedata = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "Number of people",
        data: [
          data.surveysPos?.reduce((a, b) => a + b),
          data.surveysNega?.reduce((a, b) => a + b),
        ],
        backgroundColor: ["rgba(75, 192, 192, 0.4)", "rgba(255, 99, 132, 0.4)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-cover bg-center bg-homePage  w-full bg-blue-1">
      <NavBar />
      <div className="flex flex-col justify-center w-full px-2 md:px-20  bg-blue-50">
        <div className="flex  justify-between  w-full pt-6  bg-blue-50">
          <p className="text-xl text-start   text-blue-1 ">
            Executive Dashboard
          </p>
          <div className=" rounded-sm md:w-1/4 ">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={filter}
              onChange={handleChange}
            >
              <option value="Weekly Statistics">Weekly Statistics</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className=" md:flex md:justify-between py-6 space-y-3">
          <div className="flex md:flex-col justify-center items-center md:w-64 md:justify-start md:p-4 shadow-md rounded-md bg-white">
            <p className="flex md:p-4 md:pb-0 text-xl h-full md:h-auto items-center">
              Number of account :
            </p>
            <p className="flex h-40 justify-center items-center  p-4 text-7xl ">
              {data.accountsCreated?.reduce((a, b) => a + b)}
            </p>
          </div>
          <div className="flex md:flex-col justify-center items-center md:w-64 md:justify-start md:p-4 shadow-md rounded-md bg-white">
            <p className="flex md:p-4 md:pb-0 text-xl h-full md:h-auto items-center">
              Number of visitors :
            </p>
            <p className="flex h-40 justify-center items-center  p-4 text-7xl ">
              {data.connections?.reduce((a, b) => a + b)}
            </p>
          </div>
          <div className="flex md:flex-col justify-center items-center md:w-64 md:justify-start md:p-4 shadow-md rounded-md bg-white">
            <p className="flex md:p-4 md:pb-0 text-xl h-full md:h-auto items-center">
              Number of surveys :
            </p>
            <p className="flex h-40 justify-center items-center  p-4 text-7xl ">
              {Number(data.surveysNega?.reduce((a, b) => a + b)) +
                Number(data.surveysPos?.reduce((a, b) => a + b))}
            </p>
          </div>
          <div className="p-4 shadow-md rounded-md bg-white">
            <p className="p-4 pb-0 text-xl">
              Predection of 10 year risk of CHD :
            </p>
            <div className="flex h-52 justify-center  ">
              <PieChart className={"p-2"} data={AllTimedata} />
            </div>
          </div>
        </div>
        <div className="p-4 shadow-md rounded-md bg-white mb-8 ">
          <LineChart className={""} data={WeeklyStat} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
