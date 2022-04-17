<template>
  <div class="card-header">
    <div class="ctn ctn-components-2">
      <!-- Avatar -->
      <div class="card-avatar-background">
        <img :src="avatarUrl" v-if="avatarUrl" />
        <div class="icon-avatar" style="--size: 2rem" v-else></div>
      </div>
      <!-- /Avatar/ -->
      <!-- Username -->
      <h6>{{ username }}</h6>
      <!-- /Username/ -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCardHeader",
  props: {
    username: String,
    avatarUrl: String,
  },
};
</script>
