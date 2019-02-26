<template>
  <div id="app">
    <Menu/>
    <Workspace/>
    <Footer/>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0px;
}
</style>
