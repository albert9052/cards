<template>
  <div class="card-footer">
    <MyCardFooterHearts :hearts="cardInformation.hearts" />
    <div
      class="ctn ctn-components-2"
      v-show="$store.state.currentRoute == '/mycards'"
    >
      <MyCardFooterButtonEdit :cardInformation="cardInformation" />
      <MyCardFooterButtonDelete />
    </div>
    <MyCardFooterButtonMagnify :cardInformation="cardInformation" />
  </div>
</template>

<script>
import MyCardFooterButtonEdit from "@/components/MyCard/MyCardFooterButtonEdit.vue";
import MyCardFooterButtonDelete from "@/components/MyCard/MyCardFooterButtonDelete.vue";
import MyCardFooterHearts from "@/components/MyCard/MyCardFooterHearts.vue";
import MyCardFooterButtonMagnify from "@/components/MyCard/MyCardFooterButtonMagnify.vue";

export default {
  name: "MyCardFooter",
  components: {
    MyCardFooterButtonEdit,
    MyCardFooterButtonDelete,
    MyCardFooterHearts,
    MyCardFooterButtonMagnify,
  },
  props: {
    cardInformation: Object,
  },
};
</script>
