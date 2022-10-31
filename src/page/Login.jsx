import styled from "styled-components";
import LoginBottom from "../components/Login/LoginBottom";
import LoginForm from "../components/Login/LoginForm";
import LoginTop from "../components/Login/LoginTop";

function Login() {
  return (
    <StWrap>
      <StContainer>
        <LoginTop />
        <LoginForm />
        <LoginBottom />
      </StContainer>
    </StWrap>
  );
}

export default Login;
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
  justify-content: space-between;
`;
