<template>
  <button
    class="btn btn-logo"
    @click="$store.dispatch('changeRoute', '/landingpage', 'Landing Page')"
  >
    <h4 class="logo">CARDs</h4>
  </button>
</template>

<script>
export default {
  name: "MyTopBarButtonLogo",
};
</script>
