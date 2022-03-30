<template>
  <button
    class="btn btn-icon pop-up-window-footer-button-attach-file"
    v-show="
      $store.state.mode == 'edit' && !$store.state.cardToShow.attachmentUrl
    "
  >
    <span class="material-icons"> attach_file </span>
  </button>
</template>

<script>
export default {
  name: "MyPopUpWindowFooterButtonAttachFile",
};
</script>
