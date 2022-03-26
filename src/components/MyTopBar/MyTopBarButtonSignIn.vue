<template>
  <button class="btn btn-1 btn-tertiary" @click="goToSignIn">Sign in</button>
</template>

<script>
export default {
  name: "MyTopBarButtonSignIn",
  methods: {
    goToSignIn() {
      //this.$router.push("/sign-in");
      this.$store.dispatch("signIn", "FluffyPony", "123");
    },
  },
};
</script>
