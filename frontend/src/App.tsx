import { Routes, Route, BrowserRouter } from "react-router";
import { FrontEndRoutes } from "./pages/route";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import React from "react";
import { Home } from "./pages/Home";
import SignUp from "./pages/SignUp";
import ChallengeScreen from "./pages/ChallengeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={FrontEndRoutes.Home} element={<Home />} />
        <Route path={FrontEndRoutes.Dashboard} element={<Dashboard />} />
        <Route path={FrontEndRoutes.Login} element={<Login />} />
        <Route path={FrontEndRoutes.SignUp} element={<SignUp />} />
        <Route path={FrontEndRoutes.ChallengeScreen} element={<ChallengeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
