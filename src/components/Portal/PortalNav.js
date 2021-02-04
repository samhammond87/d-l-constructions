import React from "react";
import { useHistory } from "react-router-dom";
// import { Button } from "./Styled";
import { useGlobalState } from "./utils/stateContext";
import { signOut } from "./services/authServices";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import "./PortalNav.css";


export default function PortalNav() {
  let history = useHistory();

  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  function handleSignOut(event) {
    event.preventDefault();
    signOut(loggedInUser).then(() => {
      dispatch({ type: "setLoggedInUser", data: null });
      dispatch({ type: "setToken", data: null });
    });
  }

  // function handleSignOut(event) {
  // 	event.preventDefault()
  // 	signOut(loggedInUser)
  // 	.then(() => {
  // 		dispatch({type: 'setLoggedInUser', data: null})
  // 		dispatch({type: 'setToken', data: null})
  // 	})
  // }

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

      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand>{loggedInUser}'s Timesheets</Navbar.Brand>
        <Navbar.Brand>
          <Button onClick={() => history.push("/portal")}>Home</Button>
        </Navbar.Brand>
        {loggedInUser ? (
          <>
            <Navbar.Brand>
              <Button onClick={() => history.push("/portal/new")}>
                Add Timesheet
              </Button>
            </Navbar.Brand>
>>>>>>> c19bf6a309be46f7b76c618779fd6434a38eefc2

            <Navbar.Brand>
              <Button onClick={handleSignOut}>Sign Out</Button>{" "}
            </Navbar.Brand>
          </>
        ) : (
          <>
            <Navbar.Brand>
              <Button onClick={() => history.push("/register")}>
                Register
              </Button>
            </Navbar.Brand>
            <Navbar.Brand>
              <Button onClick={() => history.push("/sign_in")}>Sign In</Button>
            </Navbar.Brand>
          </>
        )}
      </Navbar> */}
    </>
  );
}
