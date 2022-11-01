import styled from "styled-components";
import defaultPic from "../../img/kakaodefault.jpg";
import { BsCameraFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { __getFriendProfileById } from "../../Redux/module/friend";
import { createSearchParams } from "react-router-dom";

function ProfileForm({ profileEdit, setProfileEdit, profileData, userInfo }) {
  const dispatch = useDispatch();
  console.log("유저인포", userInfo);
  let inputRef;
  useEffect(() => {
    dispatch(__getFriendProfileById(profileData));
  }, [dispatch, profileData]);

  const friendData = useSelector(
    ({ friendReducer }) => friendReducer.friendProfile
  );
  const [selectData, setSelectData] = useState();
  const [editImage, setEditImage] = useState();
  useEffect(() => {
    const data = () => {
      if (userInfo) {
        setSelectData(userInfo);
      } else {
        setSelectData(friendData);
      }
    };
    data();
  }, [userInfo, friendData]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSelectData({ ...selectData, [name]: value });
    console.log("온체인지", selectData);
  };
  console.log("셀렉트데이터", selectData);

  const onChangeImage = (e) => {
    e.preventDefault();
    const previewUrl = URL.createObjectURL(e.target.files[0]);
    setEditImage(e.target.files[0]);
  };

  return (
    <StMid>
      {profileEdit ? null : (
        <div className="camera">
          <BsCameraFill size={20} />
        </div>
      )}

      {profileEdit ? (
        <div className="pic">
          <img src={selectData?.image} alt="profile" />
        </div>
      ) : (
        <>
          <div className="pic" onClick={() => inputRef.click()}>
            <img src={selectData?.image} alt="profile" />
            <input
              className="img-input"
              type="file"
              accept="image/*"
              name="image_file"
              onChange={onChangeImage}
              //인풋을 안보이게하고 버튼에 레퍼런스 입력함
              ref={(refParam) => (inputRef = refParam)}
            />
          </div>
        </>
      )}

      <div className="nick">
        {profileEdit ? (
          <span>{selectData?.nickname}</span>
        ) : (
          <input
            name="nickname"
            value={selectData.nickname}
            onChange={onChangeHandler}
          />
        )}
      </div>
      <div className="sangme">
        {profileEdit ? (
          <span>{selectData?.status}</span>
        ) : (
          <input
            name="status"
            value={selectData.status}
            onChange={onChangeHandler}
          />
        )}
      </div>
    </StMid>
  );
}

export default ProfileForm;
const StMid = styled.div`
  height: 200px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  .camera {
    position: absolute;
    bottom: 80px;
    right: 110px;
    z-index: 3;
    color: #323232;
  }
  .pic {
    height: 80px;
    width: 80px;

    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    z-index: 1;
    .img-input {
      display: none;
    }

    img {
      /* position: absolute; */
      display: flex;
      object-fit: cover;
      height: 100%;
    }
  }
  .nick {
    margin: 10px;
    color: white;
    font-size: 16px;
    input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #636060;
    }
  }
  .sangme {
    height: 12px;
    font-size: 12px;
    color: white;
    input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #636060;
    }
  }
`;
