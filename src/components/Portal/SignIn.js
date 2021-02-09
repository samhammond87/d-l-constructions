import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  FormWrap,
  // Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  // Button,
  // Panel,
} from "./Styled";
import { signIn } from "../../axios/authServices";
import { useGlobalState } from "../../utils/stateContext";

const SignIn = () => {
  const initialFormState = {
    email: "",
    password: "",
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

  function handleSubmit(e) {
    e.preventDefault();
    signIn(formState)
      .then(({ username, jwt }) => {
        sessionStorage.setItem("token", jwt);
        sessionStorage.setItem("user", username);
        dispatch({ type: "setLoggedInUser", data: username });
        dispatch({ type: "setToken", data: jwt });
        history.push("/portal");
      })
      .catch((err) => {
        setFormState(
          Object.assign({}, formState, { errorMessage: err.message })
        );
      });
  }

  return (
    <>
      <Container>
        <FormWrap>
          {/*<Icon to="../">D & L Constructions</Icon>*/}

          <FormContent>
            <Form action="#">
              <FormH1>Employee Login:</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formState.username}
                initialValue=""
                onChange={handleChange}
              ></FormInput>
              <FormLabel htmlFor="for">Password:</FormLabel>
              <FormInput
                type="password"
                name="password"
                value={formState.password}
                initialValue=""
                onChange={handleChange}
              ></FormInput>
              {formState.errorMessage && (
                <p className="error" style={{ color: "white" }}>
                  {" "}
                  {"Oops! Please check your details and try again"}{" "}
                </p>
              )}
              <FormButton onClick={handleSubmit}>Log in</FormButton>
              {/* <div> */}
              {/* <br /> */}
              {/* </div> */}
              {/* <div> */}
              {/* <Panel> */}
              <FormButton onClick={() => history.push(`/portal`)}>
                Back
              </FormButton>
              {/* </Panel> */}
              {/* </div> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
