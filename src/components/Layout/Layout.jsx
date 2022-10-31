import { BsFillChatFill, BsThreeDots, BsBell } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { HiUser } from "react-icons/hi";
import styled from "styled-components";

//TODO: 아이콘 클릭 /클릭X 일때 color값 바꿔줄 것

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Nav>
        <IconWrapper>
          <HiUser size={30} color="gray" />
          <BsFillChatFill size={20} color="gray" />
          <BsThreeDots size={25} color="gray" />
        </IconWrapper>
        <IconWrapper>
          <BsBell size={20} color="gray" />
          <IoSettingsOutline size={20} color="gray" />
        </IconWrapper>
      </Nav>
      <Container>{children}</Container>
    </LayoutContainer>
  );
}
export default Layout;

const LayoutContainer = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 100vh;
  display: flex;
  border-radius: 10px;
  border: 1px solid gray;
  overflow: hidden;
`;

const Nav = styled.div`
  background-color: var(--color-navbar);
  height: 100%;
  width: 85px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 70px;
  padding-bottom: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: scroll;
`;
