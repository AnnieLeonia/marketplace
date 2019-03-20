<template>
  <main>
    <div v-bind:class="emptyList ? 'placeholder' : 'hidden'">
      Drag option here
    </div>
    <Node :id="id" />
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
      id: "1",
      placeholder: true
    };
  },
  computed: {
    emptyList: function() {
      return this.$store.state.tree.length === 0;
    }
  }
};
</script>

<style scoped>
main {
  text-align: center;
}

.placeholder {
  color: #404040;
  position: relative;
  top: 3em;
  z-index: 1;
}

.hidden {
  visibility: hidden;
}
</style>
