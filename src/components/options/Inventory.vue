<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon color" src="../../assets/inventory.svg" alt="icon">
      <h1>Inventory</h1>
    </div>
    <Side/>
    <div class="modalBody">
      <div class="radioOption">
        <el-radio v-model="radio" :label="0">Onboard inventory is more than</el-radio>
        <el-input-number
          v-model="nbrs[0]"
          :min="1"
          :max="1000"
          :disabled="this.radio == 0 ? false : true"
        />
      </div>
      <div class="radioOption">
        <el-radio v-model="radio" :label="1">Onboard inventory is less than</el-radio>
        <el-input-number
          v-model="nbrs[1]"
          :min="1"
          :max="1000"
          :disabled="this.radio == 1 ? false : true"
        />
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
  props: ["option"],
  components: {
    Side
  },
  data() {
    return {
      radio: -1,
      nbrs: [10, 10]
    };
  },
  methods: {
    displayInventory(number) {
      return number == 0
        ? "More than " + this.nbrs[0] + " left "
        : "Less than " + this.nbrs[1] + " left ";
    },
    confirm: function() {
      if (this.radio != -1) {
        this.$props.option.edited = true;
        let returnValue = this.displayInventory(this.radio);
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

.el-input-number {
  float: right;
  margin-top: 5px;
  margin-right: 1em;
}

.el-radio {
  padding: 1em 0;
}

.el-radio__label {
  font-size: 24px;
}
</style>
