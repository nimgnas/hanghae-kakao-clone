import FriendIndex from "../components/Body/FriendIndex";
import Body from "../components/Layout/Body";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";

function Home() {
  return (
    <Layout>
      <Header title="친구">헤더칠드런</Header>
      <Body>
        <FriendIndex />
      </Body>
    </Layout>
  );
}

export default Home;
