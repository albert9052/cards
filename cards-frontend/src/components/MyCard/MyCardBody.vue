<template>
  <div class="card-body">
    <p class="text-align-left">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MyCardBody",
  props: {
    content: String,
  },
};
</script>
