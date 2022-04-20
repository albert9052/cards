<template>
  <label for="avatar-file-upload" class="btn btn-1 btn-secondary">
    CHOOSE FILE
  </label>
  <input
    id="avatar-file-upload"
    @change="$store.dispatch('changeTempAvatarFile', $event.target.files[0])"
    type="file"
  />
</template>

<script>
export default {
  name: "SettingsButtonAvatarChooseFile",
};
</script>
