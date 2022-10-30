import styled from "styled-components";
import FriendCompoent from "../components/FriendComponent/FriendComponent";
import { AiOutlineSearch } from "react-icons/ai";

function Chatting() {
  const onEnter = () => {};

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
      <Body>
        {new Array(20).fill(1).map(() => (
          <>
            <ResMsgWrapper>
              <ImgWrapper src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc0nsol%2FbtqXrCOZ6J9%2FXLlGPEHQoIiwwIClQTkVPk%2Fimg.png"></ImgWrapper>
              <ChatBody>
                <ChatTitle>상민</ChatTitle>
                <ResponseMsg>
                  sfdfdsfsdfsdfsdsfdfdsfsdfsdfsdsfdfdsfsdfsdfsdsfdfdsfsdfsdfsdsfdfdsfsdfsdfsdsfdfdsfsdfsdfsdsfdfdsfsdfsdfsdsfdfdsfsdfsdfsd
                </ResponseMsg>
              </ChatBody>
            </ResMsgWrapper>
            <SendMsg>dd</SendMsg>
          </>
        ))}
      </Body>
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
  background-color: var(--color-chatBackground);
  top: 0;
  width: 100%;
  padding: 0 15px;
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
  background-color: var(--color-chatBackground);
  height: 100%;
  width: 100%;
  padding: 15px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

const ChattingBox = styled.div`
  height: 135px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const ResMsgWrapper = styled.div`
  display: flex;
`;

const ImgWrapper = styled.img`
  height: 45px;
  background-color: black;
  border-radius: 17px;
  width: 45px;
`;

const ChatTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
`;

const ChatBody = styled.div`
  height: 100%;
  width: fit-content;
  max-width: 75%;
  padding: 6px 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 15px;
`;

const ResponseMsg = styled.div`
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  word-break: break-all;
  background-color: white;
`;

const SendMsg = styled.div`
  padding: 10px;
  border-radius: 5px;
  margin-top: 5px;
  word-break: break-all;
  background-color: var(--color-kakaoyellow);
  margin-left: auto;
  width: fit-content;
  max-width: 75%;
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
  background-color: var(--color-kakaoyellow);

  float: right;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
`;
