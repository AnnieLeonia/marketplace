<template>
  <div>
    <div class="modalHeader">
      <h1 class="overviewTitle">Overview</h1>
    </div>
    <div class="modalBody">
      <div class="nameDisplay" v-for="option in root" v-bind:key="option.id">{{ option }}</div>
    </div>
    <div class="modalFooter">
      <button class="btnCancel" v-on:click="confirm()">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortedList: [],
      root: []
    };
  },
  methods: {
    sortTree: function() {
      this.sortedList = this.$store.state.tree;
      this.sortedList.sort(function(a, b) {
        for (var i = 0; i < Math.max(a.id.length, b.id.length); i++) {
          if (!a.id[i]) return -1;
          if (!b.id[i]) return 1;
          if (a.id[i] - b.id[i] != 0) return a.id[i] - b.id[i];
        }
        return 0;
      });
    },
    displayTree: function() {},
    check: function(option) {
      for (var i = 0; i < this.sortedList.length; i++) {
        const node = this.sortedList[i].options;
        const space = this.sortedList[i].id.length;
        var temp = "";
        const name = [];
        for (var k = 0; k < space; k++) {
          temp += "\x09";
        }
        for (var j = 0; j < node.length; j++) {
          if (node[j].display !== "") {
            if (node.length > 1) {
              var nameStr = " ".concat(node[j].display + "");
              name.push(nameStr);
            } else {
              name.push(" " + node[j].display);
            }
          }
        }
        this.root.push(temp + name);
      }
    },
    confirm: function() {
      this.$emit("close");
    }
  },
  created: function() {
    this.sortTree();
    this.check();
  }
};
</script>

    
<style scoped>
.overviewTitle {
  margin-left: 1em;
}
.modalBody {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 1em;
}

.nameDisplay {
  white-space: pre;
  font-size: 16px;
  padding-bottom: 0.5em;
}
</style>

