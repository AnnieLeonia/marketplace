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

<style>
main {
  border: 1px solid purple;
  text-align: center;
}

.workspace {
  width: fit-content;
  margin: 0 auto;
}
</style>
