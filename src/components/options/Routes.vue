<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon" src="../../assets/routes.svg" alt="icon">
      <h1>Select Routes</h1>
    </div>
    <hr>
    <div class="inputField">
      <label for="title">From:</label>
      <input type="text" fromTo="from" v-model="searchFrom" placeholder="Enter depature...">
      <label for="title">To:</label>
      <input type="text" fromTo="to" v-model="searchTo" placeholder="Enter destination...">
    </div>
    <table class="wholeTable" cellspacing="0" cellpadding="0" border="1" width="325">
      <tr>
        <td>
          <table cellspacing="0" cellpadding="0" width="777">
            <tr class="header">
              <th>
                <label class="form-checkbox">
                  <input type="checkbox" name="checkAll" v-model="selectAll" @click="select">
                  <i class="form-icon"></i>
                </label>
              </th>
              <th class="from" @click="sort('from')">From
                <div
                  v-if="'from' == sortColumn"
                  v-bind:class="ascending ? 'arrow-up' : 'arrow-down'"
                ></div>
              </th>
              <th class="to" @click="sort('to')">To
                <div v-if="'to' == sortColumn" v-bind:class="ascending ? 'arrow-up' : 'arrow-down'"></div>
              </th>
              <th class="description">Description</th>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <div class="modalBody">
            <table cellspacing="0" cellpadding="1" width="777">
              <tr class="body" v-for="option in sortedRoutes" v-bind:key="option.id">
                <td>
                  <label class="form-checkbox">
                    <input type="checkbox" :value="option.id" :id="option.id" v-model="selected">
                    <i class="form-icon" :for="option.id"></i>
                  </label>
                </td>
                <label class="optionText" :for="option.id">
                  <div class="bolded" v-if="selected.includes(option.id)">
                    <td class="optionFrom" id="optionFrom">
                      <b>{{option.from}}</b>
                    </td>
                    <td class="optionTo" id="optionTo">
                      <b>{{option.to}}</b>
                    </td>
                    <td class="optionDescription" id="optionDescription">
                      <b>{{option.description}}</b>
                    </td>
                  </div>
                  <div class="notBolded" v-else>
                    <td class="optionFrom">{{option.from}}</td>
                    <td class="optionTo">{{option.to}}</td>
                    <td class="optionDescription">{{option.description}}</td>
                  </div>
                </label>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
    <span>Selected id: {{ selected }}</span>
    <div class="modalFooter">
      <button class="btnCancel" v-on:click="close()">Cancel</button>
      <button class="btnConfirm" v-on:click="confirm()">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["option"],
  data() {
    return {
      routes: [
        { id: 0, from: "LHR", to: "BOS", description: "London to Boston" },
        { id: 1, from: "ARN", to: "CIC", description: "Stockholm to Chicago" },
        {
          id: 2,
          from: "NRT",
          to: "SFO",
          description: "Tokyo to San Francisco"
        },
        {
          id: 3,
          from: "SFO",
          to: "ARN",
          description: "San Francisco to Stockholm"
        },
        {
          id: 4,
          from: "SFO",
          to: "BFL",
          description: "San Francisco to Bakersfield"
        },
        {
          id: 5,
          from: "SFO",
          to: "BOS",
          description: "San Francisco to Boston"
        },
        {
          id: 6,
          from: "SFO",
          to: "AMS",
          description: "San Francisco to Amsterdam"
        },
        { id: 7, from: "ARN", to: "BUD", description: "Stockholm to Budapest" },
        { id: 8, from: "ARN", to: "PRG", description: "Stockholm to Prag" },
        { id: 9, from: "LHR", to: "BJS", description: "London to Beijing" },
        { id: 10, from: "LHR", to: "AMS", description: "London to Amsterdam" },
        { id: 11, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 12, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 13, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 14, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 15, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 16, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 17, from: "SFO", to: "BOS", description: "London to Boston" }
      ],
      selected: [],
      selectAll: false,
      searchFrom: "",
      searchTo: "",
      ascending: true,
      sortColumn: "from"
    };
  },
  computed: {
    sortedRoutes: function() {
      let result = this.routes;
      if (this.searchFrom) {
        result = result.filter(item =>
          item.from.toLowerCase().includes(this.searchFrom)
        );
      }
      if (this.searchTo) {
        result = result.filter(item =>
          item.to.toLowerCase().includes(this.searchTo)
        );
      }
      var ascending = this.ascending;
      return result.sort((a, b) => {
        if (a[this.sortColumn] > b[this.sortColumn]) {
          return ascending ? 1 : -1;
        } else if (a[this.sortColumn] < b[this.sortColumn]) {
          return ascending ? -1 : 1;
        }
        return 0;
      });
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
      // return this.users.sort(surnameName); // sorts in-place
      return this.routes.sort(surnameName); // shallow clone + sort
    }
  },
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.routes) {
          this.selected.push(this.routes[i].id);
        }
      }
    },
    sort: function(col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending;
      } else {
        this.ascending = true;
        this.sortColumn = col;
      }
    },
    confirm: function() {
      this.$props.option.edited = true;
      let returnValue = this.routes.find(o => o.id === this.selected[0]).from;
      returnValue += " - ".concat(
        this.routes.find(o => o.id === this.selected[0]).to
      );
      if (this.selected.length > 1) {
        returnValue += " + "
          .concat(this.selected.length - 1)
          .concat(" more routes");
      }
      this.$props.option.value = returnValue;
      this.$emit("close");
    },
    close: function() {
      this.$emit("close");
    }
  },
  beforeMount() {
    this.displayRoutes;
  }
};
</script>

<style scoped>
.inputField {
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

.wholeTable {
  table-layout: fixed;
  width: 78%;
  margin: 1em 0 0 8em;
  height: 20em;
}
.header {
  color: white;
  background-color: gray;
  font-size: 24px;
  height: 2.2em;
}
input[type="checkbox"] {
  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  margin-left: 1em;
}

.from {
  padding-left: 0.4em;
  width: 3.4em;
  cursor: pointer;
}

.to {
  margin: none;
  width: 2em;
  padding-left: 1em;
  cursor: pointer;
}
.arrow-up {
  width: 0;
  height: 0;
  float: right;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid black;
  margin-top: 0.5em;
}

.arrow-down {
  width: 0;
  height: 0;
  float: right;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid black;
  margin-top: 0.5em;
}

.description {
  padding-left: 3.2em;
}

.modalBody {
  width: 794px;
  overflow: auto;
  height: 17em;
}
.body {
  font-size: 20px;
}
.body:hover {
  background-color: #f5f5f5;
}
.optionFrom {
  padding: 0.4em 0 0 2.5em;
  width: 4.5em;
}
.optionTo {
  padding-left: 0.6em;
  width: 4.5em;
}

.optionDescription {
  padding-left: 1.7em;
  width: 13em;
  display: inline-block;
}

.bolded,
.notBolded {
  display: inline-table;
}
</style>
