import styled from "styled-components";
import ProfileBottom from "../components/Profile/ProfileBottom";

import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileMiddle from "../components/Profile/ProfileMiddle";

function Profile() {
  return (
    <>
      <StContainer>
        <StProfileTop>
          <ProfileHeader />
          <ProfileMiddle />
        </StProfileTop>
        <StProfileBottom>
          <ProfileBottom />
        </StProfileBottom>
      </StContainer>
    </>
  );
}

export default Profile;

const StContainer = styled.div`
  height: 600px;
  width: 300px;
  background-color: var(--color-profilebackground);
`;
const StProfileTop = styled.div`
  height: 495px;
  width: 300px;
  display: flex;

  flex-wrap: wrap;
  align-content: space-between;
  .top {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .fav {
      margin: 5px;
    }
    .close {
      margin: 5px;
    }
  }
`;
const StProfileBottom = styled.div`
  height: 105px;
  width: 300px;
  border-top: 1px solid;
  border-color: #d3d1d1a9;
  display: flex;
  justify-content: center;
  align-items: center;
`;
