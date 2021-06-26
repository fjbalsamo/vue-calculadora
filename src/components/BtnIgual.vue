<template>
  <button type="button" @click="punto">=</button>
</template>

<script>
export default {
  name: "BtnIgual",
  methods: {
    punto() {
      this.$emit("pressIgual");
    },
  },
};
</script>

<style></style>
