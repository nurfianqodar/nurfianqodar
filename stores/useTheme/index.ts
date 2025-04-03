import { defineStore } from "pinia";

const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: useCookie("theme", { default: () => "light" }).value,
  }),

  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      useCookie("theme").value = this.theme;
    },
  },
});

export default useThemeStore;
