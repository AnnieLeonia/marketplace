<template>
  <div id="app">
    <Menu />
    <Workspace />
    <Footer />
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Workspace from "./components/Workspace";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Menu,
    Workspace,
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
  /* background-image: url("assets/clouds2.jpg");
  background-size: cover;
  background-attachment: fixed; */
  margin: 10em 0 56px 0;
}

.option {
  display: table;
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

.btnCanel {
  float: left;
}

.btnConfirm {
  float: right;
  background-color: limegreen;
}

.v--modal {
  width: 60em;
  min-height: 20em;
}

.modalHeader {
  display: flex;
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
  border-radius: 5px;
  box-shadow: 2px 2px 16px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@font-face {
  font-family: "Avenir";
  src: url("assets/AvenirLTStd-Roman.otf"); /* IE9 Compat Modes */
}
</style>
