import { Routes, Route, Navigate } from "react-router-dom";
import AccountNavigation from "./Navigation";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import "./Account.css"; // Import CSS file

export default function Account() {
  return (
    <div id="wd-account-screen">
      <div className="sidebar">
        <AccountNavigation />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}
