<template>
  <main>
    <div v-bind:class="[ placeholderVisibility ? 'placeholder' : 'invisible' ]">Drag option here</div>
    <draggable
      class="workspace"
      :list="list"
      :options="{group:{ name:'options'},  ghostClass: 'ghostOption', animation: 400}"
      @add="hello('add')"
    >
      <div
        class="option"
        v-for="option in list"
        v-bind:key="option.name"
        v-on:click="open(option.name)"
      >
        <img class="optionIcon" v-bind:src="option.path" alt="icon">
        <p class="optionTitle">{{option.name}}</p>
      </div>
    </draggable>
    <modal name="hello-world">hello, world!</modal>
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
export default {
  components: {
    draggable
  },
  data() {
    return {
      list: [],
      placeholderVisibility: true
    };
  },
  methods: {
    hello: function(word) {
      this.placeholderVisibility = false;
      console.log("Logg:", word);
      console.log(this.list);
    },
    open: function(option) {
      console.log("OPEN:", option);
      switch (option) {
        case "Dates":
          this.$modal.show(Dates, {}, { width: "60em", height: "40em" });
          break;
        case "Discount":
          this.$modal.show(Discount, {}, { width: "60em", height: "40em" });
          break;
        case "Inventory":
          this.$modal.show(Inventory, {}, { width: "60em", height: "40em" });
          break;
        case "Product":
          this.$modal.show(Product, {}, { width: "60em", height: "40em" });
          break;
        case "Promotion":
          this.$modal.show(Promotion, {}, { width: "60em", height: "40em" });
          break;
        case "Routes":
          this.$modal.show(Routes, {}, { width: "60em", height: "40em" });
          break;
        case "Time":
          this.$modal.show(Time, {}, { width: "60em", height: "40em" });
          break;
        default:
        // code block
      }
    }
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
