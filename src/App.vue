<template>
  <div id="app">
    <Menu />
    <Workspace />
    <Remove />
    <Footer />
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Workspace from "./components/Workspace";
import Remove from "./components/Remove";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Menu,
    Workspace,
    Remove,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

body {
  background-image: url("./assets/clouds3.png");
  background-size: cover;
  background-attachment: fixed;
  margin: 10em 0 56px 0;
}

.option {
  display: table;
  cursor: pointer;
  background-color: white;
  margin: 0.5em;
  padding: 0 0.5em;
  width: 6em;
  min-height: 3.5em;
  border: solid black 2px;
  border-radius: 15px;
}

.workspace .option {
  box-shadow: 5px 10px 18px #888888;
}

.workspace .option:hover {
  box-shadow: 6px 12px 20px #555555;
  border: solid #c269a1 2px;
}

.trash .option {
  background-color: red;
  opacity: 0.5;
}

.ghostOption {
  opacity: 0.2;
}

.optionTitle {
  margin: -0.3em 0 0 0;
}

.optionValue {
  padding: 0.5em;
  margin: 0 0 0 2em;
  font-size: 0.7em;
}

.optionIcon {
  height: 1.7em;
  padding-top: 0.5em;
}

.optionIconSmall {
  float: left;
  height: 1em;
  padding: 0.5em;
}

.btnCancel {
  background-color: #aaaaaa;
  float: left;
}

.btnConfirm {
  float: right;
  background-color: #00c455;
}

.indent .el-input__inner {
  padding-left: 40px !important;
}

.el-button--small {
  height: 2.3em;
}

.messagebox {
  white-space: pre;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 500px;
}

.v--modal {
  width: 60em;
  min-height: 20em;
}

.modalHeader {
  display: flex;
  background-image: linear-gradient(#74496f, #8d3a6f);
  color: white;
  border-bottom: 0.1em solid lightgray;
}

.modalIcon {
  height: 2.5em;
  padding: 1em;
}

.modalFooter {
  position: absolute;
  bottom: 0em;
  width: calc(100% - 2em);
  padding: 1em;
  background-color: white;
}

.save {
  text-align: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  left: calc(50% - 100px) !important;
  width: 200px;
}

.save p {
  text-align: center;
}

h1 {
  font-size: 2.7em;
  font-family: "Avenir";
  margin: 0.4em 0 0 0;
}

hr {
  height: 0.2em;
  background-color: black;
  margin: 0 1em;
}

button {
  width: 6em;
  height: 1.7em;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  border-color: #aaaaaa;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
}

button:hover {
  box-shadow: 3px 3px 30px 0 rgba(0, 0, 0, 0.2),
    0 10px 20px 0 rgba(0, 0, 0, 0.19);
  border-color: black;
}

@font-face {
  font-family: "Avenir";
  src: url("./assets/AvenirLTStd-Roman.otf"); /* IE9 Compat Modes */
}

@font-face {
  font-family: "AvenirBold";
  src: url("./assets/AvenirLTStd-Black.otf");
}
</style>
