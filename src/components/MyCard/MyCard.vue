<template>
  <div class="card">
    <MyCardHeader
      :username="cardInformation.username"
      :avatarUrl="cardInformation.avatarUrl"
      :hearts="cardInformation.hearts"
    />
    <MyCardBody :content="cardInformation.content" />
    <MyCardFooter />
  </div>
</template>

<script>
import MyCardHeader from "@/components/MyCard/MyCardHeader.vue";
import MyCardBody from "@/components/MyCard/MyCardBody.vue";
import MyCardFooter from "@/components/MyCard/MyCardFooter.vue";

export default {
  name: "MyCard",
  components: {
    MyCardHeader,
    MyCardBody,
    MyCardFooter,
  },
  props: {
    cardInformation: Object,
  },
};
</script>
