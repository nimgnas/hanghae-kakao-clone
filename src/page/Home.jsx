import FriendIndex from "../components/Body/FriendIndex";
import Body from "../components/Layout/Body";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";

function Home() {
  return (
    <Layout>
      <Header title="친구">
        <AiOutlineSearch />
        <FiUserPlus />
      </Header>
      <Body>
        <FriendIndex />
      </Body>
    </Layout>
  );
}

export default Home;
