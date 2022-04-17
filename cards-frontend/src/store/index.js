import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    signedIn: false,
    userInfo: {
      username: "FluffyPony",
      avatarUrl: "",
    },
    sidebarOpened: false,
    tabs: [
      {
        name: "All Cards",
        route: "/allcards",
      },
      {
        name: "My Cards",
        route: "/mycards",
      },
      {
        name: "Settings",
        route: "/settings",
      },
    ],
    currentRoute: "",
    cardsPageTitle: "All Cards",
    cards: [
      {
        username: "FluffyPony",
        avatarUrl: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentUrl: "haha",
      },
      {
        username: "Albert Cheng",
        avatarUrl: "",
        content:
          "This is an artical. yyyyyy yyyyyyy y yyyyy yyyyyyyyy yyyyyy yyy yyyy yyyyyyy yyy yyy yyyyy yy yyyyyyyyy. ",
        hearts: 0,
        attachmentUrl: "",
      },
      {
        username: "FluffyPony",
        avatarUrl: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentUrl: "",
      },
      {
        username: "FluffyPony",
        avatarUrl: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentUrl: "",
      },
      {
        username: "FluffyPony",
        avatarUrl: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentUrl: "",
      },
      {
        username: "FluffyPony",
        avatarUrl: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentUrl: "",
      },
      {
        username: "FluffyPony",
        avatarUrl: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentUrl: "",
      },
      {
        username: "FluffyPony",
        avatarUrl: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentUrl: "",
      },
      {
        username: "FluffyPony",
        avatarUrl: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentUrl: "",
      },
    ],
    cardToShow: {
      author: "FluffyPony",
      avatarUrl: "",
      content:
        "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
      hearts: 0,
    },
    showPopUpWindow: false,
    showGrayOverlay: false,
    mode: "edit",
    tempParameters: {
      username: "",
      password: "",
      confirmPassword: "",
    },
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
      state.currentRoute = newRoute;
    },
    changeCardsPageTitle(state, newTitle) {
      state.cardsPageTitle = newTitle;
    },
    changeShowPopUpWindow(state, newShowPopUpWIndow) {
      state.showPopUpWindow = newShowPopUpWIndow;
    },
    changeCardToShow(state, newCardToShow) {
      state.cardToShow = newCardToShow;
    },
    changeCardsToShowContent(state, newContent) {
      state.cardToShow.content = newContent;
    },
    changeShowGrayOverlay(state, newShowGrayOverlay) {
      state.showGrayOverlay = newShowGrayOverlay;
    },
    changeMode(state, newMode) {
      state.mode = newMode;
    },
    changeTempUsername(state, newUsername) {
      state.tempParameters.username = newUsername;
    },
    changeTempPassword(state, newPassword) {
      state.tempParameters.password = newPassword;
    },
    changeTempConfirmPassword(state, newConfirmPassword) {
      state.tempParameters.confirmPassword = newConfirmPassword;
    },
  },
  actions: {
    signIn({ state, commit, dispatch }) {
      let avatarUrl = "";
      let username = state.tempParameters.username;
      let password = state.tempParameters.password;
      // Call sign in api with username and password.
      alert(username + " / " + password);
      commit("changeSignedIn", true);
      commit("changeUsername", username);
      commit("changeAvatarUrl", avatarUrl);
      commit("changeTempUsername", "");
      commit("changeTempPassword", "");
      dispatch("changeRoute", { route: "/allcards", name: "All Cards" });
    },
    signUp({ state, commit, dispatch }) {
      let avatarUrl = "";
      let username = state.tempParameters.username;
      let password = state.tempParameters.password;
      let confirmPassword = state.tempParameters.confirmPassword;
      if (password != confirmPassword) {
        alert("The password and the confirm password don't matched. ");
        commit("changeTempPassword", "");
        commit("changeTempConfirmPassword", "");
      } else {
        // Call sign up api with username and password.
        alert(username + " / " + password);
        commit("changeSignedIn", true);
        commit("changeUsername", username);
        commit("changeAvatarUrl", avatarUrl);
        dispatch("changeRoute", { route: "/allcards", name: "All Cards" });
      }
    },
    signOut({ commit }) {
      // Call sign out api.
      commit("changeSignedIn", false);
      commit("changeUsername", "");
      commit("changeAvatarUrl", "");
    },
    openSidebar({ commit }) {
      commit("changeSidebarOpened", true);
      commit("changeShowGrayOverlay", true);
    },
    closeSidebar({ commit }) {
      commit("changeSidebarOpened", false);
      commit("changeShowGrayOverlay", false);
    },
    changeRoute({ commit }, newTab) {
      router.push(newTab.route);
      commit("changeRoute", newTab.route);
      commit("changeSidebarOpened", false);
      commit("changeShowGrayOverlay", false);
      commit("changeCardsPageTitle", newTab.name);
    },
    updateRoute({ commit }, newTab) {
      commit("changeRoute", newTab.route);
      commit("changeCardsPageTitle", newTab.name);
    },
    updateCurrentRoute({ commit }, currentRoute) {
      commit("changeRoute", currentRoute);
    },
    openPopUpWindow({ state, commit }, cardInformation) {
      commit("changeShowPopUpWindow", true);
      commit("changeShowGrayOverlay", true);
      commit("changeCardToShow", cardInformation);
      console.log(state.currentRoute);
      if (state.currentRoute == "/mycards") {
        commit("changeMode", "edit");
      } else if (state.currentRoute == "/allcards") {
        commit("changeMode", "read");
      }
    },
    closePopUpWindow({ state, commit }) {
      commit("changeShowPopUpWindow", false);
      commit("changeShowGrayOverlay", false);
      if (state.currentRoute == "/mycards") {
        commit("changeMode", "edit");
      } else if (state.currentRoute == "/allcards") {
        commit("changeMode", "read");
      }
    },
    changeCardToShow({ commit }, newCardToShow) {
      commit("changeCardToShow", newCardToShow);
    },
    changeCardsToShowContent({ commit }, newContent) {
      commit("changeCardToShowContent", newContent);
    },
    closeEverything({ dispatch }) {
      dispatch("closePopUpWindow");
      dispatch("closeSidebar");
    },
    switchModeToEdit({ commit }) {
      commit("changeMode", "edit");
    },
    switchModeToRead({ commit }) {
      commit("changeMode", "read");
    },
    createNewCard({ state, commit }) {
      let emptyCard = {
        username: state.userInfo.username,
        avatarUrl: state.userInfo.avatarUrl,
        content: "",
        hearts: 0,
        attachmentUrl: "",
      };
      commit("changeCardToShow", emptyCard);
      commit("changeMode", "edit");
      commit("changeShowPopUpWindow", true);
      commit("changeShowGrayOverlay", true);
    },
    changeTempUsername({ commit }, newUsername) {
      commit("changeTempUsername", newUsername);
    },
    changeTempPassword({ commit }, newPassword) {
      commit("changeTempPassword", newPassword);
    },
    changeTempConfirmPassword({ commit }, newConfirmPassword) {
      commit("changeTempConfirmPassword", newConfirmPassword);
    },
  },
  modules: {},
});
