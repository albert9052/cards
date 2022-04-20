<template>
  <input
    class="settings-page-input-avatar-url"
    v-model="avatarURL"
    type="text"
  />
</template>

<script>
export default {
  name: "SettingsInputAvatarURL",
  computed: {
    avatarURL: {
      get() {
        return this.$store.state.tempParameters.avatarURL;
      },
      set(value) {
        this.$store.dispatch("changeTempAvatarURL", value);
      },
    },
  },
};
</script>
