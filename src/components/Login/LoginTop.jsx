import styled from "styled-components";
import { AiOutlineSetting, AiOutlineClose } from "react-icons/ai";
import { VscChromeMinimize } from "react-icons/vsc";
import { TbMinusVertical } from "react-icons/tb";

function LoginTop() {
  return (
    <StTopContain>
      <div>
        <AiOutlineSetting color="#696969c0" />
        <TbMinusVertical color="#696969c0" />
        <VscChromeMinimize color="#696969c0" />
        <AiOutlineClose color="#696969c0" />
      </div>
    </StTopContain>
  );
}
export default LoginTop;

const StTopContain = styled.div`
  height: 30px;
  width: 100%;
  div {
    width: 80px;
    float: right;
    margin: 5px;
    display: flex;
    justify-content: space-between;
  }
`;
