<template>
  <div
    class="gray-overlay"
    @click="$store.dispatch('closeEverything')"
    v-show="$store.state.showGrayOverlay"
  ></div>
</template>

<script>
export default {
  name: "MyGrayOverlay",
  components: {},
  props: {},
};
</script>
