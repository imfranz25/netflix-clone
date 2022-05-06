import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
//PAGES
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// STYLES
import "./css/App.scss";

function App() {
  const [isAuth, setAuth] = useState(false);

  const SetBGDashboard = () => {
    const location = useLocation();
    return location.pathname === "/dashboard";
  };

  return (
    <div className={SetBGDashboard && "app"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route
          path="/dashboard"
          element={<Dashboard isAuth={isAuth} setAuth={setAuth} />}
        />
      </Routes>
    </div>
  );
}

export default App;
