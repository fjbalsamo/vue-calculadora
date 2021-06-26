<template>
  <button type="button" @click="punto">.</button>
</template>

<script>
export default {
  name: "BtnPunto",
  methods: {
    punto() {
      this.$emit("pressPunto");
    },
  },
};
</script>

<style></style>
