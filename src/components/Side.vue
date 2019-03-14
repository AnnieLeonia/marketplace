<template>
  <div class="sideMeny">
    <h1>Summary</h1>
    <div
      v-for="option in this.$store.state.tree.options"
      v-bind:key="option.id"
    >
      <div class="sideOption" v-if="option.display">
        <img class="iconOption" v-bind:src="option.path" alt="icon" />
        <p class="titleOption">{{ option.display }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.sideMeny {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 1em;
  border-left: 0.1em solid black;
  float: right;
  width: calc(25% - 2em);
  height: 40em;
}

h1 {
  font-size: 24px;
  font-weight: bolder;
  margin: 0 0 0.5em 0;
}

.sideOption {
  padding: 0.5em 0;
}
.iconOption {
  height: 1.3em;
}
.titleOption {
  display: initial;
}
</style>
