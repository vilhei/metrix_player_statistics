<script setup lang="ts"></script>

<template>
  <div class="bar">
    <img src="../assets/chainstar.png" />
    <h1 id="title">Metrix player statistics tool</h1>
  </div>
</template>

<style scoped>
.bar {
  display: flex;
  /* height: calc(min(50, 100)); */
  justify-content: center;
  align-content: center;
  /* justify-content: space-between; */
  align-items: center;
  border-radius: 10px;
  min-width: 100vw;
  height: 75px;
  margin-top: 1rem;
}
/* .bar:hover {
  background-color: #313030;
} */

@keyframes background-color-change {
  to {
    background-clip: text;
  }
  to {
    -webkit-text-fill-color: transparent;
  }
  from {
    background-color: white;
  }
  35% {
    background-color: orange;
  }
  70% {
    background-color: red;
  }
  to {
    background-color: orange;
  }
}

#title:hover {
  /* box-shadow: 0px 0px 10px 3px red; */
  /* background: linear-gradient(45deg, white 0%, orange 35%, red 100%); */

  animation-name: background-color-change;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  background-clip: text;
  /* -webkit-text-fill-color: transparent; */
  /* text-shadow: 0px 3px 0px red; */
}

img {
  height: 75px;
}

@media (max-width: 720px) {
  h1 {
    font-size: 1em;
  }
}
</style>
