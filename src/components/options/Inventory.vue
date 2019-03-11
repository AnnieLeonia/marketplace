<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon" src="../../assets/inventory.svg" alt="icon" />
      <h1>Inventory</h1>
    </div>
    <hr />
    <div class="modalBody">
      <div class="radioOption">
        <el-radio v-model="radio" :label="1"
          >Onboard inventory is more than
        </el-radio>
        <el-input-number
          v-model="num1"
          :min="1"
          :max="1000"
          :disabled="this.radio == 1 ? false : true"
        />
      </div>
      <div class="radioOption">
        <el-radio v-model="radio" :label="2"
          >Onboard inventory is less than
        </el-radio>
        <el-input-number
          v-model="num2"
          :min="1"
          :max="1000"
          :disabled="this.radio == 2 ? false : true"
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
export default {
  props: ["option"],
  data() {
    return {
      radio: 0,
      num1: 10,
      num2: 10
    };
  },
  methods: {
    displayInventory(number) {
      return number == 1
        ? "More than " + this.num1 + " left "
        : "Less than " + this.num2 + " left ";
    },
    confirm: function() {
      if (this.radio != 0) {
        this.$props.option.edited = true;
        let returnValue = this.displayInventory(this.radio);
        this.$props.option.value = returnValue;
      }
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 1em;
}

.radioOption {
  padding: 0.3em;
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
