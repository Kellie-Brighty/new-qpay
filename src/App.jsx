import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Exchangers from "./pages/Exchangers";
import Transactions from "./pages/Transactions";
import ManageUsers from "./pages/ManageUsers";
import Notifications from "./pages/Notifications";

const App = () => {
  return (
    <div className={`font-inter`} >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exchangers" element={<Exchangers />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/manage_users" element={<ManageUsers />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
