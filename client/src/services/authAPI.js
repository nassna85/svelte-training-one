function isAuthenticated() {
  const token = window.localStorage.getItem("authToken");
  return !!token;
}

export default {
  isAuthenticated,
};
