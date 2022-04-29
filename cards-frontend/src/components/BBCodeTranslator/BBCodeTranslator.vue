<template>
  <p v-html="compiledContent"></p>
</template>

<script>
import bbCodeParser from "js-bbcode-parser";

export default {
  name: "BBCodeTranslator",
  props: {
    content: String,
  },
  computed: {
    compiledContent() {
      let xss = require("xss");
      return xss(bbCodeParser.parse(this.content));
    },
  },
};
</script>
