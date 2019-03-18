<template>
  <div class="remove">
    <draggable
      class="trash"
      :list="list"
      :options="settings"
      @add="remove($event)"
    />
    <img :src="require('../assets/garbage-can.png')" alt="icon" />
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "Remove",
  components: {
    draggable
  },
  data() {
    return {
      list: [],
      settings: {
        group: { name: "options" },
        ghostClass: "removeGhost",
        animation: 400
      }
    };
  },
  methods: {
    remove: function(event) {
      console.log(this.$store.state.tree);
    }
  }
};
</script>

<style scoped>
.remove {
  position: fixed;
  text-align: center;
  margin: 0 calc(50% - 4em);
  height: 100px;
  bottom: 56px;
}

.trash {
  position: absolute;
  min-width: 8em;
  min-height: 4em;
}

img {
  position: relative;
  margin: 0 50%;
  width: 4em;
  z-index: -1;
}
</style>
