<template>
  <button
    class="btn btn-rounded pop-up-window-header-button-close"
    @click="$store.dispatch('closePopUpWindow')"
  >
    <div class="icon-close"></div>
  </button>
</template>

<script>
export default {
  name: "MyPopUpWindowHeaderButtonClose",
};
</script>
