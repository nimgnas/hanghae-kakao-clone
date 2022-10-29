import styled from "styled-components";

function Header({ children, title }) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <IconWrapper>{children}</IconWrapper>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  height: 55px;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  top: 0;
`;

const IconWrapper = styled.div`
  font-size: 20px;
  display: flex;
  gap: 15px;
`;

const Title = styled.h2`
  font-weight: bold;
`;
