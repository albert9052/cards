import { createStore } from "vuex";
import router from "../router";
import axios from "axios";

export default createStore({
  state: {
    signedIn: false,
    userInfo: {
      username: "FluffyPony",
      avatarURL: "",
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
        avatarURL: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentURL: "haha",
      },
      {
        username: "Albert Cheng",
        avatarURL: "",
        content:
          "This is an artical. yyyyyy yyyyyyy y yyyyy yyyyyyyyy yyyyyy yyy yyyy yyyyyyy yyy yyy yyyyy yy yyyyyyyyy. ",
        hearts: 0,
        attachmentURL: "",
      },
      {
        username: "FluffyPony",
        avatarURL: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentURL: "",
      },
      {
        username: "FluffyPony",
        avatarURL: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentURL: "",
      },
      {
        username: "FluffyPony",
        avatarURL: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentURL: "",
      },
      {
        username: "FluffyPony",
        avatarURL: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentURL: "",
      },
      {
        username: "FluffyPony",
        avatarURL: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentURL: "",
      },
      {
        username: "FluffyPony",
        avatarURL: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentURL: "",
      },
      {
        username: "FluffyPony",
        avatarURL: "",
        content:
          "This is an artical. xxxxxx xxxxxxx x xxxxx xxxxxxxxx xxxxxx xxx xxxx xxxxxxx xxx xxx xxxxx xx xxxxxxxxx. ",
        hearts: 0,
        attachmentURL: "",
      },
    ],
    cardToShow: {
      username: "FluffyPony",
      avatarURL: "",
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
      avatarFile: null,
      avatarURL: "",
      attachmentFile: null,
    },
    admin: {
      account: "",
      password: "",
      signedIn: false,
    },
    uploading: {
      avatarURL: false,
      avatarFile: false,
    },
    title: "",
  },
  getters: {},
  mutations: {
    changeSignedIn(state, signedIn) {
      state.signedIn = signedIn;
    },
    changeUsername(state, newUsername) {
      state.userInfo.username = newUsername;
    },
    changeAvatarURL(state, newAvatarURL) {
      state.userInfo.avatarURL = newAvatarURL;
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
    changeCardToShowContent(state, newContent) {
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
    changeTempAvatarFile(state, newAvatarFile) {
      state.tempParameters.avatarFile = newAvatarFile;
    },
    changeTempAvatarURL(state, newAvatarURL) {
      state.tempParameters.avatarURL = newAvatarURL;
    },
    changeTempAttachmentFile(state, newAttachmentFile) {
      state.tempParameters.attachmentFile = newAttachmentFile;
    },
    changeAdminAccount(state, newAccount) {
      state.admin.account = newAccount;
    },
    changeAdminPassword(state, newPassword) {
      state.admin.password = newPassword;
    },
    changeAdminSignedIn(state, newSignedIn) {
      state.admin.signedIn = newSignedIn;
    },
    changeCards(state, newCards) {
      state.cards = newCards;
    },
    changeUploadingAvatarURL(state, newValue) {
      state.uploading.avatarURL = newValue;
    },
    changeUploadingAvatarFile(state, newValue) {
      state.uploading.avatarFile = newValue;
    },
    changeTitle(state, newTitle) {
      state.title = newTitle;
    },
  },
  actions: {
    async signIn({ state, commit, dispatch }) {
      let username = state.tempParameters.username;
      let password = state.tempParameters.password;
      // Call sign in api with username and password.
      try {
        await axios({
          method: "POST",
          url: "/api/RestController.php",
          data: {
            user: "signIn",
            username: username,
            password: password,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        let response = await axios({
          method: "GET",
          url: "/api/RestController.php",
          params: {
            user: "information",
          },
        });
        commit("changeSignedIn", true);
        commit("changeUsername", response.data["username"]);
        commit("changeAvatarURL", response.data["avatarURL"]);
        dispatch("changeRoute", { route: "/allcards", name: "All Cards" });
      } catch (error) {
        commit("changeTempUsername", "");
        commit("changeTempPassword", "");
        alert(error.response.data["error"]);
      }
    },
    async signInAsAdmin({ state, commit }) {
      let account = state.admin.account;
      let password = state.admin.password;
      // Call sign in api with username and password.
      try {
        await axios({
          method: "POST",
          url: "/api/RestController.php",
          data: {
            user: "signInAsAdmin",
            account: account,
            password: password,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        let response = await axios({
          method: "GET",
          url: "/api/RestController.php",
          params: {
            site: "title",
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        commit("changeTitle", response.data["title"]);
        commit("changeAdminSignedIn", true);
      } catch (error) {
        commit("changeAdminAccount", "");
        commit("changeAdminPassword", "");
        alert(error.response.data["error"]);
      }
    },
    async verifyJWT({ commit }) {
      try {
        await axios({
          method: "GET",
          url: "/api/RestController.php",
          params: {
            user: "verifyJWT",
          },
        });
        let response = await axios({
          method: "GET",
          url: "/api/RestController.php",
          params: {
            user: "information",
          },
        });
        commit("changeSignedIn", true);
        commit("changeUsername", response.data["username"]);
        commit("changeAvatarURL", response.data["avatarURL"]);
        return true;
      } catch (error) {
        commit("changeSignedIn", false);
        commit("changeUsername", "");
        commit("changeAvatarURL", "");
        //console.log(error.response);
        return false;
      }
    },
    async getInformation({ commit }) {
      try {
        let response = await axios({
          method: "GET",
          url: "/api/RestController.php",
          params: {
            user: "information",
          },
        });
        commit("changeSignedIn", true);
        commit("changeUsername", response.data["username"]);
        commit("changeAvatarURL", response.data["avatarURL"]);
      } catch (error) {
        commit("changeSignedIn", false);
        commit("changeUsername", "");
        commit("changeAvatarURL", "");
        //console.log(error.response);
      }
    },
    async signUp({ state, commit, dispatch }) {
      let username = state.tempParameters.username;
      let password = state.tempParameters.password;
      let confirmPassword = state.tempParameters.confirmPassword;
      if (password != confirmPassword) {
        alert("The password and the confirm password don't matched. ");
        commit("changeTempPassword", "");
        commit("changeTempConfirmPassword", "");
      } else {
        // Call sign up api with username and password.
        try {
          await axios({
            method: "POST",
            url: "/api/RestController.php",
            data: {
              user: "signUp",
              username: username,
              password: password,
            },
            headers: {
              "Content-Type": "application/json",
            },
          });
          alert("Signing up success!");
          dispatch("changeRoute", { route: "/signin", name: "Sign In" });
        } catch (error) {
          commit("changeTempUsername", "");
          commit("changeTempPassword", "");
          commit("changeTempConfirmPassword", "");
          alert(error.response.data["error"]);
        }
      }
    },
    async signOut({ commit, dispatch }) {
      // Call sign out api.

      commit("changeSignedIn", false);
      commit("changeUsername", "");
      commit("changeAvatarURL", "");
      try {
        await axios({
          method: "POST",
          url: "/api/RestController.php",
          data: {
            user: "signOut",
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        dispatch("changeRoute", {
          route: "/landingpage",
          name: "Landing Page",
        });
      } catch (error) {
        alert(error.response.data["error"]);
      }
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
    openPopUpWindow({ commit }, cardInformation) {
      commit("changeShowPopUpWindow", true);
      commit("changeShowGrayOverlay", true);
      commit("changeCardToShow", cardInformation);
      if (router.currentRoute._value.fullPath == "/mycards") {
        commit("changeMode", "edit");
        // There's no edit mode so far.
        commit("changeMode", "read");
      } else if (router.currentRoute._value.fullPath == "/allcards") {
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
    changeCardToShowContent({ commit }, newContent) {
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
        avatarURL: state.userInfo.avatarURL,
        content: "",
        hearts: 0,
        attachmentURL: "",
      };
      commit("changeCardToShow", emptyCard);
      commit("changeMode", "edit");
      commit("changeShowPopUpWindow", true);
      commit("changeShowGrayOverlay", true);
      document.getElementById("attachment-file-upload").value = "";
      commit("changeTempAttachmentFile", null);
    },
    async uploadCard({ state, commit, dispatch }) {
      let formData = new FormData();
      formData.append("attachment", state.tempParameters.attachmentFile);
      formData.append("card", "new");
      formData.append("content", state.cardToShow.content);
      try {
        await axios({
          method: "POST",
          url: "/api/RestController.php",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        document.getElementById("attachment-file-upload").value = "";
        commit("changeTempAttachmentFile", null);
        commit("changeShowPopUpWindow", false);
        commit("changeShowGrayOverlay", false);
        if (router.currentRoute._value.fullPath == "/allcards") {
          dispatch("getAllCards");
        } else if (router.currentRoute._value.fullPath == "/mycards") {
          dispatch("getMyCards");
        }
        //console.log(response);
        alert("Adding card success!");
      } catch (error) {
        //console.log(error.response);
        alert(error.response.data["error"]);
      }
    },
    async deleteCard({ dispatch }, cardID) {
      try {
        await axios({
          method: "DELETE",
          url: "/api/RestController.php",
          data: {
            card: "delete",
            cardID: cardID,
          },
          headers: {
            "Content-Type": "application/java",
          },
        });
        if (router.currentRoute._value.fullPath == "/allcards") {
          dispatch("getAllCards");
        } else if (router.currentRoute._value.fullPath == "/mycards") {
          dispatch("getMyCards");
        }
        alert("Deleting card success!");
      } catch (error) {
        alert(error.response.data["error"]);
      }
    },
    async getAllCards({ commit }) {
      commit("changeCards", []);
      try {
        let response = await axios({
          method: "GET",
          url: "/api/RestController.php",
          params: {
            card: "all",
          },
        });
        commit("changeCards", response.data);
      } catch (error) {
        alert(error.response.data["error"]);
        commit("changeCards", []);
      }
    },
    async getMyCards({ commit }) {
      commit("changeCards", []);
      try {
        let response = await axios({
          method: "GET",
          url: "/api/RestController.php",
          params: {
            card: "my",
          },
        });
        commit("changeCards", response.data);
      } catch (error) {
        alert(error.response.data["error"]);
        commit("changeCards", []);
      }
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
    changeTempAvatarFile({ commit }, newFile) {
      commit("changeTempAvatarFile", newFile);
    },
    changeTempAvatarURL({ commit }, newFile) {
      commit("changeTempAvatarURL", newFile);
    },
    changeTempAttachmentFile({ commit }, newFile) {
      commit("changeTempAttachmentFile", newFile);
    },
    changeAdminAccount({ commit }, newAccount) {
      commit("changeAdminAccount", newAccount);
    },
    changeAdminPassword({ commit }, newPassword) {
      commit("changeAdminPassword", newPassword);
    },
    async uploadTempAvatarFile({ state, commit, dispatch }) {
      commit("changeUploadingAvatarFile", true);
      let formData = new FormData();
      formData.append("avatar", state.tempParameters.avatarFile);
      formData.append("user", "avatar");
      try {
        await axios({
          method: "POST",
          url: "/api/RestController.php",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        document.getElementById("avatar-file-upload").value = "";
        commit("changeTempAvatarFile", null);
        dispatch("getInformation");
        alert("Upload avatar success!");
      } catch (error) {
        alert(
          "Upload avatar failed! Please sign in again and try again later!"
        );
        //console.log(error.response.data["error"]);
      }
      commit("changeUploadingAvatarFile", false);
    },
    async uploadTempAvatarURL({ state, commit, dispatch }) {
      commit("changeUploadingAvatarURL", true);
      try {
        await axios({
          method: "POST",
          url: "/api/RestController.php",
          data: {
            user: "uploadAvatarURL",
            avatarURL: state.tempParameters.avatarURL,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert("Upload avatar success!");
        dispatch("getInformation");
      } catch (error) {
        alert(
          "Upload avatar failed! Please sign in again and try again later!"
        );
        //console.log(error.response.data["error"]);
      }
      commit("changeUploadingAvatarURL", false);
      commit("changeTempAvatarURL", "");
    },
    async downloadAttachment({ state }) {
      try {
        let response = await axios({
          method: "POST",
          url: "/api/RestController.php",
          data: {
            card: "downloadAttachment",
            cardID: state.cardToShow.cardID,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });

        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");

        let filename = response.headers["content-disposition"]
          .split("filename=")[1]
          .split(".")[0];
        let extension = response.headers["content-disposition"]
          .split(".")[1]
          .split(";")[0];
        fileLink.href = fileURL;
        //console.log(filename + extension);
        fileLink.setAttribute("download", filename + "." + extension);
        document.body.appendChild(fileLink);

        fileLink.click();
      } catch (error) {
        alert(
          "Download attachment failed! Please sign in again and try again later!"
        );
        //console.log(error.response.data["error"]);
      }
    },
    async getTitle({ commit }) {
      try {
        let response = await axios({
          method: "GET",
          url: "/api/RestController.php",
          params: {
            site: "title",
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        commit("changeTitle", response.data["title"]);
      } catch (error) {
        //console.log(error.response.data["error"]);
      }
    },
    changeTitle({ commit }, newTitle) {
      commit("changeTitle", newTitle);
    },
    async updateTitle({ state }) {
      try {
        await axios({
          method: "POST",
          url: "/api/RestController.php",
          data: {
            site: "updateTitle",
            account: state.admin.account,
            password: state.admin.password,
            title: state.title,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert("Updating Title Success!");
      } catch (error) {
        alert(error.response.data["error"]);
      }
    },
  },
  modules: {},
});
