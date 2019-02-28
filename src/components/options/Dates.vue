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
      class="calendar"
      mode='range'
      popoverVisibility="visible"
      :value=value
      :v-model=selectedDates
      @input=input($event)
      show-caps
    >
    </v-date-picker>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <button v-on:click="hello('word')">Hello</button>
    <ul>
      <li
        v-for="(date, index) in this.selectedDates"
        :key=index
      >
        <p>{{date.start}}</p>
        <p v-if="date.start!==date.end">{{date.end}}</p>
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
    input: function(newDate) {
      console.log(newDate);
      this.selectedDates.push(newDate);
    }
  }
};
</script>

<style scoped>
.calendar {
  width: 50%;
}

ul {
  width: 50%;
}
</style>
