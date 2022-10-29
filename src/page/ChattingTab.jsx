import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import FriendComponent from "../components/FriendComponent/FriendComponent";
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
        {new Array(20).fill(1).map(() => (
          <FriendComponent>
            <TimeText>어제</TimeText>
          </FriendComponent>
        ))}
      </Body>
    </Layout>
  );
}

export default ChattingTab;

const TimeText = styled.span`
  width: 50px;
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  float: right;
  color: gray;
`;
