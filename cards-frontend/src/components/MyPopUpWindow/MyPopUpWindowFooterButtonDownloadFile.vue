<template>
  <button
    class="btn btn-icon pop-up-window-footer-button-download-file"
    v-show="$store.state.cardToShow.hasAttachment"
    @click="$store.dispatch('downloadAttachment')"
    :disabled="$store.state.downloading.attachment"
  >
    <span class="material-icons"> attachment </span>
  </button>
</template>

<script>
export default {
  name: "MyPopUpWindowFooterButtonDownloadFile",
};
</script>
