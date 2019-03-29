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
  computed: {
    moving: function() {
      return this.$store.state.moving;
    }
  },
  methods: {
    remove: function(event) {}
  }
};
</script>

<style scoped>
.remove {
  position: fixed;
  text-align: center;
  bottom: 56px;
  margin-bottom: 1em;
}

.trash {
  position: absolute;
  min-width: 8em;
  min-height: 4em;
}

img {
  background-color: rgba(255, 255, 255, 1);
  padding: 0.5em;
  border: solid black 3px;
  border-radius: 50%;
  position: relative;
  margin-left: 1.2em;
  margin-top: 0.4em;
  width: 2.5em;
  z-index: -1;
}
</style>
