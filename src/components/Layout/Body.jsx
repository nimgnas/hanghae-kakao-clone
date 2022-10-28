import styled from "styled-components";

function Body({ children }) {
  return <BodyC>{children}</BodyC>;
}

export default Body;

const Title = styled.h1;

const BodyC = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;
