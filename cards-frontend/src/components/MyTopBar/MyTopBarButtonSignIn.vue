<template>
  <button
    class="btn btn-1 btn-tertiary"
    @click="
      $store.dispatch('changeRoute', { route: '/signin', name: 'Sign In' })
    "
  >
    Sign in
  </button>
</template>

<script>
export default {
  name: "MyTopBarButtonSignIn",
};
</script>
