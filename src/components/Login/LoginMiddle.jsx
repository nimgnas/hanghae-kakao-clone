import { useState } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
function LoginMiddle() {
  const [loginToggle, setLoginToggle] = useState(true);
  return (
    <StMidContain>
      <RiKakaoTalkFill size={110} color={"var(--color-kakaologo)"} />
      <input className="id" placeholder="아이디" />
      <input className="pw" placeholder="비밀번호" />
      <div
        onClick={() => setLoginToggle(!loginToggle)}
        className={loginToggle ? "login-btn-isnot" : "login-btn-isok"}
      >
        로그인
      </div>
      <div className="or-contain">
        <div className="line" />
        <p>또는</p>
        <div className="line" />
      </div>
      <div className="register">회원가입</div>

      <div className="autologin">
        <input type="checkbox" />
        <span>자동로그인 </span>
        <AiOutlineInfoCircle />
      </div>
    </StMidContain>
  );
}
export default LoginMiddle;

const StMidContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .id {
    margin-top: 23px;
    height: 40px;
    width: 240px;
    border: 0.1px solid;
    border-color: #d6d6d6;
    border-bottom: none;
  }
  .pw {
    height: 40px;
    width: 240px;
    border: 0.1px solid;
    border-color: #d6d6d6;
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
  .or-contain {
    width: 240px;
    height: 40px;
    display: flex;
    p {
      width: 40px;
      font-size: 11px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #696969c0;
    }
    .line {
      width: 100px;
      height: 20px;
      border-bottom: 1px solid #cececea1;
    }
  }
  .register {
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

    border-radius: 3px;
  }
  .register:hover {
    cursor: pointer;
  }
  .autologin {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    color: #696969c0;
    input {
      height: 15px;
      width: 15px;
    }
    span {
      font-size: 13px;
    }
  }
`;
