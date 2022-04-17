<template>
  <div class="card-footer-hearts">
    <div class="ctn ctn-components-2">
      <div class="icon-heart"></div>
      <h6>{{ hearts }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCardFooter",
  props: {
    hearts: Number,
  },
};
</script>
