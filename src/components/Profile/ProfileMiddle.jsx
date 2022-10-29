import styled from "styled-components";
import defaultPic from "../../img/kakaodefault.jpg";
function ProfileMiddle() {
  return (
    <StMid>
      <div className="pic">
        <img src={defaultPic} />
      </div>
      <div className="nick">
        <p>닉네임</p>
        <p></p>
      </div>
    </StMid>
  );
}

export default ProfileMiddle;
const StMid = styled.div`
  height: 200px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .pic {
    height: 80px;
    width: 80px;

    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    img {
      /* position: absolute; */
      display: flex;
      object-fit: cover;
      height: 100%;
    }
  }
  .nick {
    margin-top: 10px;
    color: white;
  }
`;
