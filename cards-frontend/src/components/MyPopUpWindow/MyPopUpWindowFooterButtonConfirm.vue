<template>
  <button
    class="btn btn-1 btn-primary"
    @click="$store.dispatch('uploadCard')"
    v-show="$store.state.mode == 'edit'"
    :disabled="$store.state.uploading.card"
  >
    Done!
  </button>
</template>

<script>
export default {
  name: "MyPopUpWindowFooterButtonConfirm",
};
</script>
