<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon" src="../../assets/time.svg" alt="icon" />
      <h1>Time</h1>
    </div>
    <hr />
    <div class="modalBody">
      <div class="radioOption">
        <el-radio v-model="radio" label="1">Time from take off </el-radio>
        <el-input-number
          v-model="num1"
          :min="1"
          :max="10"
          :disabled="this.radio == 1 ? false : true"
        />
      </div>
      <div class="radioOption">
        <el-radio v-model="radio" label="2">Time to destination</el-radio>
        <el-input-number
          v-model="num2"
          :min="1"
          :max="10"
          :disabled="this.radio == 2 ? false : true"
        />
      </div>
      <div class="radioOption">
        <el-radio v-model="radio" label="3">Altitude</el-radio>
        <el-input-number
          v-model="num3"
          :min="15000"
          :max="30000"
          :step="5000"
          :disabled="this.radio == 3 ? false : true"
        />
      </div>
      <div class="radioOption">
        <el-radio v-model="radio" label="4">Meal served</el-radio>
      </div>
      <div class="radioOption">
        <el-radio v-model="radio" label="5">Doors closed</el-radio>
      </div>
      <div class="radioOption">
        <el-radio v-model="radio" label="6">Weight on wheels</el-radio>
      </div>
    </div>
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
      radio: null,
      num1: 1,
      num2: 1,
      num3: 15000,
      time: ""
    };
  },
  methods: {
    addTime: function() {},
    removeTime: function() {},

    displayTime() {
      return "3 hours";
    },
    confirm: function() {
      this.$props.option.edited = true;
      let returnValue = this.displayTime();
      this.$props.option.value = returnValue;
      this.$emit("close");
    },
    close: function() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.modalBody {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 1em;
}

.radioOption {
  padding: 0.3em;
}

.radioOption:nth-child(odd) {
  background-color: rgb(250, 250, 250);
}

.el-input-number {
  float: right;
  margin-top: 5px;
}

.el-radio {
  padding: 1em 0;
}

.el-radio__label {
  font-size: 24px;
}
</style>
