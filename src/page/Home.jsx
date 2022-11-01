import Body from "../components/Layout/Body";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import AddFriend from "./AddFriend";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getFriendList } from "../Redux/module/friend";
import FriendComponent from "../components/FriendComponent/FriendComponent";
import { __getMyProfile } from "../Redux/module/user";

function Home() {
  // 모달창 상태 관리 스테이트
  const [addFriend, setAddFriend] = useState(false);

  const dispatch = useDispatch();

  // 친구목록 셀렉터
  const {
    friendList,
    friendProfile,
    isLoading: freindLoading,
    errorMsg,
  } = useSelector((state) => state.friendReducer);

  // 내 정보 셀렉터
  const { userInfo, isLoading: userLoading } = useSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(__getFriendList());
    dispatch(__getMyProfile());
  }, [dispatch]);

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
        {/* 내프로필 */}
        <FriendComponent title={userInfo.nickname} imgSrc={userInfo.image} />

        <hr style={{ opacity: 0.2 }} />
        {/* 친구목록 */}
        {friendList?.map((friend) => (
          <FriendComponent
            imgSrc={friend.image}
            title={friend.nickname}
            overView={friend.status}
            isHover="true"
          />
        ))}
      </Body>
    </Layout>
  );
}

export default Home;
