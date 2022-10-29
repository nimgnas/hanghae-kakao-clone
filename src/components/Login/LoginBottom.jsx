import styled from "styled-components";
import { TbMinusVertical } from "react-icons/tb";
function LoginBottom() {
  return (
    <StBotContainer>
      <span>카카오계정 찾기</span>
      <TbMinusVertical color="#b8b5b5" />
      <span>비밀번호 재설정</span>
    </StBotContainer>
  );
}

export default LoginBottom;

const StBotContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 12px;
    color: #696969c0;
  }
`;
