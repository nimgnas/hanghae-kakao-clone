import ChattingIndex from "../components/Body/ChattingIndex";
import Body from "../components/Layout/Body";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";

function ChattingTab() {
  return (
    <Layout>
      <Header title="친구">헤더칠드런</Header>
      <Body>
        <ChattingIndex />
      </Body>
    </Layout>
  );
}

export default ChattingTab;
