<template>
  <div class="admin-page top-bar-after">
    <div class="card card-main">
      <h3 class="logo">Admin</h3>
      <div class="ctn ctn-username-and-password">
        <MyInputField
          type="text"
          fieldName="Admin Account"
          placeholder="Admin Account"
          v-model="adminAccount"
        />
        <MyInputField
          type="password"
          fieldName="Admin Password"
          placeholder="Admin Password"
          v-model="adminPassword"
        />
        <MyInputField
          v-if="$store.state.admin.signedIn"
          type="text"
          fieldName="Title"
          placeholder="Title"
          v-model="title"
        ></MyInputField>
      </div>
      <div class="ctn ctn-wave-and-button admin-page-wave-and-button">
        <svg
          class="wave wave-flip"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#A1A1A1"
            fill-opacity="1"
            d="M0,128L30,149.3C60,171,120,213,180,197.3C240,181,300,107,360,96C420,85,480,139,540,181.3C600,224,660,256,720,234.7C780,213,840,139,900,133.3C960,128,1020,192,1080,186.7C1140,181,1200,107,1260,85.3C1320,64,1380,96,1410,112L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
        <div class="ctn-wave-sign-up">
          <button
            class="btn btn-2 btn-primary"
            @click="$store.dispatch('signInAsAdmin')"
            v-if="!$store.state.admin.signedIn"
          >
            Sign in As Admin
          </button>
          <button
            class="btn btn-2 btn-primary"
            @click="$store.dispatch('updateTitle')"
            v-if="$store.state.admin.signedIn"
          >
            Update Title
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyInputField from "@/components/MyInputField/MyInputField.vue";

export default {
  name: "AdminPage",
  components: {
    MyInputField,
  },
  computed: {
    adminAccount: {
      get() {
        return this.$store.state.admin.account;
      },
      set(newValue) {
        this.$store.dispatch("changeAdminAccount", newValue);
      },
    },
    adminPassword: {
      get() {
        return this.$store.state.admin.password;
      },
      set(newValue) {
        this.$store.dispatch("changeAdminPassword", newValue);
      },
    },
    title: {
      get() {
        return this.$store.state.title;
      },
      set(newValue) {
        this.$store.dispatch("changeTitle", newValue);
      },
    },
  },
};
</script>
