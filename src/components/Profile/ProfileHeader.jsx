import { useState } from "react";
import { IoHeartCircleOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

function ProfileHeader({ setProfileEdit, profileEdit }) {
  const [isFavToggle, setFavToggle] = useState(true);
  const onClickFav = () => {
    setFavToggle(!isFavToggle);
  };
  return (
    <StContainer>
      {profileEdit ? (
        <>
          <div className="fav" onClick={onClickFav}>
            {isFavToggle ? (
              <IoHeartCircleOutline color="white" size={25} />
            ) : (
              <IoHeartCircleOutline color="yellow" size={25} />
            )}
          </div>
          <div className="close">
            <AiOutlineClose color="white" />
          </div>
        </>
      ) : (
        <>
          <div className="cancle">취소</div>
          <div className="ok">완료</div>
        </>
      )}
      {/* <div className="fav" onClick={onClickFav}>
        {isFavToggle ? (
          <IoHeartCircleOutline color="white" size={25} />
        ) : (
          <IoHeartCircleOutline color="yellow" size={25} />
        )}
      </div>
      <div className="close">
        <AiOutlineClose color="white" />
      </div> */}
    </StContainer>
  );
}

export default ProfileHeader;
const StContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  .fav {
    margin: 5px;
  }
  .close {
    margin: 5px;
  }
  .cancle {
    margin: 10px;
    font-size: 15px;
  }
  .ok {
    margin: 10px;
    font-size: 15px;
  }
`;
