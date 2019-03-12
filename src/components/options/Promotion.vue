<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon" src="../../assets/promotion.svg" alt="icon" />
      <h1>Promotion</h1>
    </div>
    <hr />
    <div class="modalBody">
      <el-select v-model="value6" filterable placeholder="Select">
        <span class="one"> First</span>
        <span class="one">Second</span>
        <span class="one">Third</span>
        <el-option
          v-for="item in cities"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span class="one">{{ item.value }}</span>
          <span class="one">{{ item.label }}</span>
          <span class="one">{{ item.song }}</span>
        </el-option>
      </el-select>
    </div>
    <div class="modalFooter">
      <button class="btnCancel">Cancel</button>
      <button class="btnConfirm">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        {
          value: "Beijing",
          label: "Beijing",
          song: "Hello"
        },
        {
          value: "Shanghai",
          label: "Shanghai",
          song: "Hello again"
        },
        {
          value: "Nanjing",
          label: "Nanjing",
          song: "Hey"
        },
        {
          value: "Chengdu",
          label: "Chengdu",
          song: "Tjo"
        },
        {
          value: "Shenzhen",
          label: "Shenzhen",
          song: "Lol"
        },
        {
          value: "Guangzhou",
          label: "Guangzhou",
          song: "Ok"
        }
      ],
      value6: ""
    };
  }
};
</script>

<style >
.modalBody {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 1em;
}

.one {
  display: inline-grid;
  width: 100px;
}
</style>
