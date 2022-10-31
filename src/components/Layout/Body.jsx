import styled from "styled-components";

function Body({ children }) {
  return <BodyContainer>{children}</BodyContainer>;
}

export default Body;

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
`;
