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
      <ChattingBox>
        <ButtonWrapper>
          <Input />
          <Button>전송</Button>
        </ButtonWrapper>
      </ChattingBox>
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
  height: 135px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Input = styled.textarea`
  display: block;
  height: 70px;
  width: 100%;
  border: none;
  resize: none;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.div`
  height: 100%;
  background-color: white;
`;

const Button = styled.button`
  background-color: var(--color-yellow);

  border: none;
  padding: 8px 20px;
  border-radius: 8px;
`;
