<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon color" src="../../assets/time.svg" alt="icon" />
      <h1 v-on:click="addTime()">Select Time</h1>
    </div>
    <Side />
    <div class="modalBody">
      <div class="radioOption" v-on:click="toggle(0)">
        <el-radio v-model="radio" :label="0">Time from take off</el-radio>
        <el-input-number
          v-model="nbrs[0]"
          :min="1"
          :max="10"
          :disabled="this.radio == 0 ? false : true"
        />
        <span v-bind:class="this.radio == 0 ? 'suffix' : 'suffix faded'"
          >h</span
        >
      </div>
      <div class="radioOption" v-on:click="toggle(1)">
        <el-radio v-model="radio" :label="1">Time to destination</el-radio>
        <el-input-number
          v-model="nbrs[1]"
          :min="1"
          :max="10"
          :disabled="this.radio == 1 ? false : true"
        />
        <span v-bind:class="this.radio == 1 ? 'suffix' : 'suffix faded'"
          >h</span
        >
      </div>
      <div class="radioOption" v-on:click="toggle(2)">
        <el-radio v-model="radio" :label="2">Altitude</el-radio>
        <el-input-number
          v-model="nbrs[2]"
          :min="15000"
          :max="30000"
          :step="5000"
          :disabled="this.radio == 2 ? false : true"
        />
        <span v-bind:class="this.radio == 2 ? 'suffix' : 'suffix faded'"
          >ft</span
        >
      </div>
      <div class="radioOption" v-on:click="toggle(3)">
        <el-radio v-model="radio" :label="3">Meal served</el-radio>
      </div>
      <div class="radioOption" v-on:click="toggle(4)">
        <el-radio v-model="radio" :label="4">Doors closed</el-radio>
      </div>
      <div class="radioOption" v-on:click="toggle(5)">
        <el-radio v-model="radio" :label="5">Weight on wheels</el-radio>
      </div>
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
  props: ["option", "currentDepth"],
  components: {
    Side
  },
  data() {
    return {
      radio: -1,
      nbrs: [1, 1, 15000]
    };
  },
  methods: {
    toggle: function(nbr) {
      this.radio = nbr;
    },
    displayTime(number) {
      switch (number) {
        case 0: {
          return this.nbrs[0] > 1
            ? this.nbrs[0] + " hours from take off"
            : this.nbrs[0] + " hour from take off";
        }
        case 1: {
          return this.nbrs[1] > 1
            ? this.nbrs[1] + " hours to destination"
            : this.nbrs[1] + " hour to destination";
        }
        case 2: {
          return this.nbrs[2] + "ft above sea level";
        }
        case 3: {
          return "Meal served";
        }
        case 4: {
          return "Doors closed";
        }
        case 5: {
          return "Weight on wheels";
        }
      }
    },
    confirm: function() {
      if (this.radio != -1) {
        this.$props.option.edited = true;
        let returnValue = this.displayTime(this.radio);
        this.$props.option.display = returnValue;
        this.$props.option.value = {
          radio: this.radio,
          nbr: this.nbrs[this.radio]
        };
      }
      this.$emit("close");
    },
    close: function() {
      this.$emit("close");
    }
  },
  created: function() {
    if (this.$props.option.edited) {
      this.radio = this.$props.option.value.radio;
      this.nbrs[this.radio] = this.$props.option.value.nbr;
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
  margin: 1em;
}

.radioOption {
  padding: 0.3em;
}

.suffix {
  position: absolute;
  right: 0;
  margin: 1.3em 23em;
  z-index: 1;
  font-size: 14px;
}

.faded {
  color: #c0c4cc;
}

.radioOption:nth-child(odd) {
  background-color: rgb(250, 250, 250);
  width: 75%;
}

.el-input-number {
  float: right;
  margin-top: 5px;
  margin-right: 1em;
}

.el-radio {
  padding: 1em 0;
}
</style>
