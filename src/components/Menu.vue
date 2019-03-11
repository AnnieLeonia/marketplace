<template>
  <header>
    <div class="titleBar">
      <label for="title">Title:</label>
      <input
        type="text"
        id="title"
        placeholder="Enter title..."
      >
      <button class="btnOverview">Overview</button>
    </div>
    <nav>
      <p class="menuTitle">Options</p>
      <draggable
        class="menu"
        :list="menuOptions"
        :clone="clone"
        :options="{group:{ name:'options',  pull:'clone', put: false }, sort: false}"
      >
        <div
          class="option"
          v-for="option in menuOptions"
          v-bind:key="option.name"
        >
          <img
            class="optionIcon"
            v-bind:src="option.path"
            alt="icon"
          >
          <p class="optionTitle">{{option.name}}</p>
        </div>
      </draggable>
    </nav>
  </header>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      menuOptions: [
        {
          id: 0,
          name: "Product",
          path: require("../assets/product.svg"),
          edited: false,
          value: ""
        },
        {
          id: 0,
          name: "Discount",
          path: require("../assets/discount.svg"),
          edited: false,
          value: ""
        },
        {
          id: 0,
          name: "Promotion",
          path: require("../assets/promotion.svg"),
          edited: false,
          value: ""
        },
        {
          id: 0,
          name: "Routes",
          path: require("../assets/routes.svg"),
          edited: false,
          value: ""
        },
        {
          id: 0,
          name: "Dates",
          path: require("../assets/dates.svg"),
          edited: false,
          value: ""
        },
        {
          id: 0,
          name: "Time",
          path: require("../assets/time.svg"),
          edited: false,
          value: ""
        },
        {
          id: 0,
          name: "Inventory",
          path: require("../assets/inventory.svg"),
          edited: false,
          value: ""
        }
      ]
    };
  },
  methods: {
    clone: function(option) {
      const uniqueOption = JSON.parse(JSON.stringify(option));
      uniqueOption.id = new Date().getTime();
      return uniqueOption;
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
}

.titleBar {
  background-color: white;
  padding: 0.5em;
  font-size: 1.5em;
  height: 32px;
}

input[type="text"] {
  width: 40%;
  font-size: 1em;
  padding-left: 5px;
  border: none;
  border-bottom: solid 2px #888;
}

input[type="text"]:focus {
  outline: none;
  border-bottom: solid 3px darkblue;
}

.btnOverview {
  float: right;
  background-color: #b3dcff;
  border-right-color: #c5c5ff;
  border-bottom-color: #c5c5ff;
}

nav {
  background-color: darkblue;
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
