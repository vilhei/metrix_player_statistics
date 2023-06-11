<script setup lang="ts">
const fetchPlayerUrl: URL = new URL("https://discgolfmetrix.com/api.php?content=my_competitions");
let integrationCode: string = "";
let metrixId: string = "";

const getPlayerInfo = async () => {
  //TODO
  if (integrationCode === "" || metrixId === "") {
    return;
  }

  fetchPlayerUrl.searchParams.append("code", integrationCode);

  const res = await fetch(fetchPlayerUrl);
  if (res.status !== 200) {
    console.error(`Status code ${res.status} received`);
  }

  const data = await res.json();
  if (data === null) {
    console.error(`No competitions found`);
  }
  
  console.log(data);
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
  /* min-width: calc(max(50dvw, 300px)); */
  min-width: none;
  flex-grow: 1;
  /* flex-basis: auto; */
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
  /* top: 50%; */
  /* transform: translateY(-50%); */
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

/*
.codeToolTip {
  visibility: hidden;
  text-align: center;
  font-size: 18px;
  background-color: black;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
} */

.inputLabel:hover + .codeToolTip {
  visibility: visible;
  /* background-color: red; */
}

/* .inputRow:hover .codeToolTip {
  visibility: visible;
} */
</style>
