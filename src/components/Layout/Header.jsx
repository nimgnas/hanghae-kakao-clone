import styled from "styled-components";

function Header({ children, title }) {
  return (
    <HeaderC>
      <Title>{title}</Title>
      <h1>{children}</h1>
    </HeaderC>
  );
}

export default Header;

const HeaderC = styled.div`
  background-color: aqua;
  height: 100px;
  width: 100%;
`;

const Title = styled.h1``;
