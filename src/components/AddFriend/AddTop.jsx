import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
function AddTop({ addFriend, setAddFriend }) {
  return (
    <StContainer>
      <div className="cancle">
        <div onClick={() => setAddFriend(!addFriend)}>
          <AiOutlineClose size={13} color={"#a8a7a7"} />
        </div>
      </div>
      <div className="title">친구 추가</div>
      <div className="add-id">ID로 추가</div>
    </StContainer>
  );
}

export default AddTop;

const StContainer = styled.div`
  height: 110px;
  width: 300px;

  .cancle {
    height: 15px;
    width: 300px;
    div {
      float: right;
      margin: 3px;
    }
  }
  .title {
    height: 60px;
    width: 100%;

    display: flex;
    align-items: center;
    padding-left: 15px;
  }
  .add-id {
    height: 30px;
    width: 299px;
    padding-left: 15px;
    border-bottom: 1px solid;
    border-color: #e0dfdf;
    display: flex;
    align-items: center;
    font-size: 13px;
    padding-bottom: 4px;
  }
`;
