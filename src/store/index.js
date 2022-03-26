import { createStore } from "vuex";

export default createStore({
  state: {
    signedIn: true,
    userInfo: {
      username: "FluffyPony",
      avatarUrl: "",
    },
    sidebarOpened: false,
    tabs: [
      {
        name: "All Cards",
        route: "./allcards",
      },
      {
        name: "My Cards",
        route: "./mycards",
      },
      {
        name: "Settings",
        route: "./settings",
      },
    ],
    currentRoute: "",
  },
  getters: {},
  mutations: {
    changeSignedIn(state, signedIn) {
      state.signedIn = signedIn;
    },
    changeUsername(state, newUsername) {
      state.userInfo.username = newUsername;
    },
    changeAvatarUrl(state, newAvatarUrl) {
      state.userInfo.avatarUrl = newAvatarUrl;
    },
    changeSidebarOpened(state, newSidebarOpened) {
      state.sidebarOpened = newSidebarOpened;
    },
    changeRoute(state, newRoute) {
      state.route = newRoute;
    },
  },
  actions: {
    signIn({ commit }, username, password) {
      // Call sign in api with username and password.
      let avatarUrl = "";
      console.log(username, password);
      commit("changeSignedIn", true);
      commit("changeUsername", username);
      commit("changeAvatarUrl", avatarUrl);
    },
    signOut({ commit }) {
      // Call sign out api.
      commit("changeSignedIn", false);
      commit("changeUsername", "");
      commit("changeAvatarUrl", "");
    },
    openSidebar({ commit }) {
      commit("changeSidebarOpened", true);
    },
    closeSidebar({ commit }) {
      commit("changeSidebarOpened", false);
    },
    changeRoute({ commit }, newRoute) {
      // this.$router.push(newRoute);
      commit("changeRoute", newRoute);
    },
  },
  modules: {},
});
