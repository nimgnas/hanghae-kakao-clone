import styled from "styled-components";
import defaultPic from "../../img/kakaodefault.jpg";
import { BsCameraFill } from "react-icons/bs";
function ProfileForm({ profileEdit, setProfileEdit }) {
  return (
    <StMid>
      {profileEdit ? null : (
        <div className="camera">
          <BsCameraFill size={20} />
        </div>
      )}
      <div className="pic">
        <img src={defaultPic} />
      </div>

      <div className="nick">
        {profileEdit ? <span>닉네임</span> : <input />}
      </div>
      <div className="sangme">
        {profileEdit ? <span>상태메시지</span> : <input />}
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
