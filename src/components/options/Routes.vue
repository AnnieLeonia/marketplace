<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon" src="../../assets/routes.svg" alt="icon">
      <h1>Select Routes</h1>
    </div>
    <hr>
    <div class="inputField">
      <label for="title">From:</label>
      <input type="text" fromTo="from" placeholder="Enter depature...">
      <label for="title">To:</label>
      <input type="text" fromTo="to" placeholder="Enter destination...">
    </div>
    <table class="wholeTable" cellspacing="0" cellpadding="0" border="1" width="325">
      <tr>
        <td>
          <table cellspacing="0" cellpadding="1" width="777">
            <tr class="header">
              <th>
                <label class="form-checkbox">
                  <input type="checkbox" name="checkAll" v-model="selectAll" @click="select">
                  <i class="form-icon"></i>
                </label>
              </th>
              <th class="from">From</th>
              <th class="to">To</th>
              <th class="description">Description</th>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <div class="modalBody">
            <table cellspacing="0" cellpadding="1" width="777">
              <tr class="body" v-for="option in routes" v-bind:key="option.id">
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
      <button class="btnCancel">Cancel</button>
      <button class="btnConfirm">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { id: 0, from: "LHR", to: "BOS", description: "London to Boston" },
        { id: 1, from: "LHR", to: "CIC", description: "London to Chicago" },
        { id: 2, from: "NRT", to: "SFO", description: "London to Boston" },
        { id: 3, from: "SFO", to: "ARN", description: "London to Boston" },
        { id: 4, from: "SFO", to: "BFL", description: "London to Boston" },
        { id: 5, from: "SFO", to: "BOS", description: "London to Boston" },
        { id: 6, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 7, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 8, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 9, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 10, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 11, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 12, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 13, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 14, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 15, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 16, from: "SFO", to: "SIN", description: "London to Boston" },
        { id: 17, from: "SFO", to: "BOS", description: "London to Boston" }
      ],
      selected: [],
      selectAll: false
    };
  },
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.routes) {
          this.selected.push(this.routes[i].id);
        }
      }
    }
  }
};
</script>

<style>
.inputField {
  padding: 0.5em;
  font-size: 1.5em;
  height: 32px;
}

.from {
  margin-right: 1.5em;
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
  height: 1.5em;
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
  padding-left: 0.5em;
  width: 3.8em;
}

.to {
  margin: none;
  width: 4em;
  padding-left: 0.3em;
}

.description {
  padding-left: 3.2em;
}

.modalBody {
  width: 799px;
  overflow: auto;
  height: 16em;
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
  padding-left: 0.4em;
  width: 4.5em;
}

.optionDescription {
  padding-left: 4em;
  width: 10em;
  display: inline-block;
}

.bolded,
.notBolded {
  display: inline-table;
}
</style>
