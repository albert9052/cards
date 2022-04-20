<template>
  <div class="card-footer">
    <!--
    <MyCardFooterHearts :hearts="cardInformation.hearts" />
		-->
    <div class="ctn ctn-components-2" v-if="$route.fullPath == '/mycards'">
      <!-- <MyCardFooterButtonEdit :cardInformation="cardInformation" /> -->
      <MyCardFooterButtonDelete :cardInformation="cardInformation" />
    </div>
    <div v-else></div>
    <MyCardFooterButtonMagnify :cardInformation="cardInformation" />
  </div>
</template>

<script>
//import MyCardFooterHearts from "@/components/MyCard/MyCardFooterHearts.vue";
//import MyCardFooterButtonEdit from "@/components/MyCard/MyCardFooterButtonEdit.vue";
import MyCardFooterButtonDelete from "@/components/MyCard/MyCardFooterButtonDelete.vue";
import MyCardFooterButtonMagnify from "@/components/MyCard/MyCardFooterButtonMagnify.vue";

export default {
  name: "MyCardFooter",
  components: {
    //MyCardFooterHearts,
    //MyCardFooterButtonEdit,
    MyCardFooterButtonDelete,
    MyCardFooterButtonMagnify,
  },
  props: {
    cardInformation: Object,
  },
};
</script>
