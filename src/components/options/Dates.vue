<template>
  <div>
    <div class="modalHeader">
      <img
        class="modalIcon"
        src="../../assets/dates.svg"
        alt="icon"
      >
      <h1>Dates</h1>
    </div>
    <hr />
    <v-date-picker
      is-inline
      class="calendar"
      mode='range'
      :value=value
      @input=addDates($event)
    />
    <ul>
      <p
        class="placeholder"
        v-if="selectedDates.length == 0"
      >No dates added<p>
          <li
            v-for="(date, index) in this.selectedDates"
            :key=index
          >
            <p class="listDate">{{displayDate(date)}}</p>
            <button
              class="btnRemove"
              v-on:click="removeDates(index)"
            >X</button>
          </li>
    </ul>
    <div class="modalFooter">
      <button class="btnCancel">Cancel</button>
      <button class="btnConfirm">Confirm</button>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import DateFormat from "dateformat";
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      value: null,
      selectedDates: []
    };
  },
  methods: {
    hello: function(word) {
      console.log(this.selectedDates);
    },
    addDates: function(newDate) {
      this.selectedDates.push(newDate);
      this.selectedDates.sort(function compare(a, b) {
        return a.start - b.start;
      });
    },
    removeDates: function(index) {
      this.selectedDates.splice(index, 1);
    },
    displayDate(date) {
      let dateToDisplay = DateFormat(date.start, "mmmm dS, yyyy");
      if (date.start.toString() !== date.end.toString()) {
        dateToDisplay += "  -  ";
        dateToDisplay += DateFormat(date.end, "mmmm dS, yyyy");
      }
      return dateToDisplay;
    }
  }
};
</script>

<style scoped>
.calendar {
  float: left;
  margin: 1em;
}

.calendar .c-day-content {
  background-color: antiquewhite;
}

ul {
  padding: 1em;
  margin: 1em;
  height: 300px;
  overflow: auto;
  border: solid red 2px;
}

li {
  display: flex;
  margin: 0.5em;
}

.placeholder {
  text-align: center;
  color: #555;
  font-size: 24px;
  font-style: italic;
}

.listDate {
  width: 100%;
  margin: 0;
  font-size: 22px;
  font-family: "Avenir";
}

.btnRemove {
  width: 2em;
}
</style>
