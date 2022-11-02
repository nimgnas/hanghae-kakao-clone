import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getFriendList } from "../../Redux/module/friend";
import FriendComponent from "../FriendComponent/FriendComponent";
import Modal from "../Modal/Modal";
import Profile from "../../page/Profile";

function FriendIndex() {
  const dispatch = useDispatch();
  const [openProfile, setOpenProfile] = useState(false);

  //map으로 만든 각 친구들 클릭시 username이 friend state에 저장됨, 모달창에 친구 정보 조회할때 사용
  const [friend, setFriend] = useState("");
  useEffect(() => {
    dispatch(__getFriendList());
  }, [dispatch]);
  const friendList = useSelector(
    ({ friendReducer }) => friendReducer.friendList
  );

  const onClickHandler = (username) => {
    setOpenProfile(!openProfile);
    setFriend(username);
  };

  return (
    <>
      {friendList &&
        friendList.map((userInfo) => {
          return (
            <div
              onClick={() => onClickHandler(userInfo.id)}
              key={userInfo.username}
            >
              <FriendComponent
                userInfo={userInfo}
                openProfile={openProfile}
                setOpenProfile={setOpenProfile}
              />
            </div>
          );
        })}
      {openProfile && (
        <Modal closeModal={() => setOpenProfile(!openProfile)}>
          <Profile profileData={friend} />
        </Modal>
      )}
    </>
  );
}

export default FriendIndex;
