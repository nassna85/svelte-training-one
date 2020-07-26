import { writable } from "svelte/store";

const posts = writable([]);

const customPostStore = {
  subscribe: posts.subscribe,
  setPosts: (items) => {
    posts.set(items);
  },
  addPost: (post) => {
    posts.update((items) => {
      return items.concat(post);
    });
  },
};

export default customPostStore;
