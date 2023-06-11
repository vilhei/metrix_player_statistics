<script setup lang="ts">
let integrationCode = "";

const getPlayerInfo = (event: KeyboardEvent) => {
  //TODO
  console.log(event.key);
};
</script>

<template>
  <div class="inputRow">
    <label
      class="integrationLabel"
      data-tooltip="Integration code can be found in your Metrix settings page"
      >Integration code</label
    >
    <!-- <span class="codeToolTip">Integration code can be found in your Metrix settings page</span> -->
    <input v-model="integrationCode" @keyup.exact.enter="getPlayerInfo" />
    <button>Fetch data</button>
  </div>
</template>

<style scoped>
input {
  margin: 1rem;
  /* min-width: calc(max(50dvw, 300px)); */
  flex-grow: 1;
}

.integrationLabel {
  font-size: 22px;
  margin: 0 1rem 0 1rem;
}

.integrationLabel::before {
  content: attr(data-tooltip);
  position: absolute;
  /* top: 50%; */
  /* transform: translateY(-50%); */
  left: 50%;
  margin-left: 15px;

  width: 200px;
  padding: 10px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  text-align: center;
  z-index: 1;
  display: none;
}

.integrationLabel:hover:before,
.integrationLabel:hover:after {
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

.integrationLabel:hover + .codeToolTip {
  visibility: visible;
  /* background-color: red; */
}

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
}

@media (max-width: 600px) {
  .inputRow {
    flex-direction: column;
  }
}
/* .inputRow:hover .codeToolTip {
  visibility: visible;
} */
</style>
