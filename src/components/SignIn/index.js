import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">D & L Constructions</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Employee Login</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required placeholder="Enter Email" />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                placeholder="Enter Password"
              />
              <FormButton type="submit">Log In</FormButton>
              {/* <Text>Forgot password?</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
