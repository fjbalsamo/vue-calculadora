<template>
  <table>
    <thead>
      <tr>
        <th colspan="4">{{ displayS }}</th>
      </tr>
      <tr>
        <th colspan="4">{{ displayP }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><BtnNumero :numero="7" v-on:enviarNumero="capturarNumero" /></td>
        <td><BtnNumero :numero="8" v-on:enviarNumero="capturarNumero" /></td>
        <td><BtnNumero :numero="9" v-on:enviarNumero="capturarNumero" /></td>
        <td>
          <BtnOperacion
            operacion="+"
            v-on:enviarOperacion="capturarOperacion"
          />
        </td>
      </tr>
      <tr>
        <td><BtnNumero :numero="4" v-on:enviarNumero="capturarNumero" /></td>
        <td><BtnNumero :numero="5" v-on:enviarNumero="capturarNumero" /></td>
        <td><BtnNumero :numero="6" v-on:enviarNumero="capturarNumero" /></td>
        <td>
          <BtnOperacion
            operacion="-"
            v-on:enviarOperacion="capturarOperacion"
          />
        </td>
      </tr>
      <tr>
        <td><BtnNumero :numero="1" v-on:enviarNumero="capturarNumero" /></td>
        <td><BtnNumero :numero="2" v-on:enviarNumero="capturarNumero" /></td>
        <td><BtnNumero :numero="3" v-on:enviarNumero="capturarNumero" /></td>
        <td>
          <BtnOperacion
            operacion="*"
            v-on:enviarOperacion="capturarOperacion"
          />
        </td>
      </tr>
      <tr>
        <td><BtnNumero :numero="0" v-on:enviarNumero="capturarNumero" /></td>
        <td>
          <BtnPunto v-on:pressPunto="capturarPunto" />
        </td>
        <td>
          <BtnIgual v-on:pressIgual="calcular" />
        </td>
        <td>
          <BtnOperacion
            operacion="/"
            v-on:enviarOperacion="capturarOperacion"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import BtnNumero from "./BtnNumero.vue";
import BtnOperacion from "./BtnOperacion.vue";
import BtnPunto from "./BtnPunto.vue";
import BtnIgual from "@/components/BtnIgual";

export default {
  name: "Calculadora",
  components: {
    BtnNumero,
    BtnOperacion,
    BtnPunto,
    BtnIgual,
  },
  data() {
    return {
      displayP: "0",
      displayS: "",
    };
  },
  methods: {
    capturarNumero(numero) {
      if (this.displayP === "0") {
        this.displayP = numero;
      } else {
        this.displayP = `${this.displayP}${numero}`;
      }
    },
    capturarOperacion(operacion) {
      alert(operacion);
    },
    capturarPunto() {
      alert("hizo click en punto");
    },
    calcular() {
      alert("hacer el calculo");
    },
  },
};
</script>
