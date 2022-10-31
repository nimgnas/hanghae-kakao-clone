import { useEffect } from "react";
import { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiChatNewLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import FriendComponent from "../components/FriendComponent/FriendComponent";
import Body from "../components/Layout/Body";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import { __getRooms } from "../Redux/module/chat";

function ChattingTab() {
  const [showInput, setShowInput] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const inputRef = useRef(); // input DOM

  const dispatch = useDispatch();
  const { rooms, isLoading, errorMsg } = useSelector(
    (state) => state.chatReducer
  );

  useEffect(() => {
    dispatch(__getRooms());
  }, [dispatch]);

  const onShowInput = () => {
    setShowInput(!showInput);
    setTimeout(() => {
      inputRef.current.focus();
    }, 200);
  };

  const onShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <Header title="친구">
        <AiOutlineSearch onClick={onShowInput} />
        <RiChatNewLine onClick={onShowModal} />
      </Header>
      <Body>
        <InputWrapper showInput={showInput}>
          <AiOutlineSearch className="search-icon" />
          <Input ref={inputRef} />
        </InputWrapper>

        {new Array(20).fill(1).map(() => (
          <FriendComponent isHover={true} title="ㅇㅇ" overView="채팅입니다">
            <TimeText>어제</TimeText>
          </FriendComponent>
        ))}
      </Body>
      {showModal && (
        <ModalLayout>
          <ModalTitle>친구 검색</ModalTitle>
          <Input />
        </ModalLayout>
      )}
    </Layout>
  );
}

export default ChattingTab;

const TimeText = styled.span`
  width: 50px;
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  float: right;
  color: gray;
`;

const InputWrapper = styled.div`
  margin-bottom: 5px;
  position: relative;
  display: none;

  ${(props) =>
    props.showInput &&
    css`
      display: block;
    `}

  .search-icon {
    position: absolute;
    top: 4px;
    left: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 3px solid var(--color-hover);
  background-color: var(--color-hover);
  padding-left: 20px;

  &:focus {
    outline: none;
    border: 3px solid #95b3f6;
  }
`;

const ModalLayout = styled.div`
  width: 250px;
  height: 200px;
  position: absolute;
  right: 0px;
  top: 50px;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.h1`
  margin-bottom: 10px;
`;
