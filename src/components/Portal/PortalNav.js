import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Panel, Span } from "./Styled";
import { useGlobalState } from "./utils/stateContext";
import { signOut } from "./services/authServices";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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

  return (
    <Panel>
      <Button onClick={() => history.push("/portal")}>Home</Button>
      {loggedInUser ? (
        <>
          <Button onClick={() => history.push("/portal/new")}>
            Add Timesheet
          </Button>
          <Button onClick={handleSignOut}>Sign Out</Button>
          <Span>Welcome {loggedInUser}</Span>
        </>
      ) : (
        <>
          <Button onClick={() => history.push("/register")}>Register</Button>
          <Button onClick={() => history.push("/sign_in")}>Sign In</Button>
        </>
      )}
    </Panel>
  );
}
