<template>
  <div class="pop-up-window-body">
    <p v-show="$store.state.mode == 'read'">
      {{ $store.state.cardToShow.content }}
    </p>
    <textarea v-model="content" v-show="$store.state.mode == 'edit'"></textarea>
  </div>
</template>

<script>
export default {
  name: "MyPopUpWindowBody",
  computed: {
    content: {
      get() {
        return this.$store.state.cardToShow.content;
      },
      set(newContent) {
        this.$store.dispatch("changeCardToShowContent", newContent);
      },
    },
  },
};
</script>
