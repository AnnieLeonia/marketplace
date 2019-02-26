<template>
  <main>
    <p>Drag and drop area</p>
    <draggable class="workspace" :options="{group:{ name:'options'}}"></draggable>
  </main>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
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
  min-width: calc(120px + 1em);
  min-height: calc(60px + 1em);
  background-color: lightgray;
}
</style>
