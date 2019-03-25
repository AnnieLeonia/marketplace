<template>
  <div @change="move($event)">
    <draggable
      class="workspace"
      v-bind:class="checkEmpty() ? 'empty' : 'filled'"
      :list="list"
      :options="settings"
      @start="start()"
      @end="end()"
      @add="add()"
      @remove="remove()"
    >
      <Option
        class="option"
        v-for="option in list"
        v-bind:key="option.id"
        :currentDepth="id"
        :moved="setDepth(option)"
        :editOption="option"
      />

      <div
        id="shadow"
        v-bind:class="this.$store.state.moving ? 'shadow visible' : 'shadow'"
        v-if="checkEmpty()"
      ></div>
    </draggable>
    <div class="high" v-if="hasChildren() && paths"/>
    <div class="space" v-else/>
    <draggable class="workspace horizontal" v-if="this.open" :id="this.id">
      <div class="name" v-for="i in 2" v-bind:key="i">
        <div class="lines" v-if="hasChildren() && paths">
          <div
            v-bind:class="
              (createID(i) % 2 == 0 && !moved) ||
              (createID(i) % 2 != 0 && moved)
                ? 'long even'
                : 'long odd'
            "
          />
          <div class="high"/>
          <img class="down" src="../assets/down.svg" alt="down">
        </div>
        <Node :id="createID(i)"/>
      </div>
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
      paths: true,
      moved: false,
      list: [],
      settings: {
        group: { name: "options" },
        ghostClass: "ghostOption",
        animation: 400
      }
    };
  },
  methods: {
    hasChildren: function() {
      const tree = this.$store.state.tree;
      const id = this.$props.id.toString();
      for (var i = 0; i < tree.length; i++) {
        const treeId = tree[i].id.toString().substring(0, id.length);
        const rootId = this.$props.id.toString();
        if (
          treeId == rootId &&
          tree[i].id != this.$props.id &&
          tree[i].options.length > 0
        ) {
          return true;
        }
      }
      return false;
    },
    visibleNode: function(id) {
      const tree = this.$store.state.tree;
      const idString = id.toString();
      for (var i = 0; i < tree.length; i++) {
        if (tree[i].id == id && tree[i].options.length > 0) {
          return true;
        }
      }
      return false;
    },
    move(event) {
      if (event.target.id == this.id) {
        this.moved = !this.moved;
      }
    },
    start() {
      this.$store.state.moving = true;
    },
    end() {
      this.$store.state.moving = false;
    },
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
    remove: function() {
      if (this.list.length == 0) {
        this.$store.state.tree = this.$store.state.tree.filter(
          item => item.id !== this.id
        );
        if (!this.hasChildren()) {
          this.open = false;
        }
      }
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
  display: flex;
  height: 100%;
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
  background: none;
  margin-right: 7px;
  opacity: 0.7;
}

.visible {
  background: lightgray;
}

.lines {
  position: relative;
}

.long {
  position: absolute;
  height: 0.1em;
  background-color: #444;
  width: 50%;
}

.odd {
  right: 0;
}

.high {
  background-color: #444;
  width: 0.1em;
  height: 20px;
  margin: 0 auto;
}

.down {
  height: 10px;
  margin-top: -9px;
  margin-left: -5px;
  position: absolute;
  z-index: 1;
}

.space {
  margin-top: 2em;
}
</style>
