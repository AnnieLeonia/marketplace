<template>
  <div>
    <div class="modalHeader">
      <img
        class="modalIcon color"
        src="../../assets/promotion.svg"
        alt="icon"
      />
      <h1>Select Promotion</h1>
    </div>
    <Side />
    <div class="modalBody">
      <h2>Chose placement and text for promotion</h2>
      <div class="radioOption" v-on:click="toggle(0)">
        <el-radio v-model="radio" :label="0">Home page</el-radio>
      </div>
      <div class="radioOption" v-on:click="toggle(1)">
        <el-radio v-model="radio" :label="1">Game page</el-radio>
      </div>
      <div class="radioOption" v-on:click="toggle(2)">
        <el-radio v-model="radio" :label="2">Movie page</el-radio>
      </div>
      <el-input
        class="textArea"
        type="textarea"
        resize="none"
        :rows="4"
        placeholder="Write promotion..."
        v-model="textarea"
      ></el-input>
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
      textarea: ""
    };
  },
  methods: {
    toggle: function(nbr) {
      this.radio = nbr;
    },
    confirm: function() {
      var textA = '"'.concat(this.textarea) + '"';
      if (this.radio === -1 && this.textarea === "") {
        this.$props.option.edited = false;
      } else {
        this.$props.option.edited = true;
        let returnValue = "";
        if (this.radio === 0) {
          returnValue = "Home page";
          if (this.textarea !== "") {
            returnValue += " - ".concat(textA);
          }
        } else if (this.radio === 1) {
          returnValue = "Game page";
          if (this.textarea !== "") {
            returnValue += " - ".concat(textA);
          }
        } else if (this.radio === 2) {
          returnValue = "Movie page";
          if (this.textarea !== "") {
            returnValue += " - ".concat(textA);
          }
        } else if (this.radio === -1) {
          returnValue = textA;
        }
        //returnValue += " - " + '"'.concat(this.textarea) + '"';
        this.$props.option.display = returnValue;
        this.$props.option.value = {
          radio: this.radio,
          txt: this.textarea
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
      this.textarea = this.$props.option.value.txt;
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

h2 {
  margin-bottom: 0;
}

.label {
  margin-left: 1em;
  font-size: 20px;
}

.radioOption {
  padding: 1em 0.5em;
  width: 75%;
}

.radioOption:nth-child(odd) {
  background-color: rgb(250, 250, 250);
}

.textArea {
  width: calc(75% - 1em);
  margin-top: 0.5em;
}
</style>
