import styled from "styled-components";
import LoginTop from "../components/Login/LoginTop";
import RegisterMiddle from "../components/Register/RegisterMiddle";

function Register() {
  return (
    <StContainer>
      <LoginTop />
      <RegisterMiddle />
    </StContainer>
  );
}

export default Register;

const StContainer = styled.div`
  height: 590px;
  width: 360px;
  background-color: var(--color-kakaoyellow);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
