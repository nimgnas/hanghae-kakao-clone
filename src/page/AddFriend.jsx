import styled from "styled-components";
import AddFriendForm from "../components/AddFriend/AddFriendForm";
import AddTop from "../components/AddFriend/AddTop";

function AddFriend() {
  return (
    <StContainer>
      <AddTop />
      <AddFriendForm />
    </StContainer>
  );
}

export default AddFriend;

const StContainer = styled.div`
  height: 450px;
  width: 300px;
  border: 1px solid;
  border-color: #e0dfdf;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
