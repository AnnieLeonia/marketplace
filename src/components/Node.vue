<template>
  <div>
    <draggable
      class="workspace"
      v-bind:class="checkEmpty() ? 'empty' : 'filled'"
      :list="list"
      :options="settings"
      @start="start()"
      @end="end()"
      @add="add()"
    >
      <Option
        class="option"
        v-for="option in list"
        v-bind:key="option.id"
        :currentDepth="id"
        :moved="setDepth(option)"
        :editOption="option"
      />
      <div class="shadow" v-if="checkEmpty()"></div>
    </draggable>
    <draggable class="workspace horizontal" v-if="this.open">
      <Node v-for="i in 2" v-bind:key="i" :id="createID(i)"/>
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
    add: function() {
      this.open = true;
      let index = this.$store.state.tree.indexOf(
        this.$store.state.tree.find(option => option.id === this.id)
      );
      if (index === -1) {
        this.$store.state.tree.push({ options: this.list, id: this.id });
      } else {
        this.$store.state.tree[index].options = this.list;
      }
    },
    start() {
      this.$store.state.moving = true;
    },
    end() {
      this.$store.state.moving = false;
    },
    checkEmpty(option) {
      if (this.$store.state.tree.length === 0) {
        return false;
      } else if (
        this.$store.state.tree[0].options.length === 0 &&
        this.list.length === 0
      ) {
        return this.id !== "1";
      } else {
        return this.list.length === 0 && this.$store.state.tree.length != 0;
      }
    },
    createID: function(i) {
      return this.id + i;
    },
    setDepth(option) {
      option.depth = this.id;
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
  position: relative;
}

.horizontal {
  margin-top: 2em;
  display: flex;
}

.filled {
  background-color: #aaa;
}

.shadow {
  display: block;
  position: absolute;
  border-radius: 15px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.empty .ghostOption + .shadow {
  background: lightgray;
}
</style>
