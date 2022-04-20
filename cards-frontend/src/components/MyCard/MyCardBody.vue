<template>
  <div class="card-body">
    <BBCodeTranslator
      :content="content"
      class="card-body-content text-align-left"
    />
  </div>
</template>

<script>
import BBCodeTranslator from "@/components/BBCodeTranslator/BBCodeTranslator.vue";

export default {
  name: "MyCardBody",
  components: {
    BBCodeTranslator,
  },
  props: {
    content: String,
  },
};
</script>
