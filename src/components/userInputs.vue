<script setup lang="ts">
import { fetchPlayerCompetitions } from "../services/metrixApi";

let integrationCode: string = "";
let metrixId: number | null = null;

const emit = defineEmits(["playerDataFetched"]);

const getPlayerInfo = async () => {
  if (integrationCode === "" || metrixId === null) {
    alert("Insert both codes");
    return;
  }
  const data = await fetchPlayerCompetitions(integrationCode);

  emit("playerDataFetched", data);
};
</script>

<template>
  <div>
    <label
      class="inputLabel"
      data-tooltip="Integration code can be found in your Metrix settings page, it is used to retrieve competitions you competed in."
      >Integration code</label
    >
    <input v-model="integrationCode" @keyup.exact.enter="getPlayerInfo" />

    <label
      class="inputLabel"
      data-tooltip="Metrix Id can be found in your Metrix settings page, it is used to identify you in a competition."
      >Metrix Id</label
    >
    <input v-model="metrixId" @keyup.exact.enter="getPlayerInfo" />

    <button @click="getPlayerInfo">Fetch data</button>
  </div>
</template>

<style scoped>
input {
  margin: 1rem;
  min-width: none;
  flex-grow: 1;
}
@media (max-width: 720px) {
  button {
    margin-bottom: 1rem;
  }
}
.inputLabel {
  font-size: 22px;
  margin: 0 1rem 0 1rem;
}

.inputLabel::before {
  content: attr(data-tooltip);
  position: absolute;
  left: 50%;
  margin-left: 15px;

  width: 200px;
  padding: 10px;
  border-radius: 10px;
  background: var(--main-orange-color);
  color: #fff;
  text-align: center;
  z-index: 1;
  display: none;
}

.inputLabel:hover:before {
  display: block;
}

.inputLabel:hover + .codeToolTip {
  visibility: visible;
}
</style>
