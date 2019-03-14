<template>
  <draggable
    class="workspace"
    :list="list"
    :options="settings"
    @add="add($event)"
  >
    <Option
      class="option"
      v-for="option in list"
      v-bind:key="option.id"
      :editOption="option"
    />
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import Option from "./Option";
export default {
  props: ["root"],
  components: {
    draggable,
    Option
  },
  data() {
    return {
      list: this.root.options,
      settings: {
        group: { name: "options" },
        ghostClass: "ghostOption",
        animation: 400
      }
    };
  },
  methods: {
    add: function(event) {
      this.placeholder = false;
    }
  }
};
</script>

<style>
</style>
