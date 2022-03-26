<template>
  <button class="btn btn-1 btn-primary" @click="goToSignUp">SIGN UP</button>
</template>

<script>
export default {
  name: "MyTopBarButtonSignUp",
  methods: {
    goToSignUp() {
      this.$router.push("/sign-up");
    },
  },
};
</script>
