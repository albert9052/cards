<template>
  <div class="pop-up-window-body">
    <BBCodeTranslator
      v-show="$store.state.mode == 'read'"
      :content="$store.state.cardToShow.content"
    />
    <textarea
      class="pop-up-window-body-textarea"
      v-model="content"
      v-show="$store.state.mode == 'edit'"
    ></textarea>
  </div>
</template>

<script>
import BBCodeTranslator from "@/components/BBCodeTranslator/BBCodeTranslator.vue";

export default {
  name: "MyPopUpWindowBody",
  components: {
    BBCodeTranslator,
  },
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
