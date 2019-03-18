<template>
  <footer>
    <button class="btnCancel">Cancel</button>
    <button class="btnSave">Save</button>
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
  }
};
</script>

 <style scoped>
footer {
  background-color: white;
  border-top: 1.5px solid black;
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
  background-color: red;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
}

.toggled {
  background-color: green;
}

.btnSave {
  float: right;
  background-color: #b3dcff;
  border-right-color: #c5c5ff;
  border-bottom-color: #c5c5ff;
}
</style>
