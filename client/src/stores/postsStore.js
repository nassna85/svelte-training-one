import { writable } from "svelte/store";

const posts = writable([]);

const customPostStore = {
  subscribe: posts.subscribe,
  setPosts: (items) => {
    posts.set(items);
  },
  getPost: (id) => {
    console.log(id);
    return posts.filter((item) => item.id === id);
  },
};

export default customPostStore;
