<template>
  <div class="pop-up-window-header">
    <MyPopUpWindowHeaderButtonClose />
    <!-- Avatar and Username -->
    <div class="ctn ctn-components-2">
      <!-- Avatar -->
      <div class="avatar-background">
        <img
          :src="'api/' + $store.state.cardToShow.avatarURL"
          v-if="$store.state.cardToShow.avatarURL"
          class="avatar"
          style="--size: 2.3rem"
        />
        <div class="icon-avatar" style="--size: 2.3rem" v-else></div>
      </div>
      <!-- /Avatar/ -->
      <!-- Username -->
      <h5>{{ $store.state.cardToShow.username }}</h5>
      <!-- /Username/ -->
    </div>
  </div>
</template>

<script>
import MyPopUpWindowHeaderButtonClose from "@/components/MyPopUpWindow/MyPopUpWindowHeaderButtonClose.vue";

export default {
  name: "MyPopUpWindowHeader",
  components: {
    MyPopUpWindowHeaderButtonClose,
  },
};
</script>
