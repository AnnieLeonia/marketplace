<template>
  <div class="innerOption" v-on:click="open()">
    <div v-if="!option.edited">
      <img class="optionIcon" v-bind:src="option.path" alt="icon" />
      <p class="optionTitle">{{ option.name }}</p>
    </div>
    <div class="optionBox" v-else>
      <img class="optionIconSmall" v-bind:src="option.path" alt="icon" />
      <p class="optionValue">{{ option.display }}</p>
    </div>
  </div>
</template>

<script>
import Dates from "./options/Dates";
import Discount from "./options/Discount";
import Inventory from "./options/Inventory";
import Product from "./options/Product";
import Promotion from "./options/Promotion";
import Routes from "./options/Routes";
import Time from "./options/Time";
export default {
  props: ["editOption", "currentDepth"],
  data() {
    return {
      option: this.editOption,
      depth: this.currentDepth,
      attr: { width: "1000px", height: "600px" }
    };
  },
  methods: {
    open: function() {
      const option = this.option;
      this.$store.state.currentDepth = this.currentDepth;
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
      }
    }
  }
};
</script>

<style scoped>
.optionBox {
  vertical-align: middle;
  display: table-cell;
}
</style>
