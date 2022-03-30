<template>
  <button
    class="btn btn-icon-tiny"
    @click="$store.dispatch('openPopUpWindow', cardInformation)"
  >
    <span class="material-icons"> edit </span>
  </button>
</template>

<script>
export default {
  name: "MyCardFooterButtonEdit",
  props: {
    cardInformation: Object,
  },
};
</script>
