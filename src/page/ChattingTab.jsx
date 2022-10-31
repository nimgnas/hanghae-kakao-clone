import { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styled, { css } from "styled-components";
import FriendComponent from "../components/FriendComponent/FriendComponent";
import Body from "../components/Layout/Body";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";

function ChattingTab() {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef();

  const onShowInput = () => {
    setShowInput(!showInput);
    setTimeout(() => {
      inputRef.current.focus();
    }, 200);
  };

  return (
    <Layout>
      <Header title="친구">
        <AiOutlineSearch onClick={onShowInput} />
        <AiOutlineSearch />
      </Header>
      <Body>
        <InputWrapper showInput={showInput}>
          <AiOutlineSearch className="search-icon" />
          <Input ref={inputRef} />
        </InputWrapper>

        {new Array(20).fill(1).map(() => (
          <FriendComponent isHover={true}>
            <TimeText>어제</TimeText>
          </FriendComponent>
        ))}
      </Body>
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
