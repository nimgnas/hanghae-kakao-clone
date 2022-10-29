import styled from "styled-components";

function FriendComponent({ children }) {
  return (
    <FriendBox>
      <ImgWrapper src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc0nsol%2FbtqXrCOZ6J9%2FXLlGPEHQoIiwwIClQTkVPk%2Fimg.png"></ImgWrapper>
      <Body>
        <Title>상민</Title>
        <OverView>피곤하다 살려줘 css 힘들어피곤하다 살려줘 sdffds</OverView>
      </Body>
      {children}
      {/* <Footer></Footer> */}
    </FriendBox>
  );
}

export default FriendComponent;

const FriendBox = styled.div`
  height: 75px;
  padding: 15px;
  display: flex;
  width: 100%;
`;
const ImgWrapper = styled.img`
  height: 100%;
  background-color: black;
  border-radius: 17px;
  width: 45px;
`;
const Body = styled.div`
  height: 100%;
  width: 85%;
  padding: 6px 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 15px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
`;

const OverView = styled.span`
  overflow: hidden;
  font-size: 11.5px;
  color: gray;
`;

const Footer = styled.div`
  height: 100%;
  width: 15%;
`;
