import { useState } from "react";
import styled from "styled-components";
import defaultPic from "../../img/kakaodefault.jpg";

function RegisterMiddle() {
  const [loginToggle, setLoginToggle] = useState(true);
  return (
    <StContainer>
      <div className="pic">
        <img src={defaultPic} />
      </div>
      <input className="id" placeholder="아이디를 입력 하세요" />
      <span>유효성검사</span>
      <input className="qw" placeholder="비밀번호를 입력 하세요" />
      <span>유효성검사</span>
      <input className="qw" placeholder="비밀번호를 다시 한번 입력 하세요" />
      <span>유효성검사</span>
      <input className="nick" placeholder="닉네임을 입력 하세요" />
      <span>유효성검사</span>
      <div
        onClick={() => setLoginToggle(!loginToggle)}
        className={loginToggle ? "login-btn-isnot" : "login-btn-isok"}
      >
        회원가입
      </div>
    </StContainer>
  );
}
export default RegisterMiddle;

const StContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .pic {
    height: 80px;
    width: 80px;

    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 15px;
  }
  img {
    /* position: absolute; */
    display: flex;
    object-fit: cover;
    height: 100%;
  }
  input {
    height: 40px;
    width: 240px;
    border: 0.1px solid;
    border-color: #d6d6d6;
    margin: 5px;
    border-radius: 5px;
  }
  span {
    font-size: 12px;
    color: gray;
  }
  .login-btn-isnot {
    height: 40px;
    width: 240px;
    border: 0.1px solid;
    border-color: #d6d6d6;
    background-color: white;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: #cac5c5cc;
    border-radius: 3px;
  }
  .login-btn-isok {
    height: 40px;
    width: 240px;
    border: 0.1px solid;
    border-color: #d6d6d6;
    background-color: var(--color-kakaologo);
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
`;
