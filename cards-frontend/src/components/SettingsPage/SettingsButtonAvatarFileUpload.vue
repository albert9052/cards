<template>
  <button
    class="btn btn-1 btn-primary"
    @click="$store.dispatch('uploadTempAvatarFile')"
    :disabled="$store.state.uploading.avatarFile"
  >
    UPLOAD
  </button>
</template>

<script>
export default {
  name: "SettingsButtonAvatarFileUpload",
};
</script>
