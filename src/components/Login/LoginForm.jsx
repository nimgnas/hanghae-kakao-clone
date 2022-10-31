import { useState } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const [loginToggle, setLoginToggle] = useState(true);
  const navigate = useNavigate();
  //초기값
  const initialState = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);

  //로그인에 필요한 인풋값 유저스테이트에 저장
  const onChangeLoginHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  //로그인요청 (dispatch 만들 때 아이디 비밀번호오류나면 로그인 안되게 만들어야함)
  const onClickHandler = () => {
    if (user.email.trim() === "" || user.password.trim() === "") {
      alert("입력하세요!");
    }
  };

  return (
    <StMidContain>
      <RiKakaoTalkFill size={110} color={"var(--color-kakaologo)"} />
      <input
        className="id"
        type="email"
        name="email"
        placeholder="아이디"
        required
        onChange={onChangeLoginHandler}
      />
      <input
        className="pw"
        type="password"
        name="password"
        placeholder="비밀번호"
        required
        onChange={onChangeLoginHandler}
      />
      <div
        onClick={onClickHandler}
        className={loginToggle ? "login-btn-isnot" : "login-btn-isok"}
      >
        로그인
      </div>
      <div className="or-contain">
        <div className="line" />
        <p>또는</p>
        <div className="line" />
      </div>
      <div className="register" onClick={() => navigate("/register")}>
        회원가입
      </div>

      <div className="autologin">
        <input type="checkbox" />
        <span>자동로그인 </span>
        <AiOutlineInfoCircle />
      </div>
    </StMidContain>
  );
}
export default LoginForm;

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
