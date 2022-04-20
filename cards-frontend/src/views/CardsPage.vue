<template>
  <div class="cards-page top-bar-after">
    <h2 class="logo">{{ $store.state.cardsPageTitle }}</h2>
    <div class="ctn ctn-cards">
      <div
        class="ctn ctn-card-wrapper"
        v-for="(card, index) in $store.state.cards"
        :key="index"
      >
        <MyCard :cardInformation="card" />
      </div>
    </div>
    <CardsButtonNew />
  </div>
</template>

<script>
import MyCard from "@/components/MyCard/MyCard.vue";
import CardsButtonNew from "@/components/CardsPage/CardsButtonNew.vue";

export default {
  name: "CardsPage",
  components: {
    MyCard,
    CardsButtonNew,
  },
  mounted() {
    if (!this.$store.state.signedIn) {
      this.$router.push("/landingpage");
    }
    let tabs = this.$store.state.tabs;
    let route = this.$route.fullPath;
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].route == route) {
        this.$store.dispatch("updateRoute", tabs[i]);
        break;
      }
    }

    if (this.$route.fullPath == "/allcards") {
      this.$store.dispatch("getAllCards");
    } else if (this.$route.fullPath == "/mycards") {
      this.$store.dispatch("getMyCards");
    }
  },
  watch: {
    $route(to) {
      if (to.fullPath == "/allcards") {
        this.$store.dispatch("getAllCards");
      } else if (to.fullPath == "/mycards") {
        this.$store.dispatch("getMyCards");
      }
    },
  },
};
</script>
