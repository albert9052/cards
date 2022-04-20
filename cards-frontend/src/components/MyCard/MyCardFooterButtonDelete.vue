<template>
  <button
    class="btn btn-icon-tiny"
    @click="$store.dispatch('deleteCard', cardInformation.cardID)"
  >
    <span class="material-icons"> delete </span>
  </button>
</template>

<script>
export default {
  name: "MyCardFooterButtonDelete",
  props: {
    cardInformation: null,
  },
};
</script>
