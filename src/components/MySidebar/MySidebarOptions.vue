<template>
  <div class="sidebar-options">
    <button
      v-for="(tab, index) in $store.state.tabs"
      :key="index"
      class="btn btn-sidebar"
      @click="$store.dispatch('changeRoute', tab.route)"
    >
      <h4 class="sidebar-options-tab-name">{{ tab.name }}</h4>
    </button>
  </div>
</template>

<script>
export default {
  name: "MySidebarOptions",
  components: {},
  props: {},
};
</script>
