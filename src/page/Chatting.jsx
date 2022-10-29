import styled from "styled-components";
import FriendCompoent from "../components/FriendComponent/FriendComponent";
import { AiOutlineSearch } from "react-icons/ai";

function Chatting() {
  return (
    <Layout>
      <Header>
        <FriendCompoent>
          <IconWrapper>
            <AiOutlineSearch />
            <AiOutlineSearch />
            <AiOutlineSearch />
            <AiOutlineSearch />
          </IconWrapper>
        </FriendCompoent>
      </Header>
      <Body></Body>
      <ChattingBox></ChattingBox>
    </Layout>
  );
}

export default Chatting;

const Layout = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 100vh;
  display: flex;
  border-radius: 10px;
  border: 1px solid gray;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: #b2c6d9;
  top: 0;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
  width: 150px;
`;

const Body = styled.div`
  background-color: #b2c6d9;
  height: 100%;
  width: 100%;
`;

const ChattingBox = styled.div`
  height: 100px;
  background-color: white;
`;
