import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import Body from "../components/Layout/Body";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";

function ChattingTab() {
  return (
    <Layout>
      <Header title="친구">
        <AiOutlineSearch />
        <AiOutlineSearch />
      </Header>
      <Body>
        <FriendBox>
          <ImgWrapper></ImgWrapper>
          <FBody></FBody>
          <FFooter></FFooter>
        </FriendBox>
      </Body>
    </Layout>
  );
}

export default ChattingTab;

const FriendBox = styled.div`
  background-color: gray;
  height: 75px;
  padding: 15px;
  display: flex;
`;
const ImgWrapper = styled.img`
  width: 50px;
  height: 100%;
`;
const FBody = styled.div`
  /* background-color: tomato; */
  height: 75px;
  width: 100px;
`;
const FFooter = styled.div`
  background-color: teal;
  height: 75px;
`;
