<template>
  <div class="all-cards top-bar-after">
    <h2>All Cards</h2>
    <div class="ctn ctn-cards">
      <div
        class="ctn ctn-card-wrapper"
        v-for="(card, index) in $store.state.allCards"
        :key="index"
      >
        <MyCard :cardInformation="card" />
      </div>
    </div>
  </div>
</template>

<script>
import MyCard from "@/components/MyCard/MyCard.vue";

export default {
  name: "AllCards",
  components: {
    MyCard,
  },
};
</script>
