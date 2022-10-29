import styled from "styled-components";
import LoginTop from "../components/Login/LoginTop";
import RegisterMiddle from "../components/Register/RegisterMiddle";

function Register() {
  return (
    <StWrap>
      <StContainer>
        <LoginTop />
        <RegisterMiddle />
      </StContainer>
    </StWrap>
  );
}

export default Register;

const StWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const StContainer = styled.div`
  height: 590px;
  width: 360px;
  background-color: var(--color-kakaoyellow);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
