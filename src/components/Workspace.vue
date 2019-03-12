<template>
  <main>
    <div v-bind:class="[placeholderVisibility ? 'placeholder' : 'invisible']">
      Drag option here
    </div>
    <draggable
      class="workspace"
      :list="list"
      :options="{
        group: { name: 'options' },
        ghostClass: 'ghostOption',
        animation: 400
      }"
      @add="add($event)"
    >
      <div
        class="option"
        v-for="option in list"
        v-bind:key="option.id"
        v-on:click="open(option)"
      >
        <div v-if="!option.edited">
          <img class="optionIcon" v-bind:src="option.path" alt="icon" />
          <p class="optionTitle">{{ option.name }}</p>
        </div>
        <div v-else>
          <img class="optionIconSmall" v-bind:src="option.path" alt="icon" />
          <p class="optionValue">{{ option.display }}</p>
        </div>
      </div>
    </draggable>
  </main>
</template>

<script>
import draggable from "vuedraggable";
import Dates from "./options/Dates";
import Discount from "./options/Discount";
import Inventory from "./options/Inventory";
import Product from "./options/Product";
import Promotion from "./options/Promotion";
import Routes from "./options/Routes";
import Time from "./options/Time";
import Vue from "vue";
export default {
  components: {
    draggable
  },
  data() {
    return {
      list: [],
      placeholderVisibility: true,
      attr: { width: "1000px", height: "600px" }
    };
  },
  methods: {
    add: function(event) {
      this.placeholderVisibility = false;
    },
    open: function(option) {
      switch (option.name) {
        case "Dates":
          this.$modal.show(Dates, { option }, this.attr);
          break;
        case "Discount":
          this.$modal.show(Discount, { option }, this.attr);
          break;
        case "Inventory":
          this.$modal.show(Inventory, { option }, this.attr);
          break;
        case "Product":
          this.$modal.show(Product, { option }, this.attr);
          break;
        case "Promotion":
          this.$modal.show(Promotion, { option }, this.attr);
          break;
        case "Routes":
          this.$modal.show(Routes, { option }, this.attr);
          break;
        case "Time":
          this.$modal.show(Time, { option }, this.attr);
          break;
        default:
        // code block
      }
    }
  },
  created: function() {
    this.list = this.$store.state.tree;
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
  min-width: calc(8em + 4px);
  min-height: calc(4.5em + 4px);
  background-color: lightgray;
  border-radius: 15px;
}

.placeholder {
  color: gray;
  position: relative;
  top: 2.5em;
}

.invisible {
  visibility: hidden;
}
</style>
