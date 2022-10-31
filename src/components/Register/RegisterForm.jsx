import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import defaultPic from "../../img/kakaodefault.jpg";
import { __signup } from "../../Redux/module/user";

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //파일 인풋창 숨기고 버튼에 참조시키기 위해 선언
  let inputRef;

  //초기값
  const initialState = {
    username: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  };

  //image 스테이트
  const [image, setImage] = useState({
    image: "",
    previewUrl: "",
  });

  //image 온체인지
  const saveImage = (e) => {
    e.preventDefault();
    const previewUrl = URL.createObjectURL(e.target.files[0]);
    setImage({ image: e.target.files[0], previewUrl: previewUrl });
  };

  //유저 스테이트 생성
  const [user, setUser] = useState(initialState);
  const { username, password, nickname, passwordCheck, status } = user;

  //상태관리 위해 초기값 세팅
  const [usernameInput, setUsernameInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [passCheckInput, setPassCheckInput] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");
  const [statusInput, setStatusInput] = useState("");

  //유효성검사 통과 스테이트
  const [registerOk, setRegisterOk] = useState(false);

  //정규식
  const regUsername = /^[a-z0-9]{4,12}$/;
  const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,16}$/;
  const regNickname = /^[ㄱ-ㅎ|가-힣]{2,6}$/;

  //유저스테이트 및 유효성 검사 스테이트
  const onChangeUserHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (name === "username") {
      !regUsername.test(value)
        ? setUsernameInput("4~12자의 영문 소문자와 숫자로 입력해주세요.")
        : setUsernameInput("good");
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
    if (name === "status") {
      !status
        ? setStatusInput("상태메시지를 입력하세요")
        : setStatusInput("good");
    }
  };

  //useState의 비동기문제로 한박자 느리게 반응하는 것을 바로 반응하도록 useEffect사용
  useEffect(() => {
    if (
      regUsername.test(username) &&
      regPassword.test(password) &&
      regNickname.test(nickname) &&
      password === passwordCheck &&
      status
    ) {
      return setRegisterOk(true);
    } else {
      return setRegisterOk(false);
    }
  }, [user]);

  //인풋값 재확인 및 포스트 요청
  const onSubmitUserHandler = (e) => {
    e.preventDefault();

    //입력이 틀리면 전송되지 않도록 설정
    if (!regUsername.test(username)) {
      return alert("아이디를 확인하세요!");
    }
    if (!regPassword.test(password)) {
      return alert(
        "비밀번호를 재설정 하세요!\n8~16자의 영문 대소문자, 숫자, 특수문자"
      );
    }
    if (password !== passwordCheck) {
      return alert("비밀번호가 다릅니다! 재입력 해주세요!");
    }
    if (!regNickname.test(nickname)) {
      return alert("닉네임을 다시 설정 하세요!");
    }

    if (status.length === 0) {
      return alert("상태메시지를 입력해주세요!");
    } else {
      const formdata = new FormData();
      formdata.append("username", user.username);
      formdata.append("nickname", user.nickname);
      formdata.append("status", user.status);
      formdata.append("password", user.password);
      formdata.append("passwordCheck", user.passwordCheck);
      formdata.append("file", image.image);
      dispatch(__signup(formdata));
      alert("그렇지그렇지그렇지");
    }
  };

  return (
    <StContainer>
      <div className="pic" onClick={() => inputRef.click()}>
        {!image.image ? (
          <img src={defaultPic} alt="default" />
        ) : (
          <img src={image?.previewUrl} alt="upload" />
        )}
      </div>
      <input
        className="img-input"
        type="file"
        accept="image/*"
        name="image_file"
        onChange={saveImage}
        //인풋을 안보이게하고 버튼에 레퍼런스 입력함
        ref={(refParam) => (inputRef = refParam)}
      />
      <input
        className="id"
        type="text"
        name="username"
        value={username}
        onChange={onChangeUserHandler}
        placeholder="아이디를 입력 하세요"
      />
      <span>{usernameInput}</span>
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
      <input
        className="status"
        type="text"
        name="status"
        value={status}
        onChange={onChangeUserHandler}
        maxLength="20"
        placeholder="상태메시지를 설정 하세요(20글자이내)"
      />
      <span>{statusInput}</span>
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
  .img-input {
    display: none;
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
    padding-left: 10px;
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
