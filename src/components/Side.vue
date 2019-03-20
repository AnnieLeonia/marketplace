<template>
  <div class="sideMeny">
    <h1>Summary</h1>
    <div v-for="option in sideOptions" v-bind:key="option.id">
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
  },
  computed: {
    sideOptions: function() {
      const currentDepth = this.$store.state.currentDepth;
      const nbrOfSteps = currentDepth.length - 1;
      const validOptions = [];
      for (var i = 0; i < this.$store.state.tree.length; i++) {
        const listDepth = this.$store.state.tree[i].id;
        if (this.validOption(listDepth, currentDepth)) {
          validOptions.push(...this.$store.state.tree[i].options);
        }
      }
      return validOptions;
    }
  },
  methods: {
    validOption: function(listDepth, currentDepth) {
      for (var i = 0; i < listDepth.length; i++) {
        if (listDepth.charAt(i) !== currentDepth.charAt(i)) {
          return false;
        }
      }
      return true;
    }
  }
};
</script>

<style scoped>
.sideMeny {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 1em;
  border-left: 0.1em solid lightgray;
  background-color: #cdcde45e;
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
  height: 1em;
}
.titleOption {
  display: initial;
  font-size: 14px;
}
</style>
