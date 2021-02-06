import React from "react";
import { useHistory } from "react-router-dom";
import { useGlobalState } from "../../utils/stateContext";
import { signOut } from "../../axios/authServices";
import "./PortalNav.css";

// employee portal navbar component

export default function PortalNav() {
  let history = useHistory();

  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  function handleSignOut(e) {
    e.preventDefault();
    signOut(loggedInUser).then(() => {
      dispatch({ type: "setLoggedInUser", data: null });
      dispatch({ type: "setToken", data: null });
    });
  }

  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <h1 id="navbar-logo">
            {loggedInUser ? `Hi ${loggedInUser}` : "D&L Constructions"}
          </h1>
          <div className="menu-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="nav-menu">
            <li>
              <span
                className="nav-link"
                onClick={() => history.push("/portal")}
              >
                Home
              </span>
            </li>
            {loggedInUser ? (
              <>
                <span
                  className="nav-link"
                  onClick={() => history.push("/portal/new")}
                >
                  Add Timesheet
                </span>
                <span
                  className="nav-link nav-links-btn"
                  onClick={handleSignOut}
                >
                  Sign Out
                </span>
              </>
            ) : (
              <>
                <span
                  className="nav-link"
                  onClick={() => history.push("/register")}
                >
                  Register
                </span>
                <span
                  className="nav-link nav-links-btn"
                  onClick={() => history.push("/sign_in")}
                >
                  Sign In
                </span>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
