<template>
  <button class="btn btn-success" @click="addToCart(params)">
    Purchase Product
  </button>
</template>

<script>
export default {
  name: "buy-button",
  props: ["addToCart", "params"],
};
</script>

<style></style>
