import FriendIndex from "../components/Body/FriendIndex";
import Body from "../components/Layout/Body";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import AddFriend from "./AddFriend";
import FriendComponent from "../components/FriendComponent/FriendComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getMyProfile } from "../Redux/module/user";
import Profile from "./Profile";

function Home() {
  // 모달창 상태 관리 스테이트
  const [addFriend, setAddFriend] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getMyProfile());
  }, [dispatch]);
  const userInfo = useSelector(({ userReducer }) => userReducer.userInfo);
  console.log("스테이트", userInfo);
  const [openMyprofile, setOpenMyprofile] = useState(false);

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
        {openMyprofile && (
          <Modal closeModal={() => setOpenMyprofile(!openMyprofile)}>
            <Profile
              userInfo={userInfo}
              openMyprofile={openMyprofile}
              setOpenMyprofile={setOpenMyprofile}
            />
          </Modal>
        )}
        <div onClick={() => setOpenMyprofile(!openMyprofile)}>
          <FriendComponent userInfo={userInfo} />
        </div>
        <FriendIndex />
      </Body>
    </Layout>
  );
}

export default Home;
