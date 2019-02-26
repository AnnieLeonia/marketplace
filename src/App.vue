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
  /*background-image: url("assets/clouds.jpg");*/
  margin: 150px 0 56px 0;
}

.option {
  background-color: white;
  margin: 0.5em;
  padding: 0.5em;
  width: 100px;
  height: 40px;
  border: solid black 2px;
  border-radius: 15px;
}

button {
  width: 120px;
  height: 32px;
  font-size: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 16px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
