<template>
  <button class="btn btn-1 btn-secondary" @click="$store.dispatch('signOut')">
    Sign out
  </button>
</template>

<script>
export default {
  name: "MyTopBarButtonSignOut",
};
</script>
