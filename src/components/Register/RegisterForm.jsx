import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import defaultPic from "../../img/kakaodefault.jpg";

function RegisterForm() {
  const navigate = useNavigate();
  //초기값
  const initialState = {
    email: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  };

  //유저 스테이트 생성
  const [user, setUser] = useState(initialState);
  const { email, password, nickname, passwordCheck } = user;

  //상태관리 위해 초기값 세팅
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [passCheckInput, setPassCheckInput] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");

  //유효성검사 통과 스테이트
  const [registerOk, setRegisterOk] = useState(false);

  //정규식
  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
  const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,16}$/;
  const regNickname = /^[ㄱ-ㅎ|가-힣]{2,6}$/;

  //유저스테이트 및 유효성 검사 스테이트
  const onChangeUserHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (name === "email") {
      !regEmail.test(value)
        ? setEmailInput("이메일 형식으로 입력해 주세요!")
        : setEmailInput("good");
    }
    if (name === "password") {
      !regPassword.test(value)
        ? setPassInput(`8~16자의 영문 대소문자와 숫자로 입력해주세요.
      특수문자(!@#$%^&*)도 사용 가능합니다.`)
        : setPassInput("good");
    }
    if (name === "nickname") {
      !regNickname.test(value)
        ? setNicknameInput("닉네임은 2-6자의 한글만 입력 가능합니다.")
        : setNicknameInput("good");
    }
    if (name === "passwordCheck") {
      password !== value
        ? setPassCheckInput("비밀번호가 불일치 합니다.")
        : setPassCheckInput("good");
    }
  };

  //useState의 비동기문제로 한박자 느리게 반응하는 것을 바로 반응하도록 useEffect사용
  useEffect(() => {
    if (
      regEmail.test(email) &&
      regPassword.test(password) &&
      regNickname.test(nickname) &&
      password === passwordCheck
    ) {
      return setRegisterOk(true);
    } else {
      return setRegisterOk(false);
    }
  }, [user]);

  //인풋값 재확인
  const onSubmitUserHandler = (e) => {
    e.preventDefault();
    if (
      !regEmail.test(email) ||
      !regPassword.test(password) ||
      !regNickname.test(nickname) ||
      password !== passwordCheck
    ) {
      return alert("아이디 비밀번호를 다시 확인해주세요");
    } else {
      alert("그렇지그렇지그렇지");
    }
  };

  return (
    <StContainer>
      <div className="pic">
        <img src={defaultPic} />
      </div>
      <input
        className="id"
        type="email"
        name="email"
        value={email}
        onChange={onChangeUserHandler}
        placeholder="아이디를 입력 하세요"
      />
      <span>{emailInput}</span>
      <input
        className="qw"
        type="password"
        name="password"
        value={password}
        onChange={onChangeUserHandler}
        placeholder="비밀번호를 입력 하세요"
      />
      <span>{passInput}</span>
      <input
        className="qw"
        type="password"
        name="passwordCheck"
        value={passwordCheck}
        onChange={onChangeUserHandler}
        placeholder="비밀번호를 다시 한번 입력 하세요"
      />
      <span>{passCheckInput}</span>
      <input
        className="nick"
        type="text"
        name="nickname"
        value={nickname}
        onChange={onChangeUserHandler}
        placeholder="닉네임을 입력 하세요"
      />
      <span>{nicknameInput}</span>
      <div
        className={registerOk ? "login-btn-isok" : "login-btn-isnot"}
        onClick={onSubmitUserHandler}
      >
        회원가입
      </div>
      <div className="go-login" onClick={() => navigate("/login")}>
        로그인 페이지로 이동
      </div>
    </StContainer>
  );
}
export default RegisterForm;

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
  .go-login {
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
    color: black;
    border-radius: 3px;
    cursor: pointer;
  }
`;
