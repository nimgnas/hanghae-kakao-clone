import FriendIndex from "../components/Body/FriendIndex";
import Body from "../components/Layout/Body";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import AddFriend from "./AddFriend";

function Home() {
  // 모달창 상태 관리 스테이트
  const [addFriend, setAddFriend] = useState(false);
  return (
    <Layout>
      <Header title="친구">
        <AiOutlineSearch />
        <div onClick={() => setAddFriend(!addFriend)}>
          <FiUserPlus />
        </div>
        {/* 모달창 */}
        {addFriend && (
          <Modal closeModal={() => setAddFriend(!addFriend)}>
            <AddFriend addFriend={addFriend} setAddFriend={setAddFriend} />
          </Modal>
        )}
      </Header>
      <Body>
        <FriendIndex />
      </Body>
    </Layout>
  );
}

export default Home;
