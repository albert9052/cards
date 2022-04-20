<template>
  <button
    class="btn btn-icon-tiny"
    @click="$store.dispatch('openPopUpWindow', cardInformation)"
  >
    <span class="material-icons"> zoom_in </span>
  </button>
</template>

<script>
export default {
  name: "MyCardFooterButtonDelete",
  props: {
    cardInformation: Object,
  },
};
</script>
