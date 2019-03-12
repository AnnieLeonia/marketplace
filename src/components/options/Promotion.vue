<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon" src="../../assets/promotion.svg" alt="icon">
      <h1>Promotion</h1>
    </div>
    <hr>
    <div class="modalBody">
      <p class="label">Chose placement and text for promotion</p>
      <div class="radioOption">
        <el-radio v-model="radio" :label="1">Home page</el-radio>
      </div>
      <div class="radioOption">
        <el-radio v-model="radio" :label="2">Game page</el-radio>
      </div>
      <div class="radioOption">
        <el-radio v-model="radio" :label="3">Movie page</el-radio>
      </div>
      <el-input type="textarea" :rows="4" placeholder="Write promotion..." v-model="textarea"></el-input>
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
      textarea: ""
    };
  },
  methods: {
    confirm: function() {
      this.$props.option.edited = true;
      let returnValue = "";
      if (this.radio === 1) {
        returnValue = "Home page";
      } else if (this.radio === 2) {
        returnValue = "Game page";
      } else if (this.radio === 3) {
        returnValue = "Movie page";
      }
      returnValue += " - ".concat(this.textarea);
      this.$props.option.display = returnValue;
      this.$props.option.value = {
        radio: this.radio,
        txt: this.textarea
      };
      this.$emit("close");
    },
    close: function() {
      this.$emit("close");
    }
  },
  created: function() {
    if (this.$props.option.edited) {
      this.radio = this.$props.option.value.radio;
      this.textarea = this.$props.option.value.txt;
    }
  }
};
</script>

<style scoped>
.modalBody {
  margin: 1em;
}
.label {
  margin-left: 1em;
  font-size: 20px;
}
.radioOption {
  margin: 1em;
}
.el-radio__label {
  color: purple;
  font-size: 24px;
}
</style>
