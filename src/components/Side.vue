<template>
  <div class="sideMeny">
    <p class="sideTitle">Summary:</p>
    <div v-for="option in this.$store.state.tree" v-bind:key="option.id">
      <div class="sideOption" v-if="option.display">
        <img class="iconOption" v-bind:src="option.path" alt="icon">
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
  border-left: 1px solid black;
  float: right;
  width: 25%;
  height: 40em;
}
.sideTitle {
  padding-left: 1em;
}
.sideOption {
  padding: 0 0 1.5em 1em;
}
.iconOption {
  height: 1.3em;
  float: left;
  margin: 0px 5px 20px 0px;
}
.titleOption {
  display: initial;
}
</style>
