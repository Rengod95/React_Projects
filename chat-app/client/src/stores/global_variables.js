const GV = (function () {
  const URL = "http://localhost:3000/";
  const HEADER = {
    register: "REGISTER_USER",
    login: "LOGIN_USER",
  };
  const defaultUserForm = {
    name: undefined,
    nickname: undefined,
    password: undefined,
    email: undefined,
    symbol_id: undefined,
  };

  return {
    getServerURL: () => URL, // URL 기본값
    getHeaders: () => HEADER,
    getDefaultUserForm: () => defaultUserForm,
  };
})();

export default GV;
