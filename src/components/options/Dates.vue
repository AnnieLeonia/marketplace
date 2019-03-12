<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon" src="../../assets/dates.svg" alt="icon" />
      <h1>Dates</h1>
    </div>
    <hr />
    <div class="modalBody">
      <v-date-picker
        is-inline
        class="calendar"
        mode="range"
        :value="value"
        @input="addDates($event)"
      />
      <ul>
        <p class="placeholder" v-if="dates.length == 0">No dates added</p>
        <li v-for="(date, index) in this.dates" :key="index">
          <img
            class="removeIcon"
            src="../../assets/remove.svg"
            alt="icon"
            v-on:click="removeDates(index)"
          />
          <p class="listDate">{{ displayDate(date) }}</p>
        </li>
      </ul>
    </div>
    <div class="modalFooter">
      <button class="btnCancel" v-on:click="close()">Cancel</button>
      <button class="btnConfirm" v-on:click="confirm()">Confirm</button>
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
  props: ["option"],
  data() {
    return {
      value: null,
      dates: []
    };
  },
  methods: {
    addDates: function(newDate) {
      this.dates.push(newDate);
      this.dates.sort(function compare(a, b) {
        return a.start - b.start;
      });
    },
    removeDates: function(index) {
      this.dates.splice(index, 1);
    },
    displayDate(date) {
      let dateToDisplay = DateFormat(date.start, "mmmm dS, yyyy");
      if (date.start.toString() !== date.end.toString()) {
        dateToDisplay += "  -  ";
        dateToDisplay += DateFormat(date.end, "mmmm dS, yyyy");
      }
      return dateToDisplay;
    },
    confirm: function() {
      let returnValue;
      if (this.dates.length !== 0) {
        this.$props.option.edited = true;
        returnValue = this.displayDate(this.dates[0]);
      }
      if (this.dates.length > 1) {
        returnValue += " + "
          .concat(this.dates.length - 1)
          .concat(" more dates");
      }
      this.$props.option.value = returnValue;
      this.$emit("close");
    },
    close: function() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modalBody {
  margin: 1em;
}

.calendar {
  float: left;
  height: 382px;
}

ul {
  color: #393d46;
  padding: 0;
  margin-left: 1em;
  height: 380px;
  overflow: auto;
  border: 1px solid rgb(218, 218, 218);
}

li {
  list-style: none;
  padding: 0.5em;
  margin: 1px;
}

li:nth-child(even) {
  background-color: rgb(250, 250, 250);
}
li:nth-child(odd) {
  background: #fff;
}

.placeholder {
  margin: 2em 0;
  text-align: center;
  color: #555;
  font-size: 24px;
  font-style: italic;
}

.listDate {
  width: 100%;
  margin: 0;
  font-family: "Avenir";
  font-size: 0.9rem;
}

.removeIcon {
  height: 1.2em;
  float: right;
}

.removeIcon:hover + .listDate {
  text-decoration: line-through;
  color: darkgray;
}

.removeIcon:hover {
  height: 1.3em;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
}
</style>
