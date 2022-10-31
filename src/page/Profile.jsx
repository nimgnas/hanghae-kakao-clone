import { useState } from "react";
import styled from "styled-components";
import ProfileBottom from "../components/Profile/ProfileBottom";

import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileForm from "../components/Profile/ProfileForm";

function Profile() {
  const [profileEdit, setProfileEdit] = useState(true);
  return (
    <>
      <StContainer>
        <StProfileTop>
          <ProfileHeader
            profileEdit={profileEdit}
            setProfileEdit={setProfileEdit}
          />
          <ProfileForm
            setProfileEdit={setProfileEdit}
            profileEdit={profileEdit}
          />
        </StProfileTop>
        <StProfileBottom>
          <ProfileBottom
            setProfileEdit={setProfileEdit}
            profileEdit={profileEdit}
          />
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
