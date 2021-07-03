<template>
  <button type="button" @click="equal">=</button>
</template>

<script>
export default {
  name: "BtnIgual",
  methods: {
    equal() {
      this.$emit("pressIgual");
    },
  },
};
</script>

<style></style>
