function isAuthenticated() {
  console.log("isAuthenticated function run");
  const token = window.localStorage.getItem("authToken");
  return !!token;
}

export default {
  isAuthenticated,
};
