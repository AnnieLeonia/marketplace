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
          <p class="optionValue">{{ option.value }}</p>
        </div>
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
    add: function(event) {
      this.placeholderVisibility = false;
      console.log("Event:", event);
    },
    open: function(option) {
      switch (option.name) {
        case "Dates":
          this.$modal.show(
            Dates,
            { option },
            { width: "1000px", height: "600px" }
          );
          break;
        case "Discount":
          this.$modal.show(Discount, {}, { width: "1000px", height: "600px" });
          break;
        case "Inventory":
          this.$modal.show(Inventory, {}, { width: "1000px", height: "600px" });
          break;
        case "Product":
          this.$modal.show(Product, {}, { width: "1000px", height: "600px" });
          break;
        case "Promotion":
          this.$modal.show(Promotion, {}, { width: "1000px", height: "600px" });
          break;
        case "Routes":
          this.$modal.show(
            Routes,
            { option },
            { width: "1000px", height: "600px" }
          );
          break;
        case "Time":
          this.$modal.show(Time, {}, { width: "1000px", height: "600px" });
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
