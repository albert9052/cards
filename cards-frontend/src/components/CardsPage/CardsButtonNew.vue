<template>
  <button
    class="btn btn-rounded cards-button-new"
    @click="$store.dispatch('createNewCard')"
  >
    <div class="icon-plus"></div>
  </button>
</template>

<script>
export default {
  name: "CardsButtonNew",
};
</script>
