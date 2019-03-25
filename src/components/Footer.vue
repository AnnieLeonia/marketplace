<template>
  <footer>
    <button class="btnCancel" v-on:click="clear()">Clear</button>
    <button class="btnSave" v-on:click="save()">Save</button>
    <toggle-button
      :value="onOff"
      :labels="{ checked: 'On', unchecked: 'Off' }"
      :css-colors="true"
      :font-size="20"
      :width="100"
      :height="30"
    />
  </footer>
</template>

<script>
import { ToggleButton } from "vue-js-toggle-button";
export default {
  components: {
    ToggleButton
  },
  data() {
    return {
      onOff: true
    };
  },
  methods: {
    clear: function() {
      location.reload();
    },
    save() {
      this.$notify({
        title: "Success",
        message: "Your rule has been saved successfully",
        type: "success",
        customClass: "save",
        showClose: false,
        duration: 2000,
        position: "top-left"
      });
      setTimeout(function() {
        location.reload();
      }, 2000);
    }
  }
};
</script>

 <style scoped>
footer {
  background-color: #45699a;
  position: fixed;
  width: 100%;
  height: 56px;
  bottom: 0;
}

button {
  margin: 12px;
}

.vue-js-switch {
  float: right;
  margin: 13px;
  border-radius: 15px;
  background-color: #aaaaaa;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
}

.toggled {
  background-color: #00c455;
}

.btnSave {
  float: right;
  background-color: #00c455;
}
</style>
