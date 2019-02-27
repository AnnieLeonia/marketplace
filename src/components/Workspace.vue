<template>
  <main>
    <div v-bind:class="[ placeholderVisibility ? 'placeholder' : 'invisible' ]">Drag option here</div>
    <draggable
      class="workspace"
      :options="{group:{ name:'options'},  ghostClass: 'ghostOption', animation: 400}"
      @add="hello('add')"
    ></draggable>
  </main>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      list: [],
      placeholderVisibility: true
    };
  },
  methods: {
    hello: function(word) {
      this.placeholderVisibility = false;
      console.log("Logg:", word);
    }
  }
};
</script>

<style scoped>
main {
  text-align: center;
}

.workspace {
  margin: 0 auto;
  padding: 0.1em;
  width: fit-content;
  min-width: calc(8em + 4px);
  min-height: calc(4.5em + 4px);
  background-color: lightgray;
  border-radius: 15px;
}

.placeholder {
  color: gray;
  position: relative;
  top: 2.5em;
}

.invisible {
  visibility: hidden;
}
</style>
