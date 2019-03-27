<template>
  <div>
    <div class="modalHeader">
      <img
        class="modalIcon color"
        src="../../assets/promotion.svg"
        alt="icon"
      />
      <h1>Select Routes</h1>
    </div>
    <Side />
    <div class="modalBody">
      <div class="search">
        <p class="label from">From:</p>
        <el-input placeholder="Enter depature" v-model="from"></el-input>
        <p class="label to">To:</p>
        <el-input placeholder="Enter destination" v-model="to"></el-input>
      </div>
      <el-table
        ref="multipleTable"
        empty-text="No routes found"
        stripe
        height="320"
        :data="filteredRoutes"
        row-key="id"
        @select="addAll($event)"
        @row-click="add($event)"
        @select-all="addAll($event)"
        class="table"
        :cell-style="boldCell"
      >
        >
        <el-table-column type="selection" reserve-selection width="55" />
        <el-table-column property="from" sortable label="From" width="120" />
        <el-table-column property="to" sortable label="To" width="120" />
        <el-table-column label="Desciption">
          <template slot-scope="scope">{{
            scope.row.cityFrom + " to " + scope.row.cityTo
          }}</template>
        </el-table-column>
      </el-table>
    </div>
    <div class="modalFooter">
      <button class="btnCancel" v-on:click="close()">Cancel</button>
      <button class="btnConfirm" v-on:click="confirm()">Confirm</button>
    </div>
  </div>
</template>

<script>
import Side from "../Side";
export default {
  props: ["option"],
  components: {
    Side
  },
  data() {
    return {
      from: "",
      to: "",
      selected: [],
      routes: [
        {
          id: 0,
          from: "LHR",
          to: "BOS",
          cityFrom: "London",
          cityTo: "Boston"
        },
        {
          id: 1,
          from: "ARN",
          to: "CIC",
          cityFrom: "Stockholm",
          cityTo: "Chicago"
        },
        {
          id: 2,
          from: "NRT",
          to: "SFO",
          cityFrom: "Tokyo",
          cityTo: "San Francisco"
        },
        {
          id: 3,
          from: "SFO",
          to: "ARN",
          cityFrom: "San Francisco",
          cityTo: "Stockholm"
        },
        {
          id: 4,
          from: "SFO",
          to: "BFL",
          cityFrom: "San Francisco",
          cityTo: "Bakersfield"
        },
        {
          id: 5,
          from: "SFO",
          to: "BOS",
          cityFrom: "San Francisco",
          cityTo: "Boston"
        },
        {
          id: 6,
          from: "SFO",
          to: "AMS",
          cityFrom: "San Francisco",
          cityTo: "Amsterdam"
        },
        {
          id: 7,
          from: "ARN",
          to: "BUD",
          cityFrom: "Stockholm",
          cityTo: "Budapest"
        },
        {
          id: 8,
          from: "ARN",
          to: "PRG",
          cityFrom: "Stockholm",
          cityTo: "Prag"
        },
        {
          id: 9,
          from: "LHR",
          to: "BJS",
          cityFrom: "London",
          cityTo: "Beijing"
        },
        {
          id: 10,
          from: "LHR",
          to: "AMS",
          cityFrom: "London",
          cityTo: "Amsterdam"
        },
        {
          id: 11,
          from: "SFO",
          to: "ATH",
          cityFrom: "San Francisco",
          cityTo: "Aten"
        },
        {
          id: 12,
          from: "SFO",
          to: "ZRH",
          cityFrom: "San Francisco",
          cityTo: "Zürich"
        },
        {
          id: 13,
          from: "LHR",
          to: "BOM",
          cityFrom: "London",
          cityTo: "Bombay"
        },
        {
          id: 14,
          from: "NRT",
          to: "AUH",
          cityFrom: "Tokyo",
          cityTo: "Abu Dhabi"
        },
        {
          id: 15,
          from: "NRT",
          to: "ICN",
          cityFrom: "Tokyo",
          cityTo: "Seoul"
        },
        {
          id: 16,
          from: "SFO",
          to: "SIN",
          cityFrom: "San Francisco",
          cityTo: "Singapore"
        },
        {
          id: 17,
          from: "LHR",
          to: "ICN",
          cityFrom: "London",
          cityTo: "Seoul"
        },
        {
          id: 18,
          from: "DXB",
          to: "NRT",
          cityFrom: "Dubai",
          cityTo: "Tokyo"
        }
      ]
    };
  },
  computed: {
    filteredRoutes: function() {
      let result = this.routes;
      if (this.from) {
        result = result.filter(
          item =>
            item.from.includes(this.from.toUpperCase()) ||
            item.cityFrom.toUpperCase().includes(this.from.toUpperCase())
        );
      }
      if (this.to) {
        result = result.filter(
          item =>
            item.to.toLowerCase().includes(this.to) ||
            item.cityTo.toLowerCase().includes(this.to)
        );
      }
      return result;
    },
    displayRoutes: function() {
      let modifier = 1;
      if (!this.ascending) modifier = -1;
      function surnameName(a, b) {
        if (a.from < b.from) return -1;
        if (a.from > b.from) return 1;
        if (a.to < b.to) return -1;
        if (a.to > b.to) return 1;
        return 0;
      }
      return this.routes.sort(surnameName);
    }
  },
  methods: {
    add: function(row) {
      this.$refs.multipleTable.toggleRowSelection(row);
      if (this.selected.some(route => route.id === row.id)) {
        this.selected.splice(this.selected.indexOf(row), 1);
      } else {
        this.selected.push(row);
      }
    },
    addAll: function(rows) {
      this.selected = [];
      for (var i = 0; i < rows.length; i++) {
        if (!this.selected.includes(rows[i])) {
          this.selected.push(rows[i]);
        }
      }
    },
    boldCell: function({ row }) {
      if (this.selected.some(el => el.id === row.id)) {
        return "font-family: 'AvenirBold'";
      }
    },
    confirm: function() {
      let returnValue;
      if (this.selected.length === 0) {
        this.$props.option.edited = false;
      } else {
        this.$props.option.edited = true;
        returnValue = this.selected[0].from
          .concat(" - ")
          .concat(this.selected[0].to);
        if (this.selected.length > 1) {
          returnValue += " + "
            .concat(this.selected.length - 1)
            .concat(" more routes");
        }
        this.$props.option.display = returnValue;
        this.$props.option.value = this.selected;
      }
      this.$emit("close");
    },
    close: function() {
      this.$emit("close");
    }
  },
  beforeMount() {
    this.displayRoutes;
  },
  mounted: function() {
    if (this.$props.option.edited) {
      const values = this.$props.option.value;
      for (var i = 0; i < this.filteredRoutes.length; i++) {
        if (values.find(route => route.id === this.filteredRoutes[i].id)) {
          this.add(this.filteredRoutes[i]);
        }
      }
    }
  }
};
</script>

<style scoped>
.color {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
    brightness(102%) contrast(102%);
}
.modalBody {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  position: absolute;
  margin: 1em;
}

.table {
  width: 700px;
  height: calc(400px - 6em);
  border: 1px solid rgb(218, 218, 218);
}

.search {
  display: flex;
  height: 4em;
}

.label,
.el-input {
  display: inline-block;
}

.label {
  margin-right: 0.2em;
}

.to {
  margin-left: 1em;
}

.el-input {
  margin-top: 12px;
}
</style>
