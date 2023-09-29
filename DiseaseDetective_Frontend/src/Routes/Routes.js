import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes as ComponentRoutes,
} from "react-router-dom";
import HeartDiseasePredictionPg1 from "../Pages/HeartDiseasePrediction/HeartDiseasePredictionPg1";
import HeartDiseasePredictionPg2 from "../Pages/HeartDiseasePrediction/HeartDiseasePredictionPg2";
import HeartDiseasePredictionPg3 from "../Pages/HeartDiseasePrediction/HeartDiseasePredictionPg3";
import HeartDiseasePredictionPg4 from "../Pages/HeartDiseasePrediction/HeartDiseasePredictionPg4";
import HeartDiseasePredictionPg5 from "../Pages/HeartDiseasePrediction/HeartDiseasePredictionPg5";
import HomePage from "../Pages/HomePage/HomePage";
import Password from "../Pages/Password/Password";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./Privateroute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import DoctorsUserPage from "../Pages/DoctorsPage/DoctorsUserPage";
import DoctorsAdminPage from "../Pages/DoctorsPage/DoctorsAdminPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AboutUs from "../Pages/AboutUs/AboutUs";
function Routes(props) {
  const [token] = useState(null);
  const auth = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <ComponentRoutes>
        <Route path="/" element={<PublicRoute component={<HomePage />} />} />
        <Route
          path="/home"
          element={<PrivateRoute component={<HomePage token={token} />} />}
        />
        <Route
          path="/signup"
          element={<PublicRoute component={<SignUp />} />}
        />
        <Route
          path="/signin"
          element={<PublicRoute component={<SignIn />} />}
        />
        <Route
          path="/password"
          element={<PublicRoute component={<Password />} />}
        />
        <Route
          path="/HeartDiseasePrediction"
          element={
            <PrivateRoute
              component={<HeartDiseasePredictionPg1 token={token} />}
            />
          }
        />
        <Route
          path="/HeartDiseasePrediction/1"
          element={
            <PrivateRoute
              component={<HeartDiseasePredictionPg2 token={token} />}
            />
          }
        />
        <Route
          path="/HeartDiseasePrediction/2"
          element={
            <PrivateRoute
              component={<HeartDiseasePredictionPg3 token={token} />}
            />
          }
        />
        <Route
          path="/HeartDiseasePrediction/3"
          element={
            <PrivateRoute
              component={<HeartDiseasePredictionPg4 token={token} />}
            />
          }
        />
         <Route
          path="/HeartDiseasePrediction/Results"
          element={
            <PrivateRoute
              component={<HeartDiseasePredictionPg5 token={token} />}
            />
          }
        />
        <Route
          path="/profile/:id"
          element={
            <PrivateRoute
              component={<ProfilePage token={token} />}
            />
          }
        />
        {( auth.user?.role === "admin") ?<Route
          path="/doctors"
          element={
            <PrivateRoute
              component={<DoctorsAdminPage token={token} />}
            />
          }
        /> :<Route
        path="/doctors"
        element={
          <PrivateRoute
            component={<DoctorsUserPage token={token} />}
          />
        }
      />}
        <Route
        path="/dashboard"
        element={
          <PrivateRoute
            component={<Dashboard token={token} />}
          />
        }
      />
      <Route
        path="/aboutus"
        element={<PrivateRoute
          component={<AboutUs token={token} />}
        />}
      />
      </ComponentRoutes>
    </BrowserRouter>
  );
}
export { Routes };
