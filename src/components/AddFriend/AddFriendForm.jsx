import styled from "styled-components";

function AddFriendForm() {
  return (
    <StContainer>
      <div className="id">
        <form>
          <input placeholder="친구 카카오톡 ID" />
        </form>
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
