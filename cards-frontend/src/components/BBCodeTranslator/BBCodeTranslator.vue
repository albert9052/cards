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
      let bbcode = bbCodeParser.parse(this.content);
      //return bbCodeParser.parse(this.content);
      bbcode = bbcode.replaceAll('<span style="color:', '<font color="');
      bbcode = bbcode.replaceAll("</span>", "</font>");
      console.log(bbcode);

      return xss(bbcode);
    },
  },
};
</script>
