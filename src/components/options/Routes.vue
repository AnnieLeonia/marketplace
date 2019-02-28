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
          <table cellspacing="0" cellpadding="1" width="765">
            <tr class="header">
              <th class="box">Box</th>
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
            <table cellspacing="0" cellpadding="1" width="300">
              <tr class="body" v-for="option in routes" v-bind:key="option.id">
                <td>
                  <input type="checkbox" id="checkbox_1">
                </td>
                <td class="optionFrom">{{option.from}}</td>
                <td class="optionTo">{{option.to}}</td>
                <td class="optionDescription">{{option.description}}</td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
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
        { id: 17, from: "SFO", to: "SIN", description: "London to Boston" }
      ]
    };
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

.modalBody {
  width: 765px;
  overflow: auto;
}

.wholeTable {
  table-layout: fixed;
  width: 80%;
  margin: 1em 0 0 4em;
}
.header {
  color: white;
  background-color: gray;
  display: table-cell;
}
.box {
  width: 0.1em;
}
.from {
  padding-left: 3em;
  width: 4.5em;
}

.to {
  margin: none;
  width: 4.5em;
}

.description {
  padding-left: 4em;
}

.body:hover {
  background-color: #f5f5f5;
}
.optionFrom {
  padding-left: 3.5em;
  width: 4.5em;
}
.optionTo {
  margin: none;
}

.optionDescription {
  padding-left: 3.5em;
  width: 10em;
}
</style>
