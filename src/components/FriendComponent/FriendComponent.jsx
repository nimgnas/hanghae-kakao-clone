import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import Profile from "../../page/Profile";
import { __getFriendProfileById } from "../../Redux/module/friend";
import Modal from "../Modal/Modal";

function FriendComponent({ children, isHover, userInfo }) {
  return (
    <FriendBox isHover={isHover}>
      <ImgWrapper src={userInfo?.image}></ImgWrapper>
      <Body>
        <Title>{userInfo?.nickname}</Title>
        <OverView>{userInfo?.status}</OverView>
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
