<template>
  <div>
    <div class="titleBar">
      <label>Title:</label>
      <input type="text" name="title" placeholder="Enter title...">
    </div>
    <nav>
      <p class="optionTitle">Options</p>
      <draggable
        class="menu"
        :options="{group:{ name:'options',  pull:'clone', put: false }, sort: false}"
      >
        <div class="option" v-for="option in menuOptions" v-bind:key="option.name">{{option.name}}</div>
      </draggable>
    </nav>
  </div>
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
        { name: "Product", path: "img" },
        { name: "Discount", path: "img" },
        { name: "Promotion", path: "img" },
        { name: "Message", path: "img" },
        { name: "Routes", path: "img" },
        { name: "Dates", path: "img" },
        { name: "Time", path: "img" },
        { name: "Inventory", path: "img" }
      ]
    };
  }
};
</script>

<style>
.titleBar {
  padding: 0.5em;
  font-size: 1.5em;
}

input[type="text"] {
  font-size: 1.5em;
}

nav {
  border: 1px solid black;
  text-align: center;
}

.optionTitle {
}
.menu {
}

.option {
  border: solid black 2px;
  padding: 0.5em;
  width: 100px;
  height: 40px;
  border-radius: 15px;
}

.menu > .option {
  display: inline-block;
  margin: 0.5em;
}
</style>
