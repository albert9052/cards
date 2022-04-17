<template>
  <button
    class="btn btn-icon top-bar-button-menu"
    @click="$store.dispatch('openSidebar')"
    v-show="$store.state.signedIn"
  >
    <div class="icon-menu"></div>
  </button>
</template>

<script>
export default {
  name: "MyTopBarButtonMenu",
};
</script>
