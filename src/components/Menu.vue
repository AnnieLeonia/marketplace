<template>
  <header>
    <div class="titleBar">
      <label for="title">Title:</label>
      <input type="text" id="title" placeholder="Enter title...">
      <button class="btnOverview">Overview</button>
    </div>
    <nav>
      <p class="menuTitle">Options</p>
      <draggable
        class="menu"
        :options="{group:{ name:'options',  pull:'clone', put: false }, sort: false}"
      >
        <div class="option" v-for="option in menuOptions" v-bind:key="option.name">
          <img class="optionIcon" v-bind:src="option.path" alt="icon">
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
        { name: "Product", path: require("../assets/product.svg") },
        { name: "Discount", path: require("../assets/discount.svg") },
        { name: "Promotion", path: require("../assets/promotion.svg") },
        { name: "Routes", path: require("../assets/routes.svg") },
        { name: "Dates", path: require("../assets/dates.svg") },
        { name: "Time", path: require("../assets/time.svg") },
        { name: "Inventory", path: require("../assets/inventory.svg") }
      ]
    };
  }
};
</script>

<style scoped>
header {
  position: fixed;
  height: 150px;
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

.optionTitle {
  margin: -4px 0 0 0;
}

.optionIcon {
  height: 30px;
}
</style>
