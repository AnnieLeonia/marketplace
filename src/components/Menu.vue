<template>
  <header>
    <div class="titleBar">
      <label for="title">Title:</label>
      <input type="text" id="title" placeholder="Enter title...">
      <button class="btnOverview" v-on:click="open()">Overview</button>
    </div>
    <nav>
      <p class="menuTitle">Options</p>
      <draggable
        class="menu"
        :list="menuOptions"
        :clone="clone"
        @start="start()"
        @end="end()"
        :options="{
          group: { name: 'options', pull: 'clone', put: false },
          sort: false
        }"
      >
        <div class="option" v-for="option in menuOptions" v-bind:key="option.name">
          <img class="optionIcon" v-bind:src="option.path" alt="icon">
          <p class="optionTitle">{{ option.name }}</p>
        </div>
      </draggable>
    </nav>
  </header>
</template>

<script>
import draggable from "vuedraggable";
import Overview from "./Overview";
export default {
  components: {
    draggable
  },
  data() {
    return {
      attr: { width: "1000px", height: "600px" },
      menuOptions: [
        {
          id: 0,
          name: "Product",
          path: require("../assets/product.svg"),
          edited: false,
          display: "",
          value: "",
          depth: 0
        },
        {
          id: 0,
          name: "Discount",
          path: require("../assets/discount.svg"),
          edited: false,
          display: "",
          value: "",
          depth: 0
        },
        {
          id: 0,
          name: "Promotion",
          path: require("../assets/promotion.svg"),
          edited: false,
          display: "",
          value: "",
          depth: 0
        },
        {
          id: 0,
          name: "Routes",
          path: require("../assets/routes.svg"),
          edited: false,
          display: "",
          value: "",
          depth: 0
        },
        {
          id: 0,
          name: "Dates",
          path: require("../assets/dates.svg"),
          edited: false,
          display: "",
          value: "",
          depth: 0
        },
        {
          id: 0,
          name: "Time",
          path: require("../assets/time.svg"),
          edited: false,
          display: "",
          value: "",
          depth: 0
        },
        {
          id: 0,
          name: "Inventory",
          path: require("../assets/inventory.svg"),
          edited: false,
          display: "",
          value: "",
          depth: 0
        }
      ]
    };
  },
  methods: {
    clone: function(option) {
      const uniqueOption = JSON.parse(JSON.stringify(option));
      uniqueOption.id = new Date().getTime();
      return uniqueOption;
    },
    start() {
      this.$store.state.moving = true;
    },
    end() {
      this.$store.state.moving = false;
    },
    open: function() {
      this.$modal.show(Overview, this.attr);
    }
  }
};
</script>

<style scoped>
header {
  position: fixed;
  height: 10em;
  width: 100%;
  top: 0;
  z-index: 1;
}

.titleBar {
  color: white;
  background-color: #18477f;
  padding: 0.5em;
  height: 32px;
  font-weight: bold;
  text-transform: uppercase;
}

input[type="text"] {
  width: 40%;
  font-size: 1.2em;
  padding-left: 5px;
  border: none;
  color: white;
  background-color: transparent;
  border-bottom: solid 2px #fff;
}
input::placeholder {
  color: #ccc;
}

input[type="text"]:focus {
  outline: none;
  border-bottom: solid 3px #c269a1;
}

.btnOverview {
  float: right;
  background-color: #c269a1;
}

nav {
  background-image: linear-gradient(#18477f, #7994c5);
  text-align: center;
}

.menuTitle {
  margin: 0 0 -10px 0;
  text-transform: uppercase;
  font-weight: bold;
  padding: 5px;
  color: white;
}

.menu > .option {
  display: inline-block;
}
</style>
