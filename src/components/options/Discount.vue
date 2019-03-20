<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon color" src="../../assets/discount.svg" alt="icon">
      <h1>Select Discount</h1>
    </div>
    <Side/>
    <div class="modalBody">
      <h2>Drag slider to the desired discount</h2>
      <div class="discount">
        <el-slider v-model="value" :step="5"></el-slider>
        <el-input-number v-model="value" :min="0" :max="100"></el-input-number>
        <span class="suffix">%</span>
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
      value: 0
    };
  },
  methods: {
    displayDiscount(value) {
      return value + "% discount";
    },
    confirm: function() {
      if (this.value !== 0) {
        this.$props.option.edited = true;
        let returnValue = this.displayDiscount(this.value);
        this.$props.option.display = returnValue;
        this.$props.option.value = this.value;
      } else {
        this.$props.option.edited = false;
        this.$props.option.display = "";
      }
      this.$emit("close");
    },
    close: function() {
      this.$emit("close");
    }
  },
  created: function() {
    if (this.$props.option.edited) {
      this.value = this.$props.option.value;
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

.el-slider {
  float: left;
  margin: 0.3em;
  width: calc(100% - 450px);
}

.el-input-number {
  float: right;
  margin: 0.2em 0.6em;
}

.suffix {
  position: absolute;
  right: 0;
  margin: 1.15em 22.5em;
  z-index: 1;
  font-size: 14px;
}
</style>
