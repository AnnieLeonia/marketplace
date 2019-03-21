<template>
  <div class="remove" v-if="moving">
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
  margin: 0 calc(50% - 3em - 1em - 6px);
  bottom: 56px;
  animation: moveup 0.5s;
}

@keyframes moveup {
  from {
    transform: translateY(100px);
  }
  to {
    transform: translateY(0);
  }
}

.trash {
  margin: 0 calc(50% - 2em);
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
  margin: 0 50%;
  width: 3em;
  z-index: -1;
}
</style>
