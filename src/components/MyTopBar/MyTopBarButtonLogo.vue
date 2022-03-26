<template>
  <button class="btn btn-logo" @click="goToHome">
    <h4 class="logo">CARDs</h4>
  </button>
</template>

<script>
export default {
  name: "MyTopBarButtonLogo",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
