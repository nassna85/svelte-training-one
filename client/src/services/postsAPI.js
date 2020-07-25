import axios from "axios";
import { API_POSTS } from "../config";

function getAllPosts() {
  return axios.get(API_POSTS).then((response) => response.data);
}

export default {
  getAllPosts,
};
