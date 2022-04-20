<template>
  <div class="settings-page top-bar-after">
    <div class="card card-main card-dark">
      <h3 class="logo">Settings</h3>
      <div class="ctn ctn-settings-avatar-file">
        <h4>Avatar : (Upload a file)</h4>
        <div class="ctn ctn-components-2">
          <div class="ctn ctn-components-2">
            <SettingsButtonAvatarChooseFile />
            <h5>
              {{
                $store.state.tempParameters.avatarFile
                  ? $store.state.tempParameters.avatarFile.name
                  : "Please choose a file"
              }}
            </h5>
          </div>
          <SettingsButtonAvatarFileUpload />
        </div>
      </div>
      <div class="ctn ctn-settings-avatar-link">
        <h4>Avatar : (Using a link)</h4>
        <div class="ctn ctn-components-2">
          <SettingsInputAvatarURL />
          <SettingsButtonAvatarURLUpload />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettingsButtonAvatarChooseFile from "@/components/SettingsPage/SettingsButtonAvatarChooseFile.vue";
import SettingsButtonAvatarFileUpload from "@/components/SettingsPage/SettingsButtonAvatarFileUpload.vue";
import SettingsInputAvatarURL from "@/components/SettingsPage/SettingsInputAvatarURL.vue";
import SettingsButtonAvatarURLUpload from "@/components/SettingsPage/SettingsButtonAvatarURLUpload";

export default {
  name: "SettingsPage",
  components: {
    SettingsButtonAvatarChooseFile,
    SettingsButtonAvatarFileUpload,
    SettingsInputAvatarURL,
    SettingsButtonAvatarURLUpload,
  },
  mounted() {
    if (!this.$store.state.signedIn) {
      this.$router.push("/landingpage");
    }
  },
};
</script>
