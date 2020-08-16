import { writable } from "svelte/store";
import authAPI from "../services/authAPI";

const isAuthenticated = writable(authAPI.isAuthenticated());

const customAuthStore = {
  subscribe: isAuthenticated.subscribe,
  toggleAuth: (value) => {
    isAuthenticated.update((storeValue) => {
      return (storeValue = value);
    });
  },
};

export default customAuthStore;
