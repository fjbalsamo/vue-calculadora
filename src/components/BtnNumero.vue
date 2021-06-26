<template>
  <button type="button" @click="click">{{ numero }}</button>
</template>

<script>
export default {
  name: "BtnNumero",
  props: {
    numero: {
      type: Number,
      required: true,
    },
  },
  methods: {
    click() {
      console.log(this.numero);
      this.$emit("enviarNumero", this.numero);
    },
  },
};
</script>

<style></style>
