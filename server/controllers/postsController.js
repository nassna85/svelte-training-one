require("dotenv").config();
const axios = require("axios");

const getAllPosts = async (req, res) => {
  try {
    const posts = await axios.get(process.env.API_URL_PLACEHOLDER);
    if (posts.length === 0)
      return res.status(404).json({ msg: "Posts Not Found" });
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error Server" });
  }
};

module.exports = {
  getAllPosts,
};
