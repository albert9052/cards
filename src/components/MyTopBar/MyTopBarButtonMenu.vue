<template>
  <button class="btn btn-icon" @click="$store.dispatch('openSidebar')">
    <div class="icon-menu"></div>
  </button>
</template>

<script>
export default {
  name: "MyTopBarButtonMenu",
};
</script>
