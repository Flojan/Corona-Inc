import React, { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import styled from "styled-components";

export const StyledForm = styled.form`
  h1 {
    color: #fff;
  }
  margin: 40px 0 40px 0px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const LoginForm = () => (
  <StyledForm>
    <h1>Play now!</h1>
    <TextInput type="email" placeholder="e-Mail Address" />
    <TextInput type="password" placeholder="Password" />
    <ButtonContainer>
      <Button>Register</Button>
      <Button>Login</Button>
    </ButtonContainer>
  </StyledForm>
);

export default LoginForm;

// <!--onClick={() => loginfkt}>
