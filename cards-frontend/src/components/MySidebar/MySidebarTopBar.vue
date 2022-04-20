<template>
  <div class="sidebar-top-bar">
    <div class="ctn ctn-components-2">
      <MySidebarButtonBack />
      <h4 class="logo">Menu</h4>
    </div>
  </div>
</template>

<script>
import MySidebarButtonBack from "./MySidebarButtonBack.vue";

export default {
  name: "MySidebarTopBar",
  components: {
    MySidebarButtonBack,
  },
  props: {},
};
</script>
