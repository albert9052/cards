<template>
  <div class="top-bar">
    <div class="ctn ctn-components-2">
      <MyTopBarButtonMenu />
      <MyTopBarButtonLogo />
    </div>
    <div class="ctn ctn-components-2" v-if="$store.state.signedIn">
      <!-- Avatar and Username -->
      <div class="ctn ctn-components-2">
        <!-- Avatar -->
        <div class="avatar-background">
          <img
            :src="'api/' + $store.state.userInfo.avatarURL"
            v-if="$store.state.userInfo.avatarURL"
            class="avatar"
            style="--size: 2.6rem"
          />
          <div class="icon-avatar" style="--size: 2.6rem" v-else></div>
        </div>
        <!-- /Avatar/ -->
        <!-- Username -->
        <h5 class="top-bar-username">{{ $store.state.userInfo.username }}</h5>
        <!-- /Username/ -->
      </div>
      <!-- /Avatar and Username/ -->
      <!-- Sign Out Button -->
      <MyTopBarButtonSignOut />
      <!-- /Sign Out Button/ -->
    </div>
    <div
      class="ctn ctn-components-2"
      v-if="
        !$store.state.signedIn &&
        $store.state.currentRoute != 'signin' &&
        $store.state.currentRoute != 'signup'
      "
    >
      <MyTopBarButtonSignIn />
      <MyTopBarButtonSignUp />
    </div>
  </div>
</template>

<script>
import MyTopBarButtonMenu from "./MyTopBarButtonMenu.vue";
import MyTopBarButtonLogo from "./MyTopBarButtonLogo.vue";
import MyTopBarButtonSignIn from "./MyTopBarButtonSignIn.vue";
import MyTopBarButtonSignOut from "./MyTopBarButtonSignOut.vue";
import MyTopBarButtonSignUp from "./MyTopBarButtonSignUp.vue";

export default {
  name: "MyTopBar",
  components: {
    MyTopBarButtonMenu,
    MyTopBarButtonLogo,
    MyTopBarButtonSignIn,
    MyTopBarButtonSignOut,
    MyTopBarButtonSignUp,
  },
  props: {},
};
</script>
