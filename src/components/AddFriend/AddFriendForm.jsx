import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addFriend, __getFriendProfileById } from "../../Redux/module/friend";

function AddFriendForm() {
  const [kakaoId, setKakaoId] = useState("");

  const dispatch = useDispatch();
  const { friendList, errorMsg } = useSelector((state) => state.friendReducer);

  // TODO: 친구추가 다음 친구목록 조회 안됨..

  const onChange = (e) => {
    const value = e.target.value;
    setKakaoId(value);
  };

  const onSearchEnter = (e) => {
    if (e.key === "Enter") {
      if (!kakaoId.trim()) {
        alert("입력해주세요~!");
      }
      dispatch(__addFriend({ username: kakaoId }));
    }
  };
  return (
    <StContainer>
      <div className="id">
        <input
          placeholder="친구 카카오톡 ID"
          maxLength="20"
          onChange={onChange}
          value={kakaoId}
          onKeyPress={onSearchEnter}
        />

        <span>0/20</span>
      </div>
      <div className="info">
        카카오톡 ID를 등록하고 검색을 허용한 친구만 찾을 수 있습니다.
      </div>
    </StContainer>
  );
}
export default AddFriendForm;

const StContainer = styled.div`
  height: 150px;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .id {
    width: 260px;
    border-bottom: 1px solid;
    border-color: #e0dfdf;
    padding: 10px 5px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    color: #a8a7a7;
    input {
      border: none;
      background-color: transparent;
    }
    input:focus {
      outline: none;
    }
  }
  .info {
    margin: 15px 0px;
    font-size: 12px;
    color: #a8a7a7;
  }
`;
