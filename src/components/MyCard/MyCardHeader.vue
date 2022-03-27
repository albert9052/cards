<template>
  <div class="card-header">
    <div class="ctn ctn-components-2">
      <!-- Avatar -->
      <div class="card-avatar-background">
        <img :src="avatarUrl" v-if="avatarUrl" />
        <div class="card-icon-avatar" v-else></div>
      </div>
      <!-- /Avatar/ -->
      <!-- Username -->
      <h6>{{ username }}</h6>
      <!-- /Username/ -->
    </div>
    <div class="card-hearts">
      <div class="card-icon-heart"></div>
      <h6>{{ hearts }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCardHeader",
  props: {
    username: String,
    avatarUrl: String,
    hearts: Number,
  },
};
</script>
