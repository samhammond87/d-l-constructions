import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UserLabel, UserInput, UserButton, UserPanel } from "./Styled";
import { signUp } from "../../axios/authServices";
import { useGlobalState } from "../../utils/stateContext";
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
  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }
  function handleRegister(e) {
    e.preventDefault();
    signUp(formState).then((data) => {
      sessionStorage.setItem("token", data.jwt);
      sessionStorage.setItem("user", data.username);
      dispatch({ type: "setLoggedInUser", data: data.username });
      history.push("/portal");
    })
    .catch(err => { 
      setFormState({errorMessage: err.message})
    })
  }
  return (
    <>
      {/* <div>
			<div class="container">
				<h1>Register</h1>
				<p>Please fill in this form to create an account.</p>

				<UserUserUserUserLabel for="email"><b>Email</b></UserUserUserUserLabel>
				<input type="text" placeholder="Enter Email" name="email" id="email" required>

				<UserUserUserUserLabel for="psw"><b>Password</b></UserUserUserUserLabel>
				<input type="password" placeholder="Enter Password" name="psw" id="psw" required>

				<UserUserUserUserLabel for="psw-repeat"><b>Repeat Password</b></UserUserUserUserLabel>
				<input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>

				<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
			<button type="submit" class="registerbtn">Register</button>
			</div>

			<div class="container signin">
				<p>Already have an account? <a href="#">Sign in</a>.</p>
			</div>
		</div> */}

      <UserPanel className="formContainer">
        <h3>Employee Registration Form</h3>
        <p>Please complete this form to create an account.</p>
        <UserLabel>Username:</UserLabel>
        <UserInput
          type="text"
          name="username"
          value={formState.username}
          onChange={handleChange}
          placeholder="Create a username"
        ></UserInput>
        <br />
        <UserLabel>Email:</UserLabel>
        <UserInput
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Enter your email"
        ></UserInput>
        <br />
        <UserLabel>Password:</UserLabel>
        <UserInput
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="Enter password"
        ></UserInput>
        <br />
        <UserLabel>Password Confirmation:</UserLabel>
        <UserInput
          type="password"
          name="password_confirmation"
          value={formState.password_confirmation}
          onChange={handleChange}
          placeholder="Confirm your password"
        ></UserInput>
        <br />
        <UserButton onClick={handleRegister}>Register</UserButton>
          <div>
            { formState.errorMessage &&
              <h3 className="error"> { "Please check your details and try again"} </h3> }
          </div>
      </UserPanel>
    </>
  );
}
