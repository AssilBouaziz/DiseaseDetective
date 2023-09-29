import { apiUrl, headers,Predection_URL } from "../Config/config";
import STORE from "../Redux/Store";
const getToken = () => {
  return STORE.getState().auth.token;
};

const signUp = async (body) => {
  const response = await fetch(apiUrl + "signup", {
    method: "POST",
    body: body,
    headers: headers,
  });
  return response.json();
};

const signIn = async (body) => {
  const response = await fetch(apiUrl + "login", {
    method: "POST",
    body: body,
    headers: headers,
  });
  return response.json();
};
const changePassword = async (body) => {
  const response = await fetch(apiUrl + "changePassword", {
    method: "PUT",
    body: body,
    headers: headers,
  });
  return response.json();
};
const createServey = async (body) => {
  const response = await fetch(apiUrl + "servey/createServey", {
    method: "POST",
    body: body,
    headers: {
      ...headers,
      Authorization: "Bearer " + getToken(),
    },
  });
  return response.json();
};
const getAllServey = async (id) => {
  const response = await fetch(apiUrl + "servey/getServeyForeachUser/" + id, {
    method: "GET",
    headers: {
      ...headers,
      Authorization: "Bearer " + getToken(),
    },
  });
  return response.json();
};
const sendMail = async (body) => {
  const response = await fetch(apiUrl + "sendmail", {
    method: "POST",
    body: body,
    headers: {
      ...headers,
      Authorization: "Bearer " + getToken(),
    },
  });
  return response.json();
};
const getDoctorsSpecialities = async () => {
  const response = await fetch(apiUrl + "doctor/getDoctorsSpecialities", {
    method: "GET",
    headers: {
      ...headers,
      Authorization: "Bearer " + getToken(),
    },
  });
  return response.json();
};
const getDoctors = async () => {
  const response = await fetch(apiUrl + "doctor/getDoctors", {
    method: "GET",
    headers: {
      ...headers,
      Authorization: "Bearer " + getToken(),
    },
  });
  return response.json();
};
const deleteDoctor = async (id) => {
  const response = await fetch(apiUrl + "doctor/deleteDoctor/" + id, {
    method: "GET",
    headers: {
      ...headers,
      Authorization: "Bearer " + getToken(),
    },
  });
  return response.json();
};
const addDoctor = async (body) => {
  const response = await fetch(apiUrl + "doctor/addDoctor", {
    method: "POST",
    body: body,
    headers: {
      ...headers,
      Authorization: "Bearer " + getToken(),
    },
  });
  return response.json();
};
const updateDoctor = async (id, body) => {
  const response = await fetch(apiUrl + "doctor/updateDoctor/" + id, {
    method: "PUT",
    body: body,
    headers: {
      ...headers,
      Authorization: "Bearer " + getToken(),
    },
  });
  return response.json();
};
const dailyStat = async (body) => {
  const response = await fetch(apiUrl + "stat/DailyStats", {
    method: "POST",
    body: body,
    headers: {
      ...headers,
      Authorization: "Bearer " + getToken(),
    },
  });
  return response.json();
};
const allTimeStat = async (body) => {
  const response = await fetch(apiUrl + "stat/AllTimeStats", {
    method: "POST",
    body: body,
    headers: {
      ...headers,
      Authorization: "Bearer " + getToken(),
    },
  });
  return response.json();
};
const monthlyStat = async (body) => {
  const response = await fetch(apiUrl + "stat/MonthlyStats", {
    method: "POST",
    body: body,
    headers: {
      ...headers,
      Authorization: "Bearer " + getToken(),
    },
  });
  return response.json();
};
const weeklyStat = async (body) => {
  const response = await fetch(apiUrl + "stat/WeeklyStats", {
    method: "POST",
    body: body,
    headers: {
      ...headers,
      Authorization: "Bearer " + getToken(),
    },
  });
  return response.json();
};
const getPredection = async (body) => {
  const response = await fetch(Predection_URL + "predict", {
    method: "POST",
    body: body,
    headers: {
        ...headers,
        Authorization: "Bearer " + getToken(),
      },
  });
  return  response.json();
};
export {
  signUp,
  signIn,
  changePassword,
  createServey,
  getAllServey,
  sendMail,
  getDoctorsSpecialities,
  getDoctors,
  deleteDoctor,
  addDoctor,
  updateDoctor,
  dailyStat,
  allTimeStat,
  monthlyStat,
  weeklyStat,
  getPredection,
};
