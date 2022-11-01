import styled from "styled-components";
import defaultPic from "../../img/kakaodefault.jpg";
import { BsCameraFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { __getFriendProfileById } from "../../Redux/module/friend";
import { createSearchParams } from "react-router-dom";
import { IoHeartCircleOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { __putMyProfile } from "../../Redux/module/user";

function ProfileForm({
  profileEdit,
  setProfileEdit,
  profileData,
  userInfo,
  openMyprofile,
  setOpenMyprofile,
}) {
  const [isFavToggle, setFavToggle] = useState(true);
  const onClickFav = () => {
    setFavToggle(!isFavToggle);
  };

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

  //image 스테이트
  const [image, setImage] = useState({
    image: "",
    previewUrl: userInfo?.image,
  });

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

  //image 온체인지
  const onChangeImage = (e) => {
    e.preventDefault();
    const previewUrl = URL.createObjectURL(e.target.files[0]);
    setImage({ image: e.target.files[0], previewUrl: previewUrl });
  };

  //프로필 수정 완료 온클릭
  const onClickEditHandler = () => {
    const formdata = new FormData();
    formdata.append("file", image.image);
    formdata.append("profileUpdateRequest", {
      ninkname: selectData.nickname,
      status: selectData.status,
    });

    dispatch(__putMyProfile(formdata));
    setProfileEdit(!profileEdit);
  };

  return (
    <>
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
            <div
              className="close"
              onClick={() => setOpenMyprofile(!openMyprofile)}
            >
              <AiOutlineClose color="white" />
            </div>
          </>
        ) : (
          <>
            <div
              className="cancle"
              onClick={() => setProfileEdit(!profileEdit)}
            >
              취소
            </div>
            <div className="ok" onClick={onClickEditHandler}>
              완료
            </div>
          </>
        )}
      </StContainer>

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
              {!image.image ? (
                <img src={selectData?.image} alt="profile" />
              ) : (
                <img src={image.previewUrl} alt="profile" />
              )}
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
    </>
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
    input:focus {
      outline: none;
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
