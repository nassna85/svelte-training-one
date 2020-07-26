import { writable } from "svelte/store";
import authAPI from "../services/authAPI";

const isAuthenticated = writable(authAPI.isAuthenticated());

const customAuthStore = {
  subscribe: isAuthenticated.subscribe,
  toggleAuth: (value) => {
    const token = window.localStorage.getItem("authToken");
    if (value === true && token) {
      isAuthenticated.update((storeValue) => {
        return (storeValue = value);
      });
    } else {
      isAuthenticated.update((storeValue) => {
        return (storeValue = false);
      });
    }
  },
};

export default customAuthStore;
