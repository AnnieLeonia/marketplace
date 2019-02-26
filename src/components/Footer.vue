<template>
  <footer>
    <button class="btnCancel">Cancel</button>
    <button class="btnSave">Save</button>
  </footer>
</template>

<script>
export default {};
</script>

 <style scoped>
footer {
  background-color: white;
  border: 1.5px solid black;
  position: fixed;
  width: 100%;
  height: 56px;
  bottom: 0;
}

button {
  margin: 12px;
}

.btnCanel {
  float: left;
}

.btnSave {
  float: right;
  background-color: #b3dcff;
  border-right-color: #c5c5ff;
  border-bottom-color: #c5c5ff;
}
</style>
