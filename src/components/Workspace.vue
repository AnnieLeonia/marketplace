<template>
  <main>
    <div v-bind:class="[emptyList ? 'placeholder' : 'hidden']">
      Drag option here
    </div>
    <Node :root="list" />
  </main>
</template>

<script>
import Node from "./Node";
import Option from "./Option";
export default {
  components: {
    Option,
    Node
  },
  data() {
    return {
      list: [],
      placeholder: true
    };
  },
  computed: {
    emptyList: function() {
      return this.list.options.length == 0;
    }
  },
  created: function() {
    this.list = this.$store.state.tree;
  }
};
</script>

<style scoped>
main {
  text-align: center;
}

.workspace {
  margin: 0 auto;
  padding: 0.1em;
  width: fit-content;
  min-width: calc(8em + 4px);
  min-height: calc(4.5em + 4px);
  background-color: lightgray;
  border-radius: 15px;
}

.placeholder {
  color: gray;
  position: relative;
  top: 2.5em;
}

.hidden {
  visibility: hidden;
}
</style>
