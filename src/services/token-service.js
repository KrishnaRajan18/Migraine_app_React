import config from "../config";

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(email, password) {
    return window.btoa(`${email}:${password}`);
  },
  saveUserId(userId) {
    return window.sessionStorage.setItem("user_id", userId);
  },
  getUserId(userId) {
    return window.sessionStorage.getItem("user_id", userId);
  },
  saveUserName(userName) {
    return window.sessionStorage.setItem("user_name", userName);
  },
  getUserName(userName) {
    return window.sessionStorage.getItem("user_name", userName);
  }
};

export default TokenService;
