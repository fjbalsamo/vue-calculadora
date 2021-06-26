<template>
  <button type="button" @click="operar">{{ operacion }}</button>
</template>

<script>
export default {
  name: "BtnOperacion",
  props: {
    operacion: {
      type: String,
      required: true,
    },
  },
  methods: {
    operar() {
      console.log(this.operacion);
      this.$emit("enviarOperacion", this.operacion);
    },
  },
};
</script>

<style></style>
