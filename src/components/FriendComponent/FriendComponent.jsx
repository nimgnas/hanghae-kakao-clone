import styled, { css } from "styled-components";

// TODO: 패딩값 조절,, hover시 꽉 채우도록

function FriendComponent({ children, isHover, title, overView, imgSrc }) {
  return (
    <FriendBox isHover={isHover}>
      <ImgWrapper src={imgSrc}></ImgWrapper>
      <Body>
        <Title>{title}</Title>
        <OverView>{overView}</OverView>
      </Body>
      {children}
    </FriendBox>
  );
}

export default FriendComponent;

const FriendBox = styled.div`
  height: 75px;
  padding: 15px 0px;
  display: flex;
  width: 100%;

  ${(props) =>
    props.isHover &&
    css`
      &:hover {
        background-color: var(--color-hover);
      }
    `}
`;
const ImgWrapper = styled.img`
  height: 100%;
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
