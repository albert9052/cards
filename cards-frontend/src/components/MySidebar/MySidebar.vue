<template>
  <div class="sidebar" v-show="$store.state.sidebarOpened">
    <MySidebarTopBar />
    <hr class="sidebar-splitter" />
    <MySidebarOptions />
  </div>
</template>

<script>
import MySidebarTopBar from "./MySidebarTopBar.vue";
import MySidebarOptions from "./MySidebarOptions.vue";

export default {
  name: "MySidebar",
  components: {
    MySidebarTopBar,
    MySidebarOptions,
  },
  props: {},
};
</script>
