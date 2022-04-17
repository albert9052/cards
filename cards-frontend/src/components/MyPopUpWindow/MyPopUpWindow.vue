<template>
  <div class="pop-up-window" v-show="$store.state.showPopUpWindow">
    <MyPopUpWindowHeader />
    <MyPopUpWindowBody />
    <MyPopUpWindowFooter />
  </div>
</template>

<script>
import MyPopUpWindowHeader from "@/components/MyPopUpWindow/MyPopUpWindowHeader.vue";
import MyPopUpWindowBody from "@/components/MyPopUpWindow/MyPopUpWindowBody.vue";
import MyPopUpWindowFooter from "@/components/MyPopUpWindow/MyPopUpWindowFooter.vue";

export default {
  name: "MyPopUpWindow",
  components: {
    MyPopUpWindowHeader,
    MyPopUpWindowBody,
    MyPopUpWindowFooter,
  },
};
</script>
