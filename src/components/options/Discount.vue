<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon" src="../../assets/discount.svg" alt="icon" />
      <h1>Discount</h1>
    </div>
    <hr />
    <div class="modalBody">
      <h2>Select discount</h2>
      <el-slider v-model="value" show-input :step="5" />
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
      value: 0
    };
  },
  methods: {
    displayDiscount(value) {
      return value + "% discount";
    },
    confirm: function() {
      if (this.radio != 0) {
        this.$props.option.edited = true;
        let returnValue = this.displayDiscount(this.value);
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

<style>
.modalBody {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 1em;
}

.el-slider {
  margin: 3em 0.1em;
}

.el-slider__bar {
  background-color: #409eff;
}
.el-slider__button {
  border-color: #409eff;
}

h2 {
  text-align: center;
}
</style>
