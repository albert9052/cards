<template>
  <button
    class="btn btn-1 btn-primary"
    @click="$store.dispatch('uploadTempAvatarURL')"
    :disabled="$store.state.uploading.avatarURL"
  >
    UPLOAD
  </button>
</template>

<script>
export default {
  name: "SettingsButtonAvatarFileUpload",
};
</script>
