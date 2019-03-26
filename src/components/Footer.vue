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
      this.$confirm(
        "Your rule has been successfully saved! \nBy pressing finish the current rule will be replaced with a new empty rule. \nBy pressing cancel you will continue with your current rule.",
        "Saved!",
        {
          customClass: "messagebox",
          distinguishCancelAndClose: true,
          confirmButtonText: "Finsih",
          cancelButtonText: "Cancel"
        }
      )
        .then(() => {
          location.reload();
        })
        .catch(action => {});
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

.vue-js-switch:hover {
  border: solid black 1px;
}

.toggled {
  background-color: #00c455;
}

.btnSave {
  float: right;
  background-color: #00c455;
}
</style>
