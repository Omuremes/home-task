import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./style/profile.css";

function ProfilePage() {
  const { user, logout } = useAuthContext();
  return (
    <div>
      <div className="labacco">
        <div className="secondaryAccImage">
          <img className="accImage" src={user.photoURL} alt="" />
        </div>
        <div className="accInputs">
          <input
            className="accinp"
            id="email"
            placeholder="UserName"
            name="user"
            value={user.displayName}
          />
          <input
            className="accinp"
            name="email"
            placeholder="Email"
            id="password"
            value={user.email}
          />

          <div className="loghomBTN">
            <Link onClick={() => logout()} to={"/"} className="logoutBTN">
              Logout
            </Link>
            <Link className="homBTN" to={-1}>
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
