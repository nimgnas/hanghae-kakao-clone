import axios from "axios";

const api = axios.create({
  baseURL: "http://43.201.71.248",
});

// TODO: 로컬/세션 어느곳에 저장할지 정할것!

// api요청 주소가 login 또는 singup이 아닐 경우 로컬스토리지에 존재하는  access token 토큰을 가져온다.
// 가져온 토큰을 요청 headers에 담는다.
api.interceptors.request.use(
  function (config) {
    if (config.url !== "/login" || config.url !== "/signup") {
      config.headers.Access_Token = localStorage.getItem("Access_Token");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// api요청 주소가 login일 경우 access token과 refresh token을 받아 로컬스토리지에 저장해준다.
api.interceptors.response.use(
  function (response) {
    console.log(response);
    if (response.config.url === "signin" && response.data.success) {
      localStorage.setItem("access_token", response.headers.access_token);
      localStorage.setItem("refresh_token", response.headers.refresh_token);
    }
    return response;
  },

  function (error) {
    return Promise.reject(error.response.data.error);
  }
);

export default api;
