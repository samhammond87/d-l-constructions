import React from "react";
import { useHistory } from "react-router-dom";
import { useGlobalState } from "../../utils/stateContext";
import { signOut } from "../../axios/authServices";
import "./PortalNav.css";
import { Navbar, Nav } from "react-bootstrap";

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
      <Navbar bg="dark" expand="lg" variant="dark" id="respNavbar">
        <Navbar.Brand>
          <Nav.Link
            className="ml-auto"
            style={{ color: " #ffffff" }}
            onClick={() => history.push("/")}
          >
            {loggedInUser ? `Hi ${loggedInUser}` : "D&L Constructions"}
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="ml-auto navLink"
              // style={{ color: " #009879" }}
              onClick={() => history.push("/portal")}
            >
              Home
            </Nav.Link>
            {loggedInUser === "Andrew" && (
              <Nav.Link
                className="ml-auto  navLink"
                // style={{ color: " #009879" }}
                onClick={() => history.push("/register")}
              >
                Register
              </Nav.Link>
            )}
            {loggedInUser ? (
              <>
                <Nav.Link
                  className="ml-auto navLink"
                  // style={{ color: " #009879" }}
                  onClick={() => history.push("/portal/new")}
                >
                  Add Timesheet
                </Nav.Link>
                <Nav.Link
                  className="ml-auto navLink"
                  // style={{ color: " #009879" }}
                  onClick={handleSignOut}
                >
                  Sign Out
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  className="ml-auto navLink"
                  // style={{ color: " #009879" }}
                  onClick={() => history.push("/sign_in")}
                >
                  Sign In
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <br />
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
      </div> */}
    </>
  );
}
