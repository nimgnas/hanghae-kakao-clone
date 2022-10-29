import { BsFillChatFill } from "react-icons/bs";
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoMdVideocam } from "react-icons/io";
import { useState } from "react";

function ProfileBottom({ profileEdit, setProfileEdit }) {
  //서버 연결시 toggle대신 내 프로필인지 친구 프로필인지 구분하는 토글 필요
  //서버 연결시 className="chat"에 있는 onclick함수 바꾸기
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {toggle ? (
        <StMyBot>
          <div className="chat">
            <BsFillChatFill
              size={15}
              color="white"
              onClick={() => setToggle(!toggle)}
            />

            <div className="text">나와의 채팅</div>
          </div>
          <div className="edit" onClick={() => setProfileEdit(!profileEdit)}>
            <MdEdit size={18} color="white" />
            <div className="text">프로필 관리</div>
          </div>
        </StMyBot>
      ) : (
        <StFriendBot>
          <div className="chat" onClick={() => setToggle(!toggle)}>
            <BsFillChatFill size={15} color="white" />

            <div className="text">1:1채팅</div>
          </div>
          <div className="call">
            <IoCallSharp size={18} color="white" />
            <div className="text">보이스톡</div>
          </div>
          <div className="video">
            <IoMdVideocam size={20} color="white" />
            <div className="text">페이스톡</div>
          </div>
        </StFriendBot>
      )}
    </>
  );
}

export default ProfileBottom;

const StMyBot = styled.div`
  display: flex;
  .chat {
    margin: auto 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 11px;
      color: white;
      margin-top: 15px;
    }
  }
  .edit {
    margin: auto 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 11px;
      color: white;
      margin-top: 13px;
    }
  }
`;
const StFriendBot = styled.div`
  display: flex;
  .chat {
    margin: auto 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 11px;
      color: white;
      margin-top: 15px;
    }
  }
  .call {
    margin: auto 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 11px;
      color: white;
      margin-top: 15px;
    }
  }
  .video {
    margin: auto 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 11px;
      color: white;
      margin-top: 15px;
    }
  }
`;
