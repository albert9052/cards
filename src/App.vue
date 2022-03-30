<template>
  <MyTopBar />
  <router-view />
  <MyGrayOverlay />
  <MyPopUpWindow />
  <MySidebar />
</template>

<script>
import MyTopBar from "./components/MyTopBar/MyTopBar.vue";
import MySidebar from "./components/MySidebar/MySidebar.vue";
import MyGrayOverlay from "./components/MyGrayOverlay/MyGrayOverlay.vue";
import MyPopUpWindow from "@/components/MyPopUpWindow/MyPopUpWindow.vue";

export default {
  name: "App",
  components: {
    MyTopBar,
    MySidebar,
    MyGrayOverlay,
    MyPopUpWindow,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
#app {
  position: relative;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
