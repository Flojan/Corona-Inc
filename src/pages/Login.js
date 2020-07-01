import React from "react";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";
import backgroundImage from "../images/virusbackground.png";

export const Container = styled.div`
  background-image: url(${backgroundImage});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  left: 0px;
  top: 0px;
  position: fixed;
`;

export const FormContainer = styled.div`
  position: absolute;
  width: 600px;
  height: 400px;
  background-color: #252525de;
  left: 50%;
  top: 50%;
  margin-top: -200px;
  margin-left: -300px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const Login = () => {
  sessionStorage.removeItem("token");
  return (
    <Container>
      <FormContainer>
        <LoginForm></LoginForm>
      </FormContainer>
    </Container>
  );
};

export default Login;
