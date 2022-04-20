<template>
  <label
    for="attachment-file-upload"
    class="btn btn-icon pop-up-window-footer-button-attach-file"
    v-show="
      $store.state.mode == 'edit' && !$store.state.cardToShow.attachmentURL
    "
  >
    <span class="material-icons"> attach_file </span>
  </label>
  <input
    id="attachment-file-upload"
    @change="
      $store.dispatch('changeTempAttachmentFile', $event.target.files[0])
    "
    type="file"
  />
</template>

<script>
export default {
  name: "MyPopUpWindowFooterButtonAttachFile",
};
</script>
