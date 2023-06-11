<script setup lang="ts">
import userInputs from "./components/userInputs.vue";
</script>

<template>
  <userInputs class="inputRow"></userInputs>
</template>

<style scoped>
.inputRow {
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-items: center;
  /* flex-wrap: wrap; */
  margin: auto;
  box-shadow: 0px 0px 1px 4px var(--main-orange-color);
  max-width: 1920px;
  /* min-width: 1000px; */
}
@media (max-width: 720px) {
  .inputRow {
    flex-direction: column;
  }
  h1 {
    font-size: 16px;
  }
}
</style>
