<template>
  <div>
    <draggable
      class="workspace vertical"
      v-bind:class="checkEmpty() ? 'filled' : 'empty'"
      :list="list"
      :options="settings"
      @add="add($event)"
      ref="vert"
    >
      <Option
        class="option"
        v-for="option in list"
        v-bind:key="option.id"
        :editOption="option"
      />
    </draggable>
    <draggable class="workspace horizontal" v-if="this.open">
      <Node v-for="i in 2" v-bind:key="i" :id="createID(i)" />
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Option from "./Option";
export default {
  props: ["id"],
  name: "Node",
  components: {
    draggable,
    Option
  },
  data() {
    return {
      open: false,
      list: [],
      settings: {
        group: { name: "options" },
        ghostClass: "ghostOption",
        animation: 400
      }
    };
  },
  methods: {
    add: function(event) {
      this.open = true;
      this.$store.state.tree.push({ options: this.list, id: this.id });
    },
    checkEmpty: function() {
      return this.list.length > 0 || this.$store.state.tree.length === 0;
    },
    createID: function(i) {
      return this.id + "." + i;
    }
  },
  created: function() {}
};
</script>

<style>
.workspace {
  margin: 0 auto;
  padding: 0.1em;
  width: fit-content;
  min-width: calc(8em + 4px);
  min-height: calc(4.5em + 4px);
  border-radius: 15px;
}

.horizontal {
  margin-top: 2em;
  display: flex;
}

.empty {
  background-color: rgba(255, 255, 255, 0.1);
}

.filled {
  background-color: lightgray;
}
</style>
