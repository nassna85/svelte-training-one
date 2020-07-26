import axios from "axios";
import { API_POSTS } from "../config";

function getAllPosts() {
  return axios.get(API_POSTS).then((response) => response.data);
}

function getPost(id) {
  return axios.get(API_POSTS + "/" + id).then((response) => response.data);
}

export default {
  getAllPosts,
  getPost,
};
