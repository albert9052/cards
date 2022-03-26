<template>
  <div class="top-bar">
    <div class="ctn ctn-components-2">
      <TopBarButtonMenu />
      <TopBarButtonLogo />
    </div>
    <div class="ctn ctn-components-2" v-if="$store.state.signedIn">
      <!-- Avatar and Username -->
      <div class="ctn ctn-components-2">
        <!-- Avatar -->
        <div class="avatar-background">
          <img
            :src="$store.state.userInfo.avatar"
            v-if="$store.state.userInfo.avatar"
          />
          <div class="avatar" v-else></div>
        </div>
        <!-- /Avatar/ -->
        <!-- Username -->
        <h5>{{ $store.state.userInfo.username }}</h5>
        <!-- /Username/ -->
      </div>
      <!-- /Avatar and Username/ -->
      <!-- Sign Out Button -->
      <TopBarButtonSignOut />
      <!-- /Sign Out Button/ -->
    </div>
    <div class="ctn ctn-components-2" v-else>
      <TopBarButtonSignIn />
      <TopBarButtonSignUp />
    </div>
  </div>
</template>

<script>
import TopBarButtonMenu from "@/TopBarButtonMenu.vue";
import TopBarButtonLogo from "@/TopBarButtonLogo.vue";
import TopBarButtonSignIn from "@/TopBarButtonSignIn.vue";
import TopBarButtonSignOut from "@/TopBarButtonSignOut.vue";
import TopBarButtonSignUp from "@/TopBarButtonSignUp.vue";

export default {
  name: "TopBar",
  components: {
    TopBarButtonMenu,
    TopBarButtonLogo,
    TopBarButtonSignIn,
    TopBarButtonSignOut,
    TopBarButtonSignUp,
  },
  props: {},
};
</script>
