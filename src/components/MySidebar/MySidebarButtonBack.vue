<template>
  <button class="btn btn-icon" @click="$store.dispatch('closeSidebar')">
    <div class="icon-back"></div>
  </button>
</template>

<script>
export default {
  name: "MySidebarButtonBack",
};
</script>
