import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Panel, Label, Input, Button, UserPanel } from "./Styled";
import { signUp } from "./services/authServices";
import { useGlobalState } from "./utils/stateContext";
import "./NewUserElements.css";

export default function NewUser() {
  const initialFormState = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const [formState, setFormState] = useState(initialFormState);
  const { dispatch } = useGlobalState();
  let history = useHistory();
  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }
  function handleRegister(event) {
    event.preventDefault();
    signUp(formState).then((data) => {
      sessionStorage.setItem("token", data.jwt);
      sessionStorage.setItem("user", data.username);
      dispatch({ type: "setLoggedInUser", data: data.username });
      history.push("/portal");
    });
  }
  return (
    <>
      {/* <div>
			<div class="container">
				<h1>Register</h1>
				<p>Please fill in this form to create an account.</p>

				<label for="email"><b>Email</b></label>
				<input type="text" placeholder="Enter Email" name="email" id="email" required>

				<label for="psw"><b>Password</b></label>
				<input type="password" placeholder="Enter Password" name="psw" id="psw" required>

				<label for="psw-repeat"><b>Repeat Password</b></label>
				<input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>

				<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
			<button type="submit" class="registerbtn">Register</button>
			</div>

			<div class="container signin">
				<p>Already have an account? <a href="#">Sign in</a>.</p>
			</div>
		</div> */}

      <UserPanel className="formContainer">
        <h1>Employee Registration Form</h1>
        <p>Please complete this form to create an account.</p>
        <Label>Username:</Label>
        <Input
          type="text"
          name="username"
          value={formState.username}
          onChange={handleChange}
        ></Input>
        <br />
        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        ></Input>
        <br />
        <Label>Password:</Label>
        <Input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        ></Input>
        <br />
        <Label>Password Confirmation:</Label>
        <Input
          type="password"
          name="password_confirmation"
          value={formState.password_confirmation}
          onChange={handleChange}
        ></Input>
        <br />
        <Button onClick={handleRegister}>Register</Button>
      </UserPanel>
    </>
  );
}
