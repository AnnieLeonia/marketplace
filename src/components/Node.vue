<template>
  <div>
    <!--
    <draggable
      class="workspace vertical"
      v-bind:class="checkEmpty() ? 'filled' : 'empty'"
      :list="list"
      :options="settings"
      @add="add($event)"
      ref="vert"
    >
      <div slot="footer" class="footer">Hello</div>
      <Option class="option" v-for="option in list" v-bind:key="option.id" :editOption="option"/>
    </draggable>
    -->
    <draggable
      class="workspace beginning"
      v-if="!checkEmpty()"
      :list="list"
      :options="settings"
      @add="add()"
    >
      <Option
        class="option"
        v-for="option in list"
        v-bind:key="option.id"
        :editOption="option"
      />
      <div slot="footer" class="shadow"></div>
    </draggable>

    <draggable
      v-else
      class="workspace vertical filled"
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
    checkEmpty: function() {
      return this.list.length > 0 || this.$store.state.tree.length === 0;
    },
    createID: function(i) {
      return this.id + "." + i;
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

.empty {
  background-color: rgba(255, 255, 255, 0.3);
  /*background-color: transparent;*/
  min-width: 3em;
  min-height: 1em;
}

.filled {
  background-color: lightgray;
}

.beginning .shadow {
  display: block;
  position: absolute;
  border-radius: 15px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.beginning .ghostOption + .shadow {
  background: lightgray;
}
/*
.empty:hover {
  background-color: rgba(255, 255, 255, 0.3);
  background-color: red;
} */
</style>
