export default {
  API_ENDPOINT:
    process.env.REACT_APP_BASE_URL || `http://localhost:8000/migraine`,
  TOKEN_KEY: "migraine-token"
};
